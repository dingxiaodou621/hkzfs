import React from 'react'
// import { Button } from 'antd-mobile'

// 在这个文件写路由代码

import Home from './pages/Home/index.js'
import Map from './pages/Map/index.js'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() { }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route path="/map" component={Map}></Route> 
          
          <Link to="/">首页</Link>
          <Link to="/map">地图</Link>
        </div>
      </Router>
    )
  }
}
export default App