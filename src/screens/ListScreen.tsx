import React from 'react';

import { View, Text } from '../components/Themed';
import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput, Dimensions, FlatList, TouchableOpacity
} from 'react-native';


import { Button} from 'react-native';

import useDiary from '../hooks/useDiary';
import { diaryData } from '../modules/diaryManager';
import useLoginManager from '../hooks/useLogin';
import {loginData} from '../modules/loginManager';

function _renderItem({ item }: { item: diaryData }) {
  return (
      <TouchableOpacity style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.contents}</Text>
          {/* <Text style={styles.subtitle}>{item.class}</Text> */}
      </TouchableOpacity>
  );
}



function ListScreen() {
  const { diary, lIdx, rIdx, onAddDiary, onRemoveDiary, onModifyDiary, onFetchMoreDiary } = useDiary();
  const { login , onLoginSuccess } = useLoginManager();

  
  onFetchMoreDiary(login.email, rIdx);

  return (
    
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../../assets/images/nyn2.jpg')} style={styles.image}>
      <View style={styles.backgroundFull}>
        
        <TextInput style={styles.searchBar} 
           placeholderTextColor='#333333'
           placeholder="찾아보기.." 
           onChangeText={(text)=>console.log({text})}/>
        <Text>lidx: {lIdx} rIDx: {rIdx} email: {login.email}</Text>
        <FlatList data={diary} 
            renderItem={_renderItem} 
            
            onScrollEndDrag={() => onFetchMoreDiary(login.email, rIdx)} 
            style={styles.listContainer} />
      </View>
    </ImageBackground> 
  </SafeAreaView>

  );
}

export default ListScreen;

const d = Dimensions.get("window")


const styles = StyleSheet.create({
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
      height: 150,
      borderBottomWidth: 1,
      // borderTopWidth: 1,
      borderColor: '#333333',
      padding: 10
  },
  title: {
      fontSize: 15,
      
      color: '#333333',
      // fontWeight: 'bold'
  },
  subtitle: {
      left: 10,
      color: '#333333',
      fontSize: 15
  }
});






