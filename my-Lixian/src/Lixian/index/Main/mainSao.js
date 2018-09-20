import React, { Component } from 'react'
import '../Main/mainSao.less'
import $ from 'jquery'
import { Link, Route } from 'react-router-dom'
class mainSao extends Component {
    constructor(props) { super(props) }
    render(){
        return(
            <div id='mainSao'>
             <div className='music-box'>1</div>
             <div className='words-share'>2</div>
            </div>
        )
    }

}
export default mainSao