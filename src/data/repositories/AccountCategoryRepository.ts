import api from '../../common/api.service';
const resource = 'account-categories';

export default class AccountCategoryRepository {
    listAccountCategories(type: string) {
        if (type == 'PD') {
            return api.get(`${resource}?type=DEVELOPMENT_RESEARCH`);
        } else if (type == 'EE') {
            return api.get(`${resource}?type=ENERGY_EFFICIENCY`);
        }
        return api.get(`${resource}`);
    }
}