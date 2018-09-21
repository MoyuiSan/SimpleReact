import React, { Component } from 'react'
import Index from './index/index'
import Login from './Login/login'
import { Button } from 'antd'
import axios from 'axios'
import './global.less'
class App extends Component {
    constructor(props) {
        super(props)
        this.mysearch = this.mysearch.bind(this)
        this.state = {
            goindex: false,
        }
    }
    mysearch() {
        axios.get('http://47.106.208.186:3001/search?keywords=刀剑神域').then(res => {
            alert(res.data)
        })
    }
    goIndex = () => {
            this.setState({
                goindex: true
            })
    }
    render() {
        const goindex=this.state.goindex
        return (
            <div className='Lixian'>
                {/* <Counter></Counter> */}
                <div>{this.state.name}</div>
                {/* <Button type="primary" onClick={this.mysearch}>Primary</Button> */}
                {goindex ? <Login isLogin={this.goIndex}></Login> : <Index></Index>}
            </div>
        )
    }
}
export default App