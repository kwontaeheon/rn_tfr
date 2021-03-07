import * as React from 'react';

import { View, Text } from '../components/Themed';

import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput,  TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native';
import useLoginManager from '../hooks/useLogin';


import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import useCurrentPublicDiaryManager from '../hooks/useCurrentPublicDiary';
import usePublicDiaryManager from '../hooks/usePublicDiary';
import { useState } from 'react';

const d = Dimensions.get("window")


export default function PublicModalScreen({navigation, modifyTF=false}) {
  const { login , onLoginSuccess } = useLoginManager();
  const { currentPublicDiary,  onModifyCurrentPublicDiary} = useCurrentPublicDiaryManager();
  
  const { diary, lIdx, rIdx, onAddDiary, onRemoveDiary, onModifyDiary, onFetchMoreDiary } = usePublicDiaryManager();
  
  return (
    <SafeAreaView style={styles.container}>
      
      
        <Text style={{
        borderColor: '#333333',
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 40,
        paddingBottom: 5,
        height: 40,
        fontSize: 15,
        textAlign: 'center',
        width: '80%',
        color: '#333333',
         }} >{currentPublicDiary.title}</Text>

    <ScrollView 
     style={{
       width: '100%'
     }}
      //   scrollEnabled={true}
      //   showsVerticalScrollIndicator={true}
      //   contentContainerStyle={{
      //     alignItems: 'center',
      //     justifyContent: 'center'
      //   }}
      //   style={{
      //   height: '90%', 
      //   backgroundColor: '#FFFFFF', 
      //   flex: 1, 
      //   width: '100%', 
      //   borderRadius: 0,
      //   paddingTop: '5%',
      //   alignContent: 'center',
      //   alignItems: 'center',
      //   flexDirection: 'column',
        
      // }}
        >
        <Text style={{
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
          
        }}>{currentPublicDiary.contents} </Text>
      </ScrollView>
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
