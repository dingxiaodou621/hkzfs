// api.js-> 当前组件对应的网络请求的模块

// import axios from 'axios'
import request from '../../utils/http.js'

// 设置baseUrl
// 拦截器
// 所以在utils 文件夹中  建立http.js

export const getSwiper = () => {
    return request.get(`/home/swiper`)
}
