import React from 'react'
import { Carousel, Flex, Grid } from 'antd-mobile'

import { getSwiper, getGroups } from './api.js'
import {withRouter} from 'react-router-dom'

import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'

import './index.scss'

const BaseURL = `http://localhost:8080`

// 导航（4个）的数据
const navs = [{
        img: Nav1,
        title: "整租",
        path: "/home/list",
        id:0
    },
    {
        img: Nav2,
        title: "合租",
        path: "/home/list",
        id:1
    },
    {
        img: Nav3,
        title: "地图找房",
        path: "/map",
        id:2
    },
    {
        img: Nav4,
        title: "去出租",
        path: "/login",
        id:3
    }
]
class Index extends React.Component {
    state = {
        swiperData: [],
        groupsData:Array.from(new Array(4)).map((_val, i) => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: `name${i}`,
          })),
        imgHeight: 176,
        loadfinished:false
      }
      
    // 获取数据的方法
    // 获取轮播图数据

    // async修饰的函数返回一个 Promise 对象
    loadSwiper = async () => {
        const { data } = await getSwiper()
        const { status, body } = data
        if (status === 200) {
            this.setState(
                () => {
                    return {
                        swiperData:body //数组数据修改完毕
                    }
                },
                () => {
                    this.setState(() => {
                        return {
                            loadfinished:true
                    }
                })
            })
        }
    }

    loadGroups = async () => {
        const { data } = await getGroups()
        const { status, body } = data
        if (status === 200) {
            this.setState(() => {
                return {
                    groupsData:body //数组数据修改完毕
                }
            })
        }
    }

    async componentDidMount() {
        this.loadSwiper()
        this.loadGroups()
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

    // 渲染导航单元格
    renderNav = () => 
        navs.map(item => (
            <Flex.Item className="nav" key={item.id}
                onClick={() => {
                this.props.history.push(item.path)
            }}
            >
                <img src={item.img} alt="图片无法显示" />
                <p>{item.title}</p>
            </Flex.Item>
        )) 

    // 渲染租房小组的宫格（4个）
    renderGrid = () => {
        const {groupsData} = this.state
        return (
            <Grid
                columnNum={2}
                square={false}
                activeStyle
                hasLine={false}
                data={groupsData}
                renderItem={(item) => (
                    <Flex className="grid-item" justify="between">
                        <div className="desc">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <img src={`${BaseURL}${item.imgSrc}`} alt="" />
                    </Flex>
                )}
            />
        )
    }

    // 
    renderGrouptitle = () => {
        return (
            <Flex className="group-title" justify="between">
                <h3>租房小组</h3>
                <span>更多</span>
            </Flex>
        )
    }
    render() {
        const { loadfinished } = this.state
        
        return (
            <div>
                {/* 轮播图

                    先写数据，再写页面
                    先写页面div+css,再写数据ajax

                    1. 第一次render -> autoplay=true
                    2. 数据请求完毕 -> render -> autoplay=true 未执行
                */}
                    <Carousel autoplay={loadfinished} infinite>
                        {this.renderSwiper()}
                    </Carousel>
                    <Flex>{this.renderNav()}</Flex>

                {/* 租房小组-标题-知识点：node-sass的使用 */}
                <div className="group">
                    {this.renderGrouptitle()}

                    {/* 宫格菜单(4个) */}
                    {this.renderGrid()}
                </div>
                
                
                {/* 最新资讯 (3个单元格) */}

                {/* 导航-搜索 */}
            </div>
        )
    }
}
export default withRouter(Index)