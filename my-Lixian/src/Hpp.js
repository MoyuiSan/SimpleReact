import React, { Component } from 'react'
class List extends Component {
    render() {
        const num = this.props.number
        return (
            <React.Fragment>
                {num.map((number) =>
                    <li key={number}>{number}</li>
                )}
            </React.Fragment>
        )
    }

}

class Hpp extends Component {
    render() {
        const num = this.props.number
        return (
            <ul>
                <List number={num} {...this.props}></List>
            </ul>
            // <div>1</div>
        )
    }
}
//传递Ref
// function logProps(Component) {
//     class LogProps extends Component {
//         ComponentDidUpdate(preProps) {
//             console.log('old', preProps);
//             console.log('new', this.props);
//         }  

//         render() {
//             const { fowardedRef, rest } = this.props;
//             return (
//                 <Component ref={fowardedRef} {...rest}>{...rest}</Component>
//             )
//         }
//     }
//     function forwardRef(props, ref) {
//         console.log(ref)
//         return <LogProps {...props} fowardedRef={ref}></LogProps>
//     }
//     const name = Component.displayName || Component.name;
//     forwardRef.displayName = `logProps(${name})`;
//     return React.forwardRef(forwardRef);
// }

export default Hpp