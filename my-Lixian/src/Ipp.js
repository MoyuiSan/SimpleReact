import React, { Component } from "react";

const Child = React.forwardRef((props, ref) => (
    <input ref={ref} />
))

class Childs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <input />
    }
}
function logProp(WrappedComponent) {
    class LogProps extends Component {
        render() {
            const { forwardedRef, name } = this.props;
            return <WrappedComponent name={name} ref={forwardedRef} />;
        }
    }
    return React.forwardRef((props, ref) => {
        return <LogProps name='gyc' forwardedRef={ref}></LogProps>
    })
}
const LogProps = logProp(Childs)

class Ipp extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
    componentDidMount() {
        console.log(this.myRef.current._reactInternalFiber.child.stateNode.focus())//获取子组件input
    }
    render() {
        return <LogProps ref={this.myRef} />
    }
}
export default Ipp