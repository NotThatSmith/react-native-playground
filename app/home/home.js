import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import PushNotification from 'react-native-push-notification'

import ScheduledNotifications from '../scheduledNotifications/scheduledNotifications'

import styles from './styles'

export default class Home extends Component {

  constructor(props) {
    super(props)
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification )
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {console.log('Push Notifications pressed')}}>
          <View style={styles.item}>
            <Text style={styles.buttonText}>Push Notifications</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
              PushNotification.localNotification({
                message: 'Hello World'
              })
            }
          }>
          <View style={styles.item}>
            <Text style={styles.buttonText}>Local Notifications</Text>
          </View>
        </TouchableHighlight>
        <ScheduledNotifications />
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
