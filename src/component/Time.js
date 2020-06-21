//import liraries
import React, { Component } from "react";
import { View, Text } from "react-native";
import moment from 'moment'

// create a component
class Time extends Component {
  render() {
    const time = moment(this.props.time || moment.now()).fromNow();
    return (
      <View>
        <Text note>{time}</Text>
      </View>
    );
  }
}

//make this component available to the app
export default Time;
