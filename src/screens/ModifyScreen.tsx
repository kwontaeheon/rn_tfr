import * as React from 'react';

import { View, Text } from '../components/Themed';

import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput,  TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native';
import useLoginManager from '../hooks/useLogin';
import useModifyDiaryManager from '../hooks/useModifyDiary';


import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import useDiaryManager from '../hooks/useDiary';
import { useState } from 'react';

const d = Dimensions.get("window")


export default function ModifyScreen({navigation, modifyTF=false}) {
  const { login , onLoginSuccess } = useLoginManager();
  const { modifyDiary,  onModifyMDiary} = useModifyDiaryManager();
  console.log(modifyDiary);
  const { diary, lIdx, rIdx, onAddDiary, onRemoveDiary, onModifyDiary, onFetchMoreDiary } = useDiaryManager();
  
  return (
    <SafeAreaView style={styles.container} onResponderStart={() => {
      // console.log(navigation);
      }}>
      
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
        <TextInput defaultValue={modifyDiary.title} style={{
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
        
      }}
        placeholderTextColor="#333333"
        placeholder="Title.." 
        
        onChangeText={(text) => { 
          onModifyMDiary(
            modifyDiary.cont_id,
            // currentDiary.title,
            text, 
            modifyDiary.contents, 
            modifyDiary.query,
            modifyDiary.queryPublic,
            modifyDiary.public_tf).then(rs => {
              console.log(rs.payload.title)
            })
        }}
        />
              
            

        <TextInput defaultValue={modifyDiary.contents} style={{
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
          placeholder="Content..." 
          onChangeText={(text)=> { 
            onModifyMDiary(
              modifyDiary.cont_id,
              modifyDiary.title, 
              text, 
              modifyDiary.query,
              modifyDiary.queryPublic,
              modifyDiary.public_tf).then(rs => {
            console.log(rs.payload.contents)}) }}/>
      </View>
      <View style={{
        height: 40,
        backgroundColor: '#FFFFFF', 
        width: '100%', 
        
      }}>
      <TouchableOpacity style={styles.button} 
        onPress= {(text) => {
                  // title, contents, login.email;
        const dt = new Date().toISOString();
        var contId = dt + "_" + login.email ;
        const orgId = modifyDiary.cont_id;          
        if (orgId != "") {
          contId = orgId
        }
        const data = {
          "@timestamp": dt,
          "email": login.email,
          "name": login.name,
          "title": modifyDiary.title,
          "contents": modifyDiary.contents,
          "public_tf": "Y",
          "cont_id": contId,
        }

        const config  = {
          headers: {
            'Content-Type': 'application/json' ,
            'Authorization': 'Basic dmlld2VyOnJuanN4b2dqc0Ax'
          }
        }
        // console.log(paramJson);
        console.log(data);
        console.log(config);

        axios.post('http://maum.cf:9222/maumilgi-diary-contents/_doc/' + contId, data, config)
        .then(rs => { 
          //  console.log(rs.data)
          //  console.log(rs.request)
          onModifyMDiary(
            "",
            "",
            "",
            "",
            "",
            "Y"
          ).then(rs => {
              onFetchMoreDiary(login.email, 0, rs.payload.query, true);
              navigation.replace('Root')
              }
            );
        } )
        .catch((error) => console.log( error.response.request._response ) );

                    }}>
        <Text style={styles.buttonTitle}>Post</Text>
      </TouchableOpacity>
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
