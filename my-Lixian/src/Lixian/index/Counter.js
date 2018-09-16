import React,{Component} from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {increaseAction,increaseAction2} from '../redux/action'
import $ from 'jquery'
class Counter extends Component{
    componentDidMount(){
        // $('.Tiancai').hide();
    }
    render() {
        const { name, value, onIncreaseClick, onIncreaseClick2 } = this.props
        return (
            <div>
                <span>{value}</span>
                <span>{name}</span>
                <button className="Tiancai" onClick={onIncreaseClick}>天才请点击311</button>
                <button className="Doubi" onClick={onIncreaseClick2}>逗比请点击21</button>
            </div>
        )
    }
}
Counter.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onIncreaseClick2: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    return {
        value: state.count,
        name: state.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onIncreaseClick2: () => dispatch(increaseAction2)
    }
}
const Con = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
export default Con