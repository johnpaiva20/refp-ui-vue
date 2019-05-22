import axios from 'axios'
import API_URL from '../config/config'
export default {

    listAllProjects() {
        return axios.get(API_URL+'projects').then(response => {
            return response.data;
        });
    },

    getProject(id){
        return axios.get(API_URL+`projects/${id}`).then(response => {
            return response.data;
        });
    }
}