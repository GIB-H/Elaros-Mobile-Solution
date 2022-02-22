import React from "react";
import {Text, StyleSheet, View} from "react-native"
import { Card } from "react-native-paper";
import { shadowColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const GoalInfo = ({goal = {}}) => {
  const {
    title = 'Breathing', 
    icon = null, 
    targetDate = '28th March', 
    progress = 0, 
  } = goal;  // goal is an object and we are desturcting the properties of the goal
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text style={styles.date}>Target Date</Text>
          <Text>{targetDate}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 40,
    elevation: 3, // how much it comes away from the screen 
    backgroundColor: "#ECFAFF", 
    shadowOffset: {width: 1, height: 1}, // give a shadow to something and offset is how much down, right we want to nudge it 
    shadowColor: "#333", // color of the shadow
    shadowOpacity: 0.3, // how clear is the shadow 
    shadowRadius: 2,  // how it blends in 
    marginHorizontal: 4,  
  },
  cardContent: {
    marginVertical: 20,
    marginLeft: 40,
    height: 130,
    justifyContent: "space-between"
  },
  title: {
    color: "#537685",
    fontSize: 24
  },
  date: {
    color: "#537685",
    fontSize: 10, 
  }
})