import * as React from 'react';

import { View, Text } from '../components/Themed';

import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput,  TouchableOpacity
} from 'react-native';


import SearchList from './SearchList';



export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ 
          height: '100%', 
          backgroundColor: '#FFFFFF', 
          flex: 1, 
          width: '100%', 
          borderRadius: 5,
          paddingTop: '5%',
          alignItems: 'center'
           }}>
          
            <TextInput style={{
                borderColor: '#000000',
                borderBottomWidth: 1,
                marginLeft: 30,
                marginRight: 30,
                marginTop: 30,
                padding: 7,
                height: 50,
                fontSize: 20,
                textAlign: 'center',
                width: '80%'
              }}
                placeholder="제목" 
                onChangeText={(text)=>console.log({text})}/>
          
          
          <TextInput style={{
            borderColor: '#000000',
            borderWidth: 1,
            // marginLeft: 30,
            // marginRight: 30,
            marginTop: 30,
            padding: 7,
            height: '60%',
            width: '80%',
            fontSize: 20,
            textAlign: 'left',
            textAlignVertical: 'top',
          }}
            
             multiline 
             scrollEnabled
             placeholder="내용" 
             onChangeText={(text)=>console.log({text})}/>
          <TouchableOpacity style={styles.button} 
            onPress= {(text) => console.log({text})}>
            <Text style={styles.buttonTitle}>작성완료</Text>
          </TouchableOpacity>
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
    , justifyContent: 'flex-end'
   },

   linearGradient: {
       flex: 1,
       width: '100%',
       borderRadius: 5
      },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    marginTop: 40,
    marginBottom: 40,
    width: '80%',
    height: 40,
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 20,
    color: '#FFF'
  }
});
