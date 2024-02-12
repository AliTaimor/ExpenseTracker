import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Load counter value from AsyncStorage when component mounts
    loadCounter();
  }, []);

  const loadCounter = async () => {
    try {
      const value = await AsyncStorage.getItem('counter');
      if (value !== null) {
        setCounter(parseInt(value, 10));
      }
    } catch (error) {
      console.error('Error loading counter:', error);
    }
  };

  const saveCounter = async (value) => {
    try {
      await AsyncStorage.setItem('counter', value.toString());
    } catch (error) {
      console.error('Error saving counter:', error);
    }
  };

  const incrementCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    saveCounter(newCounter);
  };

  const decrementCounter = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
    saveCounter(newCounter);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Counter: {counter}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Increment" onPress={incrementCounter} />
        <Button title="Decrement" onPress={decrementCounter} disabled={counter === 0} />
      </View>
    </View>
  );
};

export default CounterApp;
