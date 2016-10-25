import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'

import Home from './app/home/home'

export default class ReactNativePlayground extends Component {
  render() {
    return (
      <Home />
    )
  }
}

AppRegistry.registerComponent('ReactNativePlayground', () => ReactNativePlayground)
