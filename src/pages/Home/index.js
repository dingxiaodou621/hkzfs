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

import { tabbardata } from './tabbar.json'

// 首页
// 找房
// 我的


// []->有序->最好保存相同的数据结构
// {} ->无序->通过key名区分保存的数据
class Home extends React.Component {
    state = {
        // index
        // house
        //  profile
        // selectedTab: 'index',
        // selectedTab: 获取当前url的标识
           selectedTab:this.props.location.pathname
    }

    renderComponent = (path) => {
      switch (path) {
        case '/home':
          return <Index />
        case '/home/house':
          return <HouseList />
        case '/home/profile':
          return <Profile />
        default:
          return <Index />
      }
    }
  // 渲染tabbaritem
  renderTabBars = () => {
    return tabbardata.map((item) => {
      return (
        <TabBar.Item
          title={item.title}
          key={item.key}
          // 如果 {} || ``
          icon={<i className={`iconfont ${item.iconUrl}`} />}
          selectedIcon={<i className={`iconfont ${item.iconUrl}`} />}
          selected={this.state.selectedTab === item.path}
          onPress={() => {
          // 改标识->1.Link 2. js代码->编程式导航

          this.props.history.push(item.path)

          this.setState({
            selectedTab: item.path
          })
        }}
      >
      {this.renderComponent(item.path)}
      </TabBar.Item>
      )
    })
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
          {this.renderTabBars()}
           {/* // [TabBar.Item1,TabBar.Item2,TabBar.Item3] */}
          
        </TabBar>
          </div>
            
        )
    }
}
export default Home