import React, { Component } from 'react'
import Rebox from "./Rebox"
class Cpp extends Component {
    constructor(props){
        super(props);
        this.textInput=React.createRef();
        this.focusTextInput=this.focusTextInput.bind(this);
    }
    focusTextInput(){
        this.textInput.current.focus();
        this.textInput.current.value="I am here !------";
    }
    render() {
        return (
            // <Rebox numitem={10}>
            //     {(index) => <div key={index}>this is item {index} in the list</div>}
            // </Rebox>
            <div>
                <input type="text" ref={this.textInput}/>
                <input type="button" value="click me" onClick={this.focusTextInput} />
            </div>
        )
    }
}
export default Cpp;