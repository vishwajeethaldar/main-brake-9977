import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
)
