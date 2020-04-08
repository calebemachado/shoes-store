import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import HelmetHeader from './components/HelmetHeader'
import Header from './components/Header'
import Routes from './routes'
import GlobalStyle from './styles/global'

import './config/ReactotronConfig'
import history from './services/history'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <HelmetHeader />
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  )
}

export default App
