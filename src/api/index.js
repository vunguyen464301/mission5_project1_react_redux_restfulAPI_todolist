// import {URL,TASK} from '../utils/index';
const axios = require('axios');
export const queryDatabase = (url,table) => {
    return axios.get(`${url}/${table}`)
    .then(response => {
        if (response.status >= 400) {
          return Promise.reject('Invalid response');
        }
        return response;
      });
}
export const callAPI_AddTask = (url,table,name) => {
    return axios.post(`${url}/${table}`,{name})
    .then(response => {
        if (response.status >= 400) {
          return Promise.reject('Invalid response');
        }
        return response;
      });
}
export const callAPI_DeleteTask = (url,table,_id) => {
    return axios.delete(`${url}/${table}/${_id}`)
    .then(response => {
        if (response.status >= 400) {
          return Promise.reject('Invalid response');
        }
        return response;
      });
}
export const callAPI_EditTask = (url,table,_id,name) => {
    return axios.put(`${url}/${table}/${_id}`,{name})
    .then(response => {
        if (response.status >= 400) {
          return Promise.reject('Invalid response');
        }
        return response;
      });
}

