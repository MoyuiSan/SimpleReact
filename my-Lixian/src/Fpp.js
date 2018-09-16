import React, { Component } from "react"
export default (WrappedComponet,title)=>
    class Hoc extends Component {
        render() {
            return (
                <div>
                    <div className="demo-header">
                        {title?title:"这是标题"}
                    </div>
                    <WrappedComponet {...this.props} />
                </div>
            )
        }
    }

