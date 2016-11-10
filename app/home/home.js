import React, { Component } from 'react'
import {
  Text,
  View,
  Button
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
        <Button title='Push Notifications' onPress={() => {console.log('Push Notifications pressed')}} />
        <Button title='Local Notifications' onPress={() => {
              PushNotification.localNotification({
                message: 'Hello World'
              })
            }
          } />
        <ScheduledNotifications />
        <Button title='Local Storage' onPress={() => {console.log('Local Storage pressed')}} />
        <Button title='Audio' onPress={() => {console.log('Audio pressed')}} />
      </View>
    )
  }
}
