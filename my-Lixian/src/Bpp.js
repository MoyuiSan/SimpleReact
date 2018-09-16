import React, { Component } from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import Cpp from "./Cpp";
import Dpp from "./Dpp";
class Bpp extends Component {
    constructor(props) {
        super(props);
        this.state = { data: new Date() };
    }
    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(),
            1000);
    }
    componentWillUnmount() {
        clearInterval(this.timeID);
    }
    tick() {
        this.setState({
            data: new Date()
        });
    }
    render() {
        return (
            <div className="Bpp">
                <p>{this.state.data.toLocaleTimeString()}</p>
                <Link to='/'>首页</Link>
                <Link to='/login'>登录</Link>
                    <Route exact path='/' component={Cpp}></Route>
                    <Route path='/login' component={Dpp}></Route>
            </div>
        );
    }
}
export default Bpp;