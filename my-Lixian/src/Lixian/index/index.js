import React, { Component } from 'react'
import '../index/index.less'
import HeaderSao from '../index/header/headerSao'
import MainSao from '../index/Main/mainSao'
import $ from 'jquery'
import { Link, Route } from 'react-router-dom'

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mouseX: 0,
            mouseY: 0
        }
    }
    dragStart = (e) => {
        console.log('哟要移动了！')
    }
    allowDrop = (e) => {
        e.preventDefault()
        if (e.target.className !== '') {
            console.log('哎呀我压着' + e.target.className)
        }

    }
    theEnd = (e) => {
        let mouseX = this.state.mouseX
        let mouseY = this.state.mouseY
        let strMouseX = String(e.clientX - mouseX)
        let strMouseY = String(e.clientY - mouseY)
        let screenX=window.innerWidth-65
        let screenY=window.innerHeight-50
        console.log(screenY+"----------"+strMouseY)
        if (strMouseX >= 0 && strMouseY >= 0 && strMouseX<=screenX && strMouseY<=screenY) {
            $('.' + e.target.className).css('left', strMouseX + 'px')
            $('.' + e.target.className).css('top', strMouseY + 'px')
        }
    }
    componentDidMount() {
        let _this = this
        let goLeft=String(window.innerWidth-100)
        $(".contral-icon-index").mousedown(function (e) {
            _this.setState({
                mouseX: e.offsetX,
                mouseY: e.offsetY
            })
        })
        $(document).dblclick(function(){
            $(".contral-icon-index").toggle()
        })
        $(".contral-icon-index").css('left',goLeft+'px')
    }

    render() {
        return (
            <div id='index-sao' onDragOver={this.allowDrop} onDragEnd={this.theEnd}>
                <HeaderSao></HeaderSao>
                <div className='contral-icon-index' draggable='true' onDragStart={this.dragStart}></div>
                <MainSao></MainSao>
            </div>
        )
    }
}
export default index