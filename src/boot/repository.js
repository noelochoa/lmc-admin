import inject from "./inject";
import Dashboard from "./repositories/Dashboard";
import Account from "./repositories/Account";
import Announcement from "./repositories/Announcement";
import Category from "./repositories/Category";
import Discount from "./repositories/Discount";
import Product from "./repositories/Product";
import Order from "./repositories/Order";
import Comment from "./repositories/Comment";
import Holiday from "./repositories/Holiday";

export default inject(async function({ app, ssrContext, Vue }) {
    const repositories = {
        statistics: new Dashboard(app.axios),
        accounts: new Account(app.axios),
        announcements: new Announcement(app.axios),
        categories: new Category(app.axios),
        discounts: new Discount(app.axios),
        products: new Product(app.axios),
        orders: new Order(app.axios),
        comments: new Comment(app.axios),
        holidays: new Holiday(app.axios)
    };

    const RepositoryFactory = {
        get: name => repositories[name]
    };

    // Vue.prototype.$Repo = RepositoryFactory;
    return {
        RepositoryFactory
    };
});
