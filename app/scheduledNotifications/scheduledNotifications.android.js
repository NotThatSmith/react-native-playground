import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  DatePickerAndroid,
  TimePickerAndroid
} from 'react-native'

import PushNotification from 'react-native-push-notification'

import styles from './styles'

export default class ScheduledNotifications extends Component {

  render() {
    return (
      <Button onPress={this.onPress} title='Local Notifications Scheduled' />
    )
  }

  onPress = () => {
    DatePickerAndroid.open({date: new Date()})
                     .then(this.onDatePick)
  }

  onDatePick = ({action, year, month, day}) => {
    if (action === DatePickerAndroid.dateSetAction) {
      TimePickerAndroid.open({
        hour: 0,
        minute: 0,
        is24Hour: false
      })
      .then(({action, hour, minute}) => {
        if (action === TimePickerAndroid.timeSetAction) {
          const dateToNotify = new Date(year, month, day, hour, minute)
          PushNotification.localNotificationSchedule({
            message: "Hello Android from the past",
            date: dateToNotify
          })                      
        } else {
          console.log('time dismissed')
        }
      })
    } else {
      console.log('date dismissed')
    }
  }
}
