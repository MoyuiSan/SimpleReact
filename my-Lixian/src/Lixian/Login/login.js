import React, { Component } from 'react'
import '../Login/login.less'
import $ from 'jquery'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class login extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const height = window.innerHeight
        $('#login').css('height', height)
    }
    render() {
        return (
            <div id='login'>
                <div className='login-box'>
                    <div className="login-main-l">
                    <h3><Icon type="environment" theme="outlined" />登录</h3>
                    <hr></hr>
                    <Input placeholder='用户名'></Input>
                    <Input placeholder='密码'></Input>
                    </div>
                    <div className="login-main-r">2</div>
                </div>

            </div>
        )
    }
}
export default login