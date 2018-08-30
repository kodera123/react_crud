import React, { Component } from 'react'
import CounterApp from './components'
import { Provider } from 'react-redux'
import store from './store'

export default class Counter extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    )
  }
}
