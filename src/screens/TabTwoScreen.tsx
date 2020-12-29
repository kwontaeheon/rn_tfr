import * as React from 'react';

import { View, Text } from '../components/Themed';

import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput,  TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native';




const d = Dimensions.get("window")


export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{
        height: '90%', 
        backgroundColor: '#FFFFFF', 
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
              borderColor: '#333333',
              borderBottomWidth: 1,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 30,
              paddingBottom: 5,
              height: 40,
              fontSize: 15,
              textAlign: 'left',
              width: '80%',
              color: '#333333'
            }}
              placeholderTextColor="#333333"
              placeholder="제목.." 
              onChangeText={(text)=>console.log({text})}/>
            

              <TextInput style={{
                borderColor: '#333333',
                // borderWidth: 1,
                // marginLeft: 30,
                // marginRight: 30,
                marginTop: 30,
                // marginBottom: 30,
                padding: 20,
                height: '70%',
                width: '95%',
                fontSize: 15,
                textAlign: 'left',
                textAlignVertical: 'top',
                color: '#333333'
                
              }}
                multiline 
                scrollEnabled
                placeholderTextColor="#333333"
                placeholder="내용..." 
                onChangeText={(text)=>console.log({text})}/>

            
            

    </View>
    <View style={{
      height: 40,
      backgroundColor: '#FFFFFF', 
      width: '100%', 
      
    }}>
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', 
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
    borderTopColor: '#333333',
    borderTopWidth: 1,
    backgroundColor: "#FFFFFF",
    display:'flex',
    width: '80%',
    height: 50,
    paddingTop: 20,
    paddingBottom: 10,
    // marginTop: 10,
    // marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 15,
    color: '#333333',
    height: 30,
    position: 'relative'
  }
});
