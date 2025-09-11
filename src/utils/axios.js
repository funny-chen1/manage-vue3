import axios from 'axios'
import {refreshToken} from "../service/data";

// axios.defaults.baseURL = 'https://www.youyingshuju.com/'
// axios.defaults.baseURL = 'http://172.22.4.79:3000/'
axios.defaults.baseURL = import.meta.env.DEV ? '/api' : 'https://www.youyingshuju.com'
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
    if (localStorage.getItem('token')) {
        config.headers['Token'] = localStorage.getItem('token')
    }
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    config.headers['Token'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOjE1NTA5OCwic3ViIjoieXlzai0xNTA4OTExOTc4NyIsImNyZWF0ZWREYXRlIjoxNzU3Mzk5NjQxOTQwLCJpc3MiOiJoeXNqIiwiZXhwIjoxNzU3NDA2ODQxLCJ1dWlkIjoiZWQ3ZGJjYWMtZGMyOS00MjVhLWE3MTEtM2EyZmE1NDk0ODcyIiwiaWF0IjoxNzU3Mzk5NjQxfQ.Xz_DOU_pfNTkVRlq_vFtA2dgLPHXjebLsxJsDkAvec2VDAaPDuqJ0-35NVfwkJIz5r6pBXDuZIZQTcyE8utlMg';
    // if (config.url.indexOf('refreshToken') !== -1) {
    //    config.headers['Refresh-Token'] = config.headers.Token;
    // }
    return config
});

axios.interceptors.response.use((res) => {
    const code = res.data.code;
    if (code !== 200) {
        // if (code === 401) {
        //     refreshToken().then((res) => {
        //         localStorage.setItem('token', res.data)
        //     })
        // }
        if (res.data.msg) {
            console.log(res.data.msg)
        }
    }
    return res.data;
}, (error) => {
    Toast.fail('服务端异常！')
    return Promise.reject(error);
});

export default axios;
