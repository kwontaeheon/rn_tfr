import * as React from 'react';

import { View, Text } from '../components/Themed';

import {
 SafeAreaView,  StyleSheet, ImageBackground
} from 'react-native';


import StudentList from './StudentList';


export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/images/green.jpg')} style={styles.image}>
        <View style={{ height: '100%', backgroundColor: 'transparent', flex: 1, width: '100%', borderRadius: 5 }}>
           <StudentList />
        </View>
      </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row', 
    height: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

   image: {
    width: '100%', height: '100%'
    , justifyContent: 'flex-end'
   },

   linearGradient: {
       flex: 1,
       width: '100%',
       borderRadius: 5
      }
});
