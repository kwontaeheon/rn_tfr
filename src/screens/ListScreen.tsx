import React, {useEffect, useState} from 'react';

import { View, Text } from '../components/Themed';
import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput, Dimensions, FlatList, TouchableOpacity
} from 'react-native';


import { Modal, Pressable } from 'react-native';

import useDiary from '../hooks/useDiary';
import { diaryData } from '../modules/diaryManager';
import useLoginManager from '../hooks/useLogin';
import {loginData} from '../modules/loginManager';
import useModifyDiaryManager from '../hooks/useModifyDiary';
import { format } from "date-fns";  // https://date-fns.org/v2.16.1/docs/format



import ModifyScreen from './ModifyScreen';

function ListScreen({navigation}) {
  
  const { diary, lIdx, rIdx, onAddDiary, onRemoveDiary, onModifyDiary, onFetchMoreDiary } = useDiary();
  const { login , onLoginSuccess } = useLoginManager();
  const { modifyDiary,  onModifyMDiary} = useModifyDiaryManager();
  const [modalVisible, setModalVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

function _renderItem({ item }: { item: diaryData }) {
  return (
      
      <TouchableOpacity style={styles.item} onPress={(ev) => {
            
            onModifyMDiary(item.id, 
              item.title, 
              item.contents , 
              modifyDiary.query,
              modifyDiary.queryPublic,
              modifyDiary.public_tf).then(() => {
                console.log('modified');
                // navigation.replace('Root', { screen: 'TabTwo' });
               } );
             setModalVisible(true)
            
           }}>
          <Text numberOfLines={1} style={styles.title}>{item.title}</Text> 
          <Text style={styles.tstamp}>{format(new Date(item.timestamp), "eeee yyyy/MM/dd HH:mm ") + item.public_tf}</Text>
         
          
          <Text numberOfLines={30} style={styles.subtitle}>{item.contents}</Text>
          {/* <Text style={styles.subtitle}>{item.class}</Text> */}
      </TouchableOpacity>
      
  );
}

//    useEffect(() => {
  // onFetchMoreDiary(login.email, rIdx);
  // })
  
  return (
    
    <SafeAreaView onLayout={() => onFetchMoreDiary(login.email, 0, modifyDiary.query, true)} style={styles.container}>
    <ImageBackground source={require('../../assets/images/nyn2.jpg')} style={styles.image}>
      <View  style={styles.backgroundFull}>
        
        <TextInput style={styles.searchBar} 
           placeholderTextColor='#333333'
           placeholder="Search.." 
           onChangeText={(text)=>{ 
            onFetchMoreDiary(login.email, 0, text, true)
            console.log("text: " + text);

            // onModifyCurrentDiary(currentDiary.cont_id, 
            //   currentDiary.title, 
            //   currentDiary.contents , 
            //   text, 
            //   currentDiary.queryPublic,
            //   currentDiary.public_tf).then(rs =>  {
              
            //   });
            }}/>
        {/* <Text>lidx: {lIdx} rIDx: {rIdx} email: {login.email}</Text> */}
        <View style={styles.centeredView}>
            <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              console.log("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
              
                {ModifyScreen({navigation,  modifyTF: modalVisible, setModalVisible})}
                
              
              
          </Modal>
          {/* <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() =>{console.log(modalVisible); }}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable> */}
        </View>
        <FlatList data={diary} 
            initialNumToRender={50}
            renderItem={_renderItem} 
            onRefresh={() => onFetchMoreDiary(login.email, 0, modifyDiary.query, true)}
            refreshing={isRefreshing} // state
            onEndReachedThreshold={0.9}
            onEndReached={() => {
              if (rIdx >= 50) {
                console.log("log more than threshold", rIdx)
                onFetchMoreDiary(login.email, rIdx, modifyDiary.query, false)
              } else {
                console.log("less than threshold", rIdx)
              }
            }}
            style={styles.listContainer} />
      </View>
    </ImageBackground> 
  </SafeAreaView>

  );
}

export default ListScreen;

const d = Dimensions.get("window")


const styles = StyleSheet.create({
  centeredView: {
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button2: {
    // borderRadius: 20,
    padding: 10,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#333333",
    fontSize: 15,
    borderColor: '#333333',
    borderTopWidth: 1,
    paddingTop: 10,
    width: '85%',
    alignSelf: 'center',
    height: 30,
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', 
    height: d.height*1
  },
  backgroundFull: { 
    height: '100%', 
    backgroundColor: 'transparent', 
    flexDirection: 'column',
    width: '100%', 
    borderRadius: 5,
    paddingTop: '5%',
     },
     
  searchBar: {
    borderColor: '#333333',
    borderBottomWidth: 1,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    padding: 10,
    
    fontSize: 15,
    color:  '#333333',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    height: 50,
    
  },
  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  image: {
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
    },
  listContainer: {
      top: 20,
      height: '100%',
      // flexDirection: 'row', 
  },
  item: {
      borderBottomWidth: 1,
      // borderTopWidth: 1,
      borderColor: '#333333',
      padding: 10
  },
  tstamp: {
    fontSize: 16,    
    color: '#333333',
    // fontWeight: 'bold'
    textAlign: 'right'
},
title: {
  marginRight: 20,
  color: '#333333',
  fontSize: 18
},
subtitle: {
    left: 10,
    marginRight: 20,
    color: '#333333',
    fontSize: 16
}
});






