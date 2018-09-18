import React, { Component } from 'react'
import '../Login/login.less'
import $ from 'jquery'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            show: false
        }
        this.emitEmpty = this.emitEmpty.bind(this)
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.emitEmpty2 = this.emitEmpty2.bind(this)
        this.onChangePassWord = this.onChangePassWord.bind(this)
    }
    componentDidMount() {
        const height = window.innerHeight
        $('#login').css('height', height)
        console.log($('.testBox').outerHeight())
        console.log($("p").add(document.getElementById("a")))
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
        const { userName } = this.state;
        const { passWord } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const suffixl = passWord ? <Icon type="close-circle" onClick={this.emitEmpty2} /> : null;
        return (
            <div id='login'>
                {this.state.show ? <div className='login-box'>
                    <div className="login-main-l">
                        <h3><Icon style={{ marginLeft: 10 }} type="environment" theme="outlined" />登录</h3>
                        <hr></hr>
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
                        <span className="goRigister" onClick={this.qie}>前往注册</span>
                    </div>
                    <div className="login-main-r">
                        <h3><Icon style={{ marginLeft: 10 }} type="environment" theme="outlined" />注册</h3>
                        <hr></hr>
                        <span className="goLogin" onClick={this.qie1}>前往登录</span>
                    </div>
                </div> : null}
                {!this.state.show ? <div className='testBox'>
                    <p>Hello</p><p><span id="a">Hello Again</span></p>
                </div> : null}

            </div>
        )
    }
}
export default login