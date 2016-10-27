import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import PushNotification from 'react-native-push-notification'

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
        <TouchableHighlight onPress={() => {
          //Need calendar view to choose when get notification
              PushNotification.localNotificationSchedule({
                message: "Hello World",
                date: new Date(Date.now() + (10 * 1000)) // in 10 secs
              });
            }
          }>
          <View style={styles.item}>
            <Text style={styles.buttonText}>Local Notifications Scheduled</Text>
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
