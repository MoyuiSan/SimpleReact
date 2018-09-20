import React, { Component } from 'react'
import '../Login/login.less'
import $ from 'jquery'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link, Route } from 'react-router-dom'
import Counter from '../index/Counter'
class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            show: true
        }
        this.emitEmpty = this.emitEmpty.bind(this)
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.emitEmpty2 = this.emitEmpty2.bind(this)
        this.onChangePassWord = this.onChangePassWord.bind(this)
    }
    componentDidMount() {
        const height = window.innerHeight
        $('#login').css('height', height)
        // let nowPageY = 0
        // let newPageY = 0
        // let moveStep = 0
        // $(document).mousemove(function (event) {
        //     if (nowPageY === 0 && newPageY === 0) {
        //         nowPageY = event.pageY
        //     }
        //     else if (nowPageY !== 0 && newPageY === 0) {
        //         newPageY = event.pageY
        //         moveStep = newPageY - nowPageY
        //         console.log(newPageY - nowPageY)
        //         console.log('moveStep:' + moveStep)
        //     }
        //     else if (nowPageY !== 0 && newPageY !== 0) {
        //         nowPageY = 0
        //         newPageY = 0
        //     }
        //     if (moveStep >= 60) {
        //         $('.testBox:not(:animated)').css('animation', 'seeContral 0.8s linear 0s').fadeIn()
        //         $('.testBox').css('animation-fill-mode', 'forwards')
        //     }
        //     else if (moveStep <= -60) {
        //         $('.testBox:not(:animated)').css('animation', 'noContral 0.8s linear 0s').fadeOut()
        //         $('.testBox').css('animation-fill-mode', 'forwards')
        //     }
        // })
    }
    isAlert = () => {
        alert('11')
    }
    goLogin = () => {
        this.setState({
            show: false
        })
    }
    isLogin = () => {
        this.props.isLogin()
        alert('来了来了！')
    }
    qie = () => {
        $('.login-main-l').css('animation', 'fiselect 1.25s linear 0s');
        $('.login-main-r').css('animation', 'seselect 1.25s linear 0s');
        $('.login-main-l').css('animation-fill-mode', 'forwards');
        $('.login-main-r').css('animation-fill-mode', 'forwards');
    }
    qie1 = () => {
        $('.login-main-l').css('animation', 'seselect 1.25s linear 0s');
        $('.login-main-r').css('animation', 'fiselect 1.25s linear 0s');
        $('.login-main-l').css('animation-fill-mode', 'forwards');
        $('.login-main-r').css('animation-fill-mode', 'forwards');
    }
    emitEmpty() {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }
    emitEmpty2() {
        this.passWordInput.focus();;
        this.setState({ passWord: '' });
    }
    onChangeUserName(e) {
        this.setState({ userName: e.target.value });
    }
    onChangePassWord(e) {
        this.setState({ passWord: e.target.value });
    }
    render() {
        const { userName } = this.state
        const { passWord } = this.state
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null
        const suffixl = passWord ? <Icon type="close-circle" onClick={this.emitEmpty2} /> : null
        const FormItem = Form.Item
        return (
            <div id='login'>
                {this.state.show ? <div className='login-box'>
                    <div className="login-main-l">
                        <h3><Icon style={{ marginLeft: 10 }} type="environment" theme="outlined" />登录</h3>
                        <hr></hr>
                        <FormItem style={{ marginBottom: 10 }}>
                            <Input
                                placeholder="Enter your username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={suffix}
                                value={userName}
                                onChange={this.onChangeUserName}
                                ref={node => this.userNameInput = node}
                                size='default'
                                style={{ width: 250, marginLeft: 50, marginTop: 15 }}
                            />
                            <Input
                                placeholder="Enter your password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={suffixl}
                                value={passWord}
                                onChange={this.onChangePassWord}
                                ref={nodel => this.passWordInput = nodel}
                                size='default'
                                style={{ width: 250, marginLeft: 50, marginTop: 15 }}
                                type='password'
                            />
                        </FormItem>
                        <span className="goRigister" onClick={this.qie}>前往注册</span>
                        <FormItem style={{ marginBottom: 10 }}>
                            <Checkbox className='remenmber'>Remember me</Checkbox>
                            <a className="login-form-forgot" href="">Forgot password</a>
                        </FormItem>
                        <div className="contral-icon">
                            <div className="iron-1" onClick={this.goLogin}></div>
                            <div className="iron-2"></div>
                        </div>
                    </div>
                    <div className="login-main-r">
                        <h3><Icon style={{ marginLeft: 10 }} type="environment" theme="outlined" />注册</h3>
                        <hr></hr>
                        <span className="goLogin" onClick={this.qie1}>前往登录</span>
                    </div>
                </div> : <div className='testBox' style={{ textAlign: "center" }}>
                        <a onClick={this.isLogin}>点击进入一个神奇的世界！1~2~3~4~5~</a>
                    </div>}
            </div>
        )
    }
}
export default login