import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Bpp from './Bpp'
import Epp from './Epp'
import Gpp from './Gpp'
import Hpp from './Hpp'
import Ipp from './Ipp'
import Jpp from './Jpp'
class App extends Component {
  render() {
    const number = [1, 2, 3, 4, 5]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App栋温室.js</code> and save to reload.

        </p>
        <p>{new Date().toLocaleTimeString()}</p>
        <p>{this.props.name}</p>
        {/* 简单路由 */}
        <Bpp />
        {/* Portals */}
        <Epp />
        {/* 高阶组件简单例子 */}
        <Gpp />
        {/* 列表 */}
        <Hpp number={number} />
        {/* 高阶ref传递 */}
        <Ipp />
        {/* props简单尝试 */}
        <Jpp name="gyc1" age="15"></Jpp>
      </div>
    );
  }
}

export default App;
