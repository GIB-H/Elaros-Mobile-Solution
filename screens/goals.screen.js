import React, {useState} from "react";
import { StatusBar, StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import { Searchbar } from "react-native-paper"
import { GoalInfo } from "../components/goal-info";

export const GoalsScreen = () => {
const [goals, setGoals] = useState([
  {title: "Breathing", progress: 30, icon: "cloud", targetDate: "29 Feburary 2022"},
  {title: "Nutrition", progress: 75, icon: "restaurant", targetDate: "3 March 2022"},
  {title: "Mobility", progress: 30, icon: "directions-walk", targetDate: "12 March 2022"},
  {title: "Cough", progress: 12, icon: "masks", targetDate: "23 March 2022"},
])

const [search, setSearch] = useState(""); 
const [filteredGoals, setFilteredGoals] = useState(goals);

const updateGoals = (search) => {
  setSearch(search)
  if(search) {
      // Search is not blank 
      const newGoals = goals.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
      setFilteredGoals(newGoals);
  } 
  else{
    setFilteredGoals(goals);
  }
}

return (
  <SafeAreaView style={styles.container}> 
    <View style={styles.header}>
      <Text style={styles.title}>Your Goals</Text>
    </View>
    <View style={styles.search}>
      <Searchbar placeholder="Find Goal..." onChangeText={updateGoals} value={search}/>
    </View>
    <View style={styles.goals}>
      <FlatList
        data={filteredGoals}
        renderItem={({item}) => <GoalInfo item={item} />}
        keyExtractor={(item) => item.title}
      />
    </View>
  </SafeAreaView>
)
}

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
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16
  }
}); 