import React from 'react'
import { Carousel } from 'antd-mobile'

import {getSwiper} from './api.js'

const BaseURL = `http://localhost:8080`
class Index extends React.Component {
    state = {
        swiperData: [],
        imgHeight: 176
      }
      
    // 获取数据的方法
    // 获取轮播图数据
    loadSwiper = async () => {
        const { data } = await getSwiper()
        const { status, body } = data
        if (status === 200) {
            this.setState(() => {
                return {
                swiperData:body
            }})
        }
    }
    async componentDidMount() {
        this.loadSwiper()
    }

    // 渲染模板的方法-------
    // 渲染轮播图
    renderSwiper = () => {
        const {swiperData} = this.state
        return swiperData.map(item => (
            <a
                key={item.id}
                href="http://www.itcast.cn"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
            <img
                src={`${BaseURL}${item.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                // 图片高度自适应（js的知识）
                onLoad={() => {
                // window event resize -> 为窗口设置resize->窗口大小改变时
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
                }}
            />
            </a>
        ))
    }
    render() {
        return (
            <div>
                {/* 轮播图

                    先写数据，再写页面
                    先写页面div+css,再写数据ajax
                */}
            <Carousel autoplay={true} infinite>
                {this.renderSwiper()}
            </Carousel>
                {/* 导航 (4个) */}

                {/* 租房小组-宫格菜单(4个) */}

                {/* 导航-搜索 */}
            </div>
        )
    }
}
export default Index