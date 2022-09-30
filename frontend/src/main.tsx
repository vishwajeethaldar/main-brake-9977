import ReactDOM from 'react-dom/client'
import App from './App'
import store from './features/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import {ChakraProvider} from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
    <ChakraProvider>
    <Provider store={store}>
       <ChakraProvider>
            <App />
       </ChakraProvider>
    </Provider>
    </ChakraProvider>
    </BrowserRouter>
)
