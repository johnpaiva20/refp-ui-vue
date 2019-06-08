import Repository from './Repository';
const resource = 'account-categories';

export default {
    get() {
        return Repository.get(`${resource}`);
    },
    getByProjectType(type) {
        return Repository.get(`${resource}/${type}`);
    }
}