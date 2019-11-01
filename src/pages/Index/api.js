// api.js-> 当前组件对应的网络请求的模块

import axios from 'axios'


export const getSwiper = () => {
    return axios.get(`http://localhost:8080/home/swiper`)
}
