import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, Platform  } from 'react-native';
import { Searchbar } from "react-native-paper"
import { GoalInfo } from "../components/goal-info";

export const GoalsScreen = () => (
  <SafeAreaView style={styles.container}> 
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.goals}>
      <GoalInfo />
    </View>
  </SafeAreaView>
)


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16, 
    backgroundColor: "#fff"
  },
  goals: {
    flex: 1,
    padding: 16, 
    backgroundColor: "#eee"
  }
});