import axios from '../utils/axios'

export const refreshToken = (params) => {
    return axios.post('/auth/login/refreshToken', params)
}

export const login = (params) => {
    return axios.post('/auth/login', params)
}

// 搜索词
export function keywordInfo(params) {
    return axios.post('/shopee/keyword/keywordInfo', params)
}

export const getKeywordProLis = (params) => {
    return axios.post('/shopee/keyword/getKeywordProList', params)
}

export const productList = (params) => {
    return axios.post('/shopee/product/productList', params)
}
