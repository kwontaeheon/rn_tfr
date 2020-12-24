import React from 'react';

import { View, Text } from '../components/Themed';
import {
 SafeAreaView,  StyleSheet, ImageBackground, TextInput, Dimensions, FlatList, TouchableOpacity
} from 'react-native';


import { Button} from 'react-native';

import SearchList from '../components/container/SearchList';
import useDiary from '../hooks/useDiary';
import { diaryData } from '../modules/diaryManager';

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
  const { diaryManager, onAddDiary, onRemoveDiary, onModifyDiary, onFetchMoreDiary } = useDiary();

  return (
    
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../../assets/images/nyn.jpg')} style={styles.image}>
      <View style={styles.backgroundFull}>
        <TextInput style={styles.searchBar} 
           placeholderTextColor='#FFFFFF'
           placeholder="찾아보기.." 
           onChangeText={(text)=>console.log({text})}/>
        <FlatList data={diaryManager} renderItem={_renderItem} onScrollEndDrag={onFetchMoreDiary} style={styles.listContainer} />
        
    </View>
    </ImageBackground>
  </SafeAreaView>

  );
}

export default ListScreen;

const d = Dimensions.get("window")


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', 
    height: '100%'
  },
  backgroundFull: { 
    height: '100%', 
    backgroundColor: 'transparent', 
    flex: 1, 
    // alignItems: 'center',
    width: '100%', 
    borderRadius: 5,
    paddingTop: '5%',
     },
  searchBar: {
    borderColor: '#FFFFFF',
    borderBottomWidth: 1,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    padding: 7,
    height: 50,
    fontSize: 15,
    color:  '#FFFFFF',
    textAlign: 'center'},
  
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
        flex: 1,
    },
    item: {
        height: 150,
        borderBottomWidth: 1,
        // borderTopWidth: 1,
        borderColor: '#FFFFFF',
        padding: 10
    },
    title: {
        fontSize: 15,
        
        color: '#FFFFFF',
        // fontWeight: 'bold'
    },
    subtitle: {
        left: 10,
        color: '#FFFFFF',
        fontSize: 15
    }
});





