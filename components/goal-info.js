import React, { useState } from "react";
import {Text, StyleSheet, View} from "react-native" 
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MaterialIcons} from 'react-native-vector-icons'; 


export const GoalInfo = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <View>
          <Text style={styles.date}>TARGET DATE:</Text>
          <Text style={styles.targetDate}>{item.targetDate.toUpperCase()}</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
          <AnimatedCircularProgress
            size={100}
            width={15}
            fill={item.progress}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"/>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name={item.icon} color={'white'} size={40}></MaterialIcons>
      </View>
    </View>

  )}

const styles = StyleSheet.create({
  card: {
    borderRadius: 40,
    elevation: 3, // how much it comes away from the screen 
    backgroundColor: "#ECFAFF", 
    marginBottom: 15,
    flexDirection: "row",
    borderWidth: 1.5
  },
  cardContent: {
    marginVertical: 20,
    marginLeft: 40,
    height: 130,
    justifyContent: "space-between"
  },
  title: {
    color: "#537685",
    fontSize: 24,
  },
  date: {
    color: "#537685",
    fontSize: 12, 
  },
  targetDate: {
    color: "#537685", 
    fontSize: 18, 
  },
  progressContainer: {
      position: "absolute",
      right: 20,
      bottom: 40
  },
  icon: {
    position: "absolute",
    right: 50,
    bottom: 70
  }
})