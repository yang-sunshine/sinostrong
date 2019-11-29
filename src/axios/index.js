import Vue from 'vue'
import Axios from 'axios'
import QS from 'qs'
Vue.prototype.qs = QS
Vue.prototype.$axios = Axios

Axios.defaults.timeout = 2000
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

Axios.interceptors.request.use(function (config) {   
    console.log(config)
    if (config.method === "post"){
        config.data = QS.stringify(config.data);
    }
    return config;
}, function (error) {
    return Promise.reject(error);

});

Axios.interceptors.response.use(function (response) {
   
    console.log(response)
    return response;
}, function (error) {
    return Promise.reject(error);
});
