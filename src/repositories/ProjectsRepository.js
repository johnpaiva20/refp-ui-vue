import Repository from './Repository';
const resource = "projects";
export default {

    get() {
        return Repository.get(`${resource}`)
    },

    getProject(id) {
        return Repository.get(`${resource}/${id}`);
    }
}