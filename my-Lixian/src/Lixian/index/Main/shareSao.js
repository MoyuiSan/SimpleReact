import React, { Component } from 'react'
import '../Main/shareSao.less'
import $ from 'jquery'
import { Link, Route } from 'react-router-dom'

class shareSao extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        $('.share-box').children().not(':first').css('display', 'none')
    }
    tab = () => {
        $('.share-item').click(function (e) {
            if (e.target !== this) {
                $(e.target).attr('class', 'share-item-2')
                $(this).each(function () {
                    $(this).children().not(e.target).attr('class', 'share-item-3')
                });
                $('.share-box').children().each(function () {
                    if ($(this).attr('id') === $(e.target).attr('id')) {
                        $(this).fadeIn()
                    } else {
                        $(this).hide()
                    }
                });
            }
        })
    }
    render() {
        return (
            <div className='share'>
                <div className='share-item' onClick={this.tab}>
                    <div className='share-item-2' id='1'>新手村</div>
                    <div className='share-item-3' id='2'>最新资讯</div>
                    <div className='share-item-3' id='3'>关于网站</div>
                    <div className='share-item-3' id='4'>联系我们</div>
                </div>
                <div className='share-color'></div>
                <div className='share-box'>
                    <div className='share-box-1' id='1'>1</div>
                    <div className='share-box-1' id='2'>2</div>
                    <div className='share-box-1' id='3'>3</div>
                    <div className='share-box-1' id='4'>4</div>
                </div>
            </div>
        )
    }
}

export default shareSao