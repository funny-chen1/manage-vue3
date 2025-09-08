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
    config.headers['Token'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOjE1NTA5OCwic3ViIjoieXlzai0xNTA4OTExOTc4NyIsImNyZWF0ZWREYXRlIjoxNzU3MzEwNTIyNjYxLCJpc3MiOiJoeXNqIiwiZXhwIjoxNzU3MzE3NzIyLCJ1dWlkIjoiN2M3MDFjNDctNTczMi00MjE3LWFiMWQtMTViMGU5OGY5YWFlIiwiaWF0IjoxNzU3MzEwNTIyfQ.hhWHZvNkfjObBAlEei7wEO43n1a-NaJ2MZHZArDqy5L8eALHjUnoWYW112GjX-oseb5s8tN9lReIFeCE3YuZ8w';
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
