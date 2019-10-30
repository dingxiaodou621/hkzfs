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
        {/* <Link to="/home">Home</Link>
        <Link to="/map">Map</Link> */}

          {/* App.js的路由相当于一级路由
              home/index.js的路由相当于二级路由
           */}
          <Route path="/" component={Home}></Route>
          <Route path="/map" component={Map}></Route> 
          
         
        </div>
      </Router>
    )
  }
}
export default App