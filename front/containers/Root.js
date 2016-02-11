import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import App from './App'
import Header from '../components/Header'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <div>
        <Header title="StateOfTheArt"/>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    )
  }
}
