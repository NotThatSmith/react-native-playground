import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  DatePickerIOS
  
} from 'react-native'

import PushNotification from 'react-native-push-notification'

import styles from './styles'

export default class ScheduledNotifications extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datePickerOpen: false,
      date: new Date(),
      buttonText: 'Local Notifications Scheduled'
    }
  }

  render() {
    return (
        <View>
          <Button onPress={this.toggleDatePicker} title={this.state.buttonText} />
          {
            this.state.datePickerOpen ? <DatePickerIOS date={this.state.date} mode="datetime" onDateChange={this.onDateChange} /> : null 
          }
        </View>
    )
  }

  toggleDatePicker = () => {
    if(this.state.datePickerOpen === true) {
      PushNotification.localNotificationSchedule({
            message: "Hello iOS from the past",
            date: this.state.date
          })
    }
    this.setState({
      datePickerOpen: !this.state.datePickerOpen,
      buttonText: this.state.datePickerOpen ? "Local Notifications Scheduled" : "Done"
    })
  }

  onDateChange = (dateChangedTo) => {
    console.log(dateChangedTo)
    this.setState({date: dateChangedTo})
  }
}
