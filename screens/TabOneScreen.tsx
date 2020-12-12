import * as React from 'react';
import { View, Text } from '../components/Themed';
import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput
} from 'react-native';

import StudentList from './StudentList';


export default function TabOneScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={{ 
          height: '100%', 
          backgroundColor: 'transparent', 
          flex: 1, 
          width: '100%', 
          borderRadius: 5,
          paddingTop: '5%',
           }}>
          <TextInput style={{
            borderColor: '#000000',
            borderBottomWidth: 1,
            marginLeft: 30,
            marginRight: 30,
            marginTop: 30,
             padding:10,
             height: '10%',
              fontSize: 20}} 
             placeholder="Type here to translate to heart" 
             onChangeText={(text)=>console.log({text})}/>
          <StudentList />
      </View>
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
    // , justifyContent: 'flex-end'
   },

   linearGradient: {
       flex: 1,
       width: '100%',
       borderRadius: 5
      }
});
