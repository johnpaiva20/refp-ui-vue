import api from '../workspace/api/api.config';

export default {

  authentication(user){
    return api.post(`authentication`,user);

  }
};
