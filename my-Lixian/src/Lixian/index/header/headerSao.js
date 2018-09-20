import React, { Component } from 'react'
import '../header/headerSao.less'
import $ from 'jquery'
import { Link, Route } from 'react-router-dom'

class headerSao extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='header-sao'>
                <div className='user-logo'></div>
                <div className='user-hp'>
                    <div className='hp-cao'></div>
                    <div className='cao-jin'>100/100</div>
                    <div className='level'>lv.1</div>
                </div>
            </div>
        )
    }
}
export default headerSao