import DashboardStats from "./repositories/DashboardStats";

const repositories = {
    statistics: DashboardStats
};

export default {
    get: name => repositories[name]
};
