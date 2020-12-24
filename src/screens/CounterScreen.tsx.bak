import React from 'react';
import useCounter from '../hooks/useCounter';
import {StyleSheet, View, Text, Button} from 'react-native';
function CounterScreen() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  return (
    <View style ={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <Button onPress={onIncrease} title="+1"/>
      <Button onPress={onDecrease} title="-1"/>
      <Button onPress={() => onIncreaseBy(5)} title="+5"/>
    </View>
  );
}

export default CounterScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column', 
    height: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});