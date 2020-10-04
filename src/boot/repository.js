import inject from "./inject";
import Dashboard from "./repositories/Dashboard";

export default inject(async function({ app, ssrContext, Vue }) {
    const repositories = {
        statistics: new Dashboard(app.axios)
    };

    const RepositoryFactory = {
        get: name => repositories[name]
    };

    // Vue.prototype.$Repo = RepositoryFactory;
    return {
        RepositoryFactory
    };
});
