// api.js-> 当前组件对应的网络请求的模块

// import axios from 'axios'
import request from '../../utils/http.js'

// 设置baseUrl
// 拦截器
// 所以在utils 文件夹中  建立http.js

export const getSwiper = () => {
    return request.get(`/home/swiper`)
}

export const getGroups = () => {
    // area代表的是地区的标识->暂时不用管
    return request.get(`/home/groups?area=AREA%7C88cff55c-aaa4-e2e0`)
}