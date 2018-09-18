import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import Bpp from './Bpp'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'
import { Provider, connect } from 'react-redux'
import { store } from "./redux/store"
import 'antd/dist/antd.css'
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
if (module.hot) {
    module.hot.accept(store, () => {
        ReactDOM.render(
            <Provider store={store}>

                <BrowserRouter>
                    <AppContainer>
                        {/* <App /> */}
                        <App />
                    </AppContainer>
                </BrowserRouter>

                {/* </LocaleProvider> */}
            </Provider>,
            document.getElementById('root')
        )
    })
}
ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>
            <AppContainer>
                {/* <App/> */}
                <App />
            </AppContainer>
        </BrowserRouter>

        {/* </LocaleProvider> */}
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();