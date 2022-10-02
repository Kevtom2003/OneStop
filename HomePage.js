import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flights from '../components/Flights';
import Tasks from '../components/Tasks';
 
 
export default function Home() {
    return (
      <View style={styles.container}>
        {/* Today's tasks*/}
        <View style ={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Upcoming Flights</Text>
          <View style={styles.items}>
            <Flights text={"Departure\t\t\t\t\t\t10/2/2022\n\n\tGeorge Bush International Airport\n\n\t\tTime:\t\t\tGate:\n\n\t\t11:15 AM\t\tC10"} />
          </View>
          <Text style={styles.sectionTitle}>To-Do List</Text>
          <View style={styles.items}>
            <Tasks text={"Call Car Rental Place"}/>
          </View>
        </View>
      </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    taskWrapper: {
      paddingTop: 150,
      paddingHorizontal: 20
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    items: {
        marginTop: 10,
      },
    });
    