import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from './styles'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {console.log('Push Notifications pressed')}}>
          <View style={styles.item}>
            <Text style={styles.buttonText}>Push Notifications</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {console.log('Local Notifications pressed')}}>
          <View style={styles.item}>
            <Text style={styles.buttonText}>Local Notifications</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {console.log('Local Storage pressed')}}>
          <View style={styles.item}>
            <Text style={styles.buttonText}>Local Storage</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {console.log('Audio pressed')}}>
          <View style={styles.item}>
            <Text style={styles.buttonText}>Audio</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
