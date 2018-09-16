import withHeader from "./Fpp";
import React, { Component } from "react"
class demo extends Component {
    render() {
        return (
            <div>
                我是一个普通组件
            </div>
        )
    }
}
const EnhanceDemo = withHeader(demo,"demo")
export default EnhanceDemo