
//Portals
import React, { Component } from "react"
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root')
class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');//创建一个div
    }
    componentDidMount() {
        modalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el);

    }
}
class Epp extends Component {
    constructor(props) {
        super(props)
        this.state = { showModel: false }
        this.handleHide = this.handleHide.bind(this)
        this.handleShow = this.handleShow.bind(this)


    }
    handleShow() {
        this.setState({ showModel: true })
    }
    handleHide() {
        this.setState({ showModel: false })
    }
    render() {
        // return (
        //     <React.Fragment>
        //         <div>一步 01</div>
        //         <div>一步 02</div>
        //         <div>一步 03</div>
        //         <div>一步 04</div>
        //     </React.Fragment>

        // )
        const modal = this.state.showModel ? (
            <Modal>
                <div className="modal">
                    <div>
                        With a portal, we can render content into a different
                        part of the DOM, as if it were any other React child.
                </div>
                    This is being rendered inside the #modal-container div.
                <button onClick={this.handleHide}>Hide modal</button>
                </div>
            </Modal>
        ) : null;

        return (
            <div className="app">
                This div has overflow: hidden.
            <button onClick={this.handleShow}>Show modal</button>
                {modal}
            </div>
        )
    }
}
export default Epp;