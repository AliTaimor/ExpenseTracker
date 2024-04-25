import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage(key, initialState) {
  const [value, setValue] = useState(initialState);

  useEffect(
    function () {
      async function getData() {
        try {
          const storedUser = await AsyncStorage.getItem(key);
          if (storedUser !== null) {
            console.log('working');
            setValue(JSON.parse(storedUser));
          } else {
            setValue(initialState);
          }
        } catch (error) {
          console.log(error.message);
        }
      }

      getData();
    },
    [key, initialState],
  );

  const updateValue = async function (newValue) {
    try {
      setValue(newValue);
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(error.message);
    }
  };

  return [value, updateValue];
}
