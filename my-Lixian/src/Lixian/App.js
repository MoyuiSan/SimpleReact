import React, { Component } from 'react'
import Counter from './index/Counter'
import Login from './Login/login'
import {Button} from 'antd'
import axios from 'axios'
class App extends Component {
    constructor(props) {
        super(props)
       this.mysearch=this.mysearch.bind(this)
    }
    mysearch(){
        axios.get('http://47.106.208.186:3001/search?keywords=刀剑神域').then(res=>{
            alert(res.data)
        })
    }
    render() {
        return (
            <div className='Lixian'>
            {/* <Counter></Counter> */}
            {/* <Button type="primary" onClick={this.mysearch}>Primary</Button> */}
            <Login></Login>
            </div>
        )
    }
}
export default App