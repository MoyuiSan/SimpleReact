import React, { Component } from 'react';
class Rebox extends Component {
    constructor(props) {
        super(props);
        let item = [];
        for (let i = 0; i < props.numitem; i++) {
            item.push(props.children(i));
        }
        this.state={items:item};
    }
    render() {
        return (
            <div>{this.state.items}</div>
        )
    }

}


export default Rebox;