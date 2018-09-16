import React, { Component } from "react"

function Test(props) {
    return <div>nice {props.children}</div>
}
function Test2(props) {
    const {name,age,rest}=props
    return <React.Fragment><Test {...props}>
    {props.children}
    </Test></React.Fragment>
}


class Jpp extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return <React.Fragment><Test2 {...this.props}>
        
        <div>1</div>
        </Test2></React.Fragment>
    }
}

export default Jpp