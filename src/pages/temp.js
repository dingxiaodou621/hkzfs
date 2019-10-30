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



        //     <TabBar.Item
        //     title="首页"
        //     key="Life"
        //     icon={<i className="iconfont icon-ind" />}
        //     selectedIcon={<i className="iconfont icon-ind" />}
        //     selected={this.state.selectedTab === '/home/index'}
        //     onPress={() => {
        //       // 改标识->1.Link 2. js代码->编程式导航

        //       this.props.history.push('/home/index')

        //       this.setState({
        //         selectedTab: '/home/index',
        //       });
        //     }}
        //   >
        //   <Index />
        //   </TabBar.Item>
        //   <TabBar.Item
        //     icon={<i className="iconfont icon-findHouse" />}
        //     selectedIcon={<i className="iconfont icon-findHouse" />}
        //     title="找房"
        //     key="Koubei"
        //     selected={this.state.selectedTab === '/home/house'}
        //     onPress={() => {
        //       this.props.history.push('/home/house')              
        //       this.setState({
        //         selectedTab: '/home/house',
        //       });
        //     }}
        //   >
        //   <HouseList />
        //   </TabBar.Item>
        //   <TabBar.Item
        //     icon={<i className="iconfont icon-my" />}
        //     selectedIcon={<i className="iconfont icon-my" />}
        //     title="我的"
        //     key="my"
        //     selected={this.state.selectedTab === '/home/profile'}
        //     onPress={() => {
        //       this.props.history.push('/home/profile')              
        //       this.setState({
        //         selectedTab: '/home/profile',
        //       });
        //     }}
        //   >
        //   <Profile />
        //   </TabBar.Item>