import React, { Component } from 'react'
import '../Main/mainSao.less'
import $ from 'jquery'
import { Link, Route } from 'react-router-dom'
import ShareSao from '../Main/shareSao'
import MusicSao from '../Main/musicSao'
class mainSao extends Component {
    constructor(props) { super(props) }
    render() {
        return (
            <div id='mainSao'>
                <div className='music-box'>
                  <MusicSao></MusicSao>
                </div>
                <div className='words-share'>
                    <ShareSao></ShareSao>
                </div>
            </div>
        )
    }

}
export default mainSao