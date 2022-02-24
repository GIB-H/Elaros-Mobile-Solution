import React, {useState} from "react"; 
import {View, Text, SafeAreaView, StyleSheet, StatusBar, Platform} from "react-native"
import { MaterialIcons} from 'react-native-vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton } from "react-native-paper";


export const CreateGoalScreen = () => {
  // Drop Down List 
  const list =  [
    {label: 'Breathing', value: 'Breathing', icon: () => <MaterialIcons name={'cloud'} color={'black'} />}, 
    {label: 'Cough', value: 'Cough', icon: () => <MaterialIcons name={'masks'} color={'black'}  />}, 
    {label: 'Nutrition', value: 'Nutrition' , icon: () => <MaterialIcons name={'restaurant'} color={'black'}  />}, 
    {label: 'Fatigue', value: 'Fatigue', icon: () => <MaterialIcons name={'single-bed'} color={'black'}  />}, 
    {label: 'Continence', value: 'Continence', icon: () => <MaterialIcons name={'flag'} color={'black'}  />}, 
    {label: 'Pain', value: 'Pain', icon: () => <MaterialIcons name={'flag'} color={'black'}  />}, 
    {label: 'Cognition', value: 'Cognition', icon: () => <MaterialIcons name={'psychology'} color={'black'}  />}, 
    {label: 'Anxiety', value: 'Anxiety', icon: () => <MaterialIcons name={'spa'} color={'black'}  />}, 
    {label: 'Depression', value: 'Depression', icon: () => <MaterialIcons name={'spa'} color={'black'}  />}, 
    {label: 'PTSD Screen', value: 'PTSD Screen', icon: () => <MaterialIcons name={'flag'} color={'black'}  />}, 
    {label: 'Communication', value: 'Communication', icon: () => <MaterialIcons name={'people'} color={'black'}  />}, 
    {label: 'Mobility', value: 'Mobility', icon: () => <MaterialIcons name={'directions-walk'} color={'black'}  />}, 
    {label: 'Personal-Care', value: 'Personal-Care', icon: () => <MaterialIcons name={'soap'} color={'black'}  />}, 
    {label: 'Activities', value: 'Activities', icon: () => <MaterialIcons name={'fitness-center'} color={'black'}  />}, 
  ]

  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(list);

  // Date List 
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [userSetDate, setUserSetDate] = useState(false); // user has not set a date yet 

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; 
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
    if(event.type === "set"){
      setUserSetDate(true);
    } 
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.plus}>
        <View style={styles.plusIcon}>
          <MaterialIcons name={'add'} color={'white'} size={100} />
        </View>
      </View> 
      <Text style={styles.message}>Goals are a great way to track your recovery process</Text>
      <View style={styles.dropDownContainer}>
        <DropDownPicker maxHeight={155} placeholder={"Name of Symptom"} open={open} items={items} value={value} setValue={setValue} setItems={setItems} setOpen={setOpen} showArrowIcon={true}></DropDownPicker>
      </View>
      <View style={styles.dateContainer}>
          <Text>Target Date</Text>
          <IconButton style={styles.dateIcon}  onPress={() => setShowDate(true)} size={25} icon={'calendar-today'} />
          <View style={styles.dateLine}></View>
          { userSetDate && (
            <Text>{date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()}</Text>
          )
          }
      </View>

      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: StatusBar.currentHeight + 55,
    alignItems: "center",
  },

  // GOAL TITLE 
  plus: {
    width: 117, 
    height: 111, 
    borderRadius: 64.5, 
    backgroundColor: "#B4E9F1",
    borderWidth: 2, 
    marginBottom: 20
  },
  plusIcon: {
    position: "absolute", 
    left: 5
  },
  message: {
    fontSize: 15,
    width: 250,
    textAlign: "center", 
  },

  // DROP DOWN MENU
  dropDownContainer: {
    marginTop: 50,
    width: 300,
  },  


  // DATE
  dateContainer: {
    marginTop: 155,
    marginBottom: 40
  }, 
  dateLine: {
    borderWidth: 1, 
    height: 2,
    marginTop: 5, 
    width: 300
  },
  dateIcon: {
    position: "absolute",
    right: 10,
    top: -18
  }, 
})