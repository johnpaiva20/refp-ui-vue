import Repository from './Repository';
const resource = 'account-categories';

export default {
    listAccountCategories(type) {
        if (type == "PD") {
            return Repository.get(`${resource}?type=DEVELOPMENT_RESEARCH`);
        } else if (type == "EE") {
            return Repository.get(`${resource}?type=ENERGY_EFFICIENCY`);
        }
        return Repository.get(`${resource}`);
    },
}