import * as React from 'react';
import { View, Text } from '../components/Themed';
import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput, Dimensions
} from 'react-native';

import SearchList from './SearchList';


export default function TabOneScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/images/nyn.jpg')} style={styles.image}>
        <View style={{ 
          height: '100%', 
          backgroundColor: 'transparent', 
          flex: 1, 
          width: '100%', 
          borderRadius: 5,
          paddingTop: '5%',
           }}>
          <TextInput style={{
            borderColor: '#FFFFFF',
            borderBottomWidth: 1,
            marginLeft: 100,
            marginRight: 100,
            marginTop: 30,
            padding: 7,
            height: 50,
            fontSize: 15,
            color:  '#FFFFFF',
            textAlign: 'center'}} 
             placeholderTextColor='#FFFFFF'
             placeholder="찾아보기.." 
             onChangeText={(text)=>console.log({text})}/>
          <SearchList />
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const d = Dimensions.get("window")


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', 
    height: '100%'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

   image: {
    // width: '100%'
    // , height: '100%'
    width: d.width
    , height: d.height
    , position: 'absolute'
    , resizeMode: 'repeat'
    , justifyContent: 'center'
   },

   linearGradient: {
       flex: 1,
       width: '100%',
       borderRadius: 5
      }
});
