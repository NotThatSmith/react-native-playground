import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  DatePickerAndroid,
  TimePickerAndroid
} from 'react-native'

import PushNotification from 'react-native-push-notification'

import styles from './styles'

export default class ScheduledNotifications extends Component {

  render() {
    return (
      <TouchableHighlight onPress={() => {
              DatePickerAndroid.open({
                date: new Date()
              }).then((dateChoosen)=> {
                console.log(dateChoosen)
                //   PushNotification.localNotificationSchedule({
                //   message: "Hello World",
                //   date: new Date(Date.now() + (10 * 1000)) // in 10 secs
                // })
              }).then(() => {
                  return TimePickerAndroid.open({
                    hour: 14,
                    minute: 0,
                    is24Hour: false
                  })
                }).then((timeChoosen) => {
                  console.log(timeChoosen)
                })
            }
          }>
          <View style={styles.item}>
            <Text style={styles.buttonText}>Local Notifications Scheduled</Text>
          </View>
      </TouchableHighlight>
    )
  }
}
