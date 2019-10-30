import React from 'react'
// 通过Home中的三个Link导航切换三个组件显示与隐藏
import { Link, Route } from 'react-router-dom'

// Index
// HouseList
// Profile

import Index from '../../pages/Index/index.js'
import HouseList from '../../pages/HouseList/index.js'
import Profile from '../../pages/Profile/index.js'

class Home extends React.Component {
    componentDidMount() {}
    render() {
        return (
            <div>
                <Route path="/home/index" component={Index}></Route>
                <Route path="/home/house" component={HouseList}></Route>
                <Route path="/home/profile" component={Profile}></Route>
                <hr />
                <div>
                    <Link to="/home/index">首页</Link><br />
                    <Link to="/home/house">房屋列表</Link><br />
                    <Link to="/home/profile">个人中心</Link>
                </div>
            </div>
        )
    }
}
export default Home