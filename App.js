import { StatusBar } from 'expo-status-bar';
import{ StyleSheet, Text, View } from 'react-native';
import Flights from './Screens/components/Flights';
import Tasks from './Screens/components/Tasks';
import Home from './Screens/HomePage';
import ToDo from './Screens/ToDo';
import ComputerVis from './Screens/ComputerVis';
import HealthCenter from './Screens/HealthCenter';

import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} barStyle={{backgroundColor:'black'}} activeColor='white'>
        <Tab.Screen name='HomePage' component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name='home' color={color} size={26}
              />
            )
          }}
        />
        <Tab.Screen name='ToDo' component={ToDo}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name='format-list-numbered' color={color} size={26}
              />
            )
          }}
        />
        <Tab.Screen name='ComputerVis' component={ComputerVis}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name='camera' color={color} size={26}
              />
            )
          }}
        />
        <Tab.Screen name='HealthCenter' component={HealthCenter}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name='heart-pulse' color={color} size={26}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
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
