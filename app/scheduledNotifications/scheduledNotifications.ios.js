import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DatePickerIOS
  
} from 'react-native'

import PushNotification from 'react-native-push-notification'

import styles from './styles'

export default class ScheduledNotifications extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datePickerOpen: false,
      date: new Date()
    }
  }

  render() {
    return (
        <View>
          <TouchableHighlight onPress={this.toggleDatePicker}>
            <View style={styles.item}>
              {
                  this.state.datePickerOpen == true ? <Text style={styles.buttonText}>Done</Text> : <Text style={styles.buttonText}>Local Notifications Scheduled</Text> 
              } 
            </View>
          </TouchableHighlight>
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
    this.setState({datePickerOpen: !this.state.datePickerOpen})
  }

  onDateChange = (dateChangedTo) => {
    console.log(dateChangedTo)
    this.setState({date: dateChangedTo})
  }
}
