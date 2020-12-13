import * as React from 'react';

import { View, Text } from '../components/Themed';

import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput,  TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native';


import SearchList from './SearchList';

const d = Dimensions.get("window")


export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{
        height: '100%', 
        backgroundColor: '#333', 
        flex: 1, 
        width: '100%', 
        borderRadius: 0,
        paddingTop: '5%',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
        >
          
          
            {/* <KeyboardAvoidingView style={{ 
              height: '100%', 
              backgroundColor: '#333', 
              flex: 1, 
              width: '100%', 
              margin: 0,
              padding: 7,
              alignContent: 'center',
                }}
                behavior={Platform.OS === 'ios' ? 'position' : undefined}
                keyboardVerticalOffset={100}
                >
               */}
              <TextInput style={{
              borderColor: '#FFF',
              borderBottomWidth: 1,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 30,
              paddingBottom: 5,
              height: 60,
              fontSize: 20,
              textAlign: 'left',
              width: '80%',
              color: '#FFFFFF'
            }}
              placeholderTextColor="#FFFFFF"
              placeholder="제목.." 
              onChangeText={(text)=>console.log({text})}/>
            

              <TextInput style={{
                borderColor: '#FFFFFF',
                // borderWidth: 1,
                // marginLeft: 30,
                // marginRight: 30,
                marginTop: 30,
                // marginBottom: 30,
                padding: 20,
                height: '70%',
                width: '95%',
                fontSize: 20,
                textAlign: 'left',
                textAlignVertical: 'top',
                color: '#FFFFFF'
                
              }}
                multiline 
                scrollEnabled
                placeholderTextColor="#FFFFFF"
                placeholder="내용..." 
                onChangeText={(text)=>console.log({text})}/>

            
            


            <TouchableOpacity style={styles.button} 
                onPress= {(text) => console.log({text})}
                >
                <Text style={styles.buttonTitle}
                  
                >작성완료</Text>
             </TouchableOpacity>
              {/* <View style={{height:50}}/> */}
                {/* </KeyboardAvoidingView> */}
                
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
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    display:'flex',
    marginTop: 20,
    marginBottom: 10,
    width: '80%',
    height: 50,
    padding: 10
  },
  buttonTitle: {
    fontSize: 20,
    color: '#000',
    height: 30,
    position: 'relative'
  }
});
