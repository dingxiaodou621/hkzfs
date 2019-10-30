import React from 'react'
// 通过Home中的三个Link导航切换三个组件显示与隐藏
import { Link, Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile';

// Index
// HouseList
// Profile

import Index from '../../pages/Index/index.js'
import HouseList from '../../pages/HouseList/index.js'
import Profile from '../../pages/Profile/index.js'

import '../../assets/fonts/iconfont.css'
import './index.css'

// 首页
// 找房
// 我的
class Home extends React.Component {
    state = {
        // index
        // house
        //  profile
        // selectedTab: 'index',
        // selectedTab: 获取当前url的标识
           selectedTab:this.props.location.pathname
        
    }

    render() {
        return (
          <div className="tabbar">
            <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          // 不渲染内容 -> false
          noRenderContent={false}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-ind" />}
            selectedIcon={<i className="iconfont icon-ind" />}
            selected={this.state.selectedTab === '/home/index'}
            onPress={() => {
              // 改标识->1.Link 2. js代码->编程式导航

              this.props.history.push('/home/index')

              this.setState({
                selectedTab: '/home/index',
              });
            }}
          >
          <Index />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse" />}
            selectedIcon={<i className="iconfont icon-findHouse" />}
            title="找房"
            key="Koubei"
            selected={this.state.selectedTab === '/home/house'}
            onPress={() => {
              this.props.history.push('/home/house')              
              this.setState({
                selectedTab: '/home/house',
              });
            }}
          >
          <HouseList />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my" />}
            selectedIcon={<i className="iconfont icon-my" />}
            title="我的"
            key="my"
            selected={this.state.selectedTab === '/home/profile'}
            onPress={() => {
              this.props.history.push('/home/profile')              
              this.setState({
                selectedTab: '/home/profile',
              });
            }}
          >
          <Profile />
          </TabBar.Item>
        </TabBar>
          </div>
            
        )
    }
}
export default Home