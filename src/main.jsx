import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Provider store={store}>
  <Toaster/>
  <App/>
 </Provider>
</BrowserRouter>
)
