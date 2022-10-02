import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
//import { SAMPLE_DATA } from '../assets/data/sampleData';
import Tasks from '../components/Tasks';

const HealthCenter = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.textWrapper}>
                <View style = {styles.bubble}>
                    <Text style ={styles.enterDestination}>Enter Destination</Text>
                    <Text style={styles.enterDestination}>India</Text>
                </View>

            </View>
            <View style={styles.container2}>
                <Text style ={styles.chartHeading}>5 Day Covid Data</Text>
                <LineChart
                    data={{
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
                    datasets: [
                        {
                        data: [
                            4129,
                            3230,
                            3615,
                            4272,
                            3947
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width-50} // from react-native
                    height={170}
                    fromZero = {false}
                    withVerticalLabels={true}
                    withHorizontalLabels={true}
                    showBarTops = {false}
                    showValuesOnTopOfBars = {true}
                    chartConfig={{
                    backgroundGradientFrom: "#FFF",
                    backgroundGradientTo: "#FFF",
                    backgroundGradientFromOpacity: 1,
                    backgroundGradientToOpacity: 1,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 0
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 0
                    }}
                />
                </View>
            <View style ={styles.covidWrapper}>
                <Text style={styles.covidText}>Covid Protocol</Text>
                <View style={styles.items}>
                    <Tasks text={"Covid Vaccine"}/>
                    <Tasks text={"Covid Passport"}/>
                    <Tasks text={"Mask"}/>
                </View>
            </View>
        </View>





  
            )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        leftPadding: 20,
        rightPadding: 20,
    },
    textWrapper: {
        paddingTop: 142,
        paddingHorizontal: 20,
    },
    bubble:{
        backgroundColor: '#E3E3E3',
        padding: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    chartHeading:{
        paddingHorizontal: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    items: {
        marginTop: 5,
      },
    covidWrapper:{
        paddingTop: 10,
        paddingHorizontal: 20,

    },
    covidText:{
        fontWeight: 'bold',
        fontSize: 20,
        leftPadding: 20,
    },
    enterDestination:{
        fontSize: 16,
        fontWeight: 'bold',
    },
})


export default HealthCenter
