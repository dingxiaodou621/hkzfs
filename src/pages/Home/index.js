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

// 首页
// 找房
// 我的
class Home extends React.Component {
    state = {
        selectedTab: 'blueTab',
    }

    render() {
        return (
            <div
                style={{ position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="找房"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
            // <div>
            //     <Route path="/home/index" component={Index}></Route>
            //     <Route path="/home/house" component={HouseList}></Route>
            //     <Route path="/home/profile" component={Profile}></Route>
            //     <hr />
            //     <div>
            //         <Link to="/home/index">首页</Link><br />
            //         <Link to="/home/house">房屋列表</Link><br />
            //         <Link to="/home/profile">个人中心</Link>
            //     </div>
            // </div>
        )
    }
}
export default Home