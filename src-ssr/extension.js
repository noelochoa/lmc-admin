/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Note: This file is used for both PRODUCTION & DEVELOPMENT.
 * Note: Changes to this file (but not any file it imports!) are picked up by the
 * development server, but such updates are costly since the dev-server needs a reboot.
 */
var request = require("request");
var cookieParser = require("cookie-parser");
const API_URL = process.env.API_URL || "http://localhost:3000";
const prod = process.env.NODE_ENV.trim() === "production";

module.exports.extendApp = function({ app, ssr }) {
    /*
     Extend the parts of the express app that you
     want to use with development server too.

     Example: app.use(), app.get() etc
  */
    app.use("/api/users/login", function(req, res) {
        // console.log(req.cookie);
        const url = API_URL + "/users/login";
        let refresh_token = "";
        let resBody = "";
        req.pipe(request(url))
            .on("data", function(chunk) {
                resBody += chunk;
                let body = JSON.parse(resBody);
                if (body.refresh_token) {
                    refresh_token = body.refresh_token;
                }
                if (res.statusCode === 200) {
                    res.cookie("refresh_token", refresh_token, {
                        maxAge: 900000,
                        sameSite: "Strict",
                        httpOnly: true,
                        secure: prod
                    });
                }
            })
            .pipe(res);
    });

    app.use("/api/users/refresh", cookieParser(), function(req, res) {
        console.log(req.originalUrl, req.path, req.query);
        if (!req.cookies.refresh_token) {
            res.status(401).send({
                error: "Not authorized to access this resource."
            });
        } else {
            const url = API_URL + "/users/refresh";
            req.headers["X-REF-TOKEN"] = req.cookies.refresh_token;
            req.pipe(request({ qs: req.query, uri: url })).pipe(res);
        }
    });

    app.use("/api", cookieParser(), function(req, res) {
        console.log(req.originalUrl, req.path, req.query);
        const url = API_URL + req.path;
        req.pipe(request({ qs: req.query, uri: url })).pipe(res);
        // if (!req.cookies.jwt_cmt) {
        //     res.status(401).send({
        //         error: "Not authorized to access this resource."
        //     });
        // } else {
        //     const url = API_URL + req.path;
        //     req.headers.authorization = "Bearer " + req.cookies.jwt_cmt;
        //     req.pipe(request({ qs: req.query, uri: url })).pipe(res);
        // }
    });
};
