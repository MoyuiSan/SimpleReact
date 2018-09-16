import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
// import Bpp from './Bpp'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
// React component
class Counter extends Component {
    render() {
        const { name, value, onIncreaseClick, onIncreaseClick2 } = this.props
        return (
            <div>
                <span>{value}</span>
                <span>{name}</span>
                <button onClick={onIncreaseClick}>天才请点击311</button>
                <button onClick={onIncreaseClick2}>逗比请点击21</button>
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

//reducer
function counter(state = { count: 0, name: '逗比' }, action) {
    const count = state.count
    const name = state.name
    switch (action.type) {
        case 'increase':
            return { count: count + 1, name: action.text }
        case 'increase2': {
            return { count: count - 1, name: action.text }
        }
        default:
            return state
    }
}
// Action
const increaseAction = { type: 'increase', text: '天才' }
const increaseAction2 = { type: 'increase2', text: '逗比' }

//store
const store = createStore(counter)
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
const Bpp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

// function tick() {
if (module.hot) {
    module.hot.accept(store, () => {
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <AppContainer>
                        <App name='gyc' />
                        {/* <Bpp /> */}
                    </AppContainer>
                </BrowserRouter></Provider>,
            document.getElementById('root')
        )
    })
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer>
                <App name='gyc' />
                {/* <Bpp /> */}
            </AppContainer>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
// }
// setInterval(tick, 1000);
registerServiceWorker();
