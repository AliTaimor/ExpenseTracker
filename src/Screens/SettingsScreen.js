import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import DropdownComponent from '../Components/DropdownComponent';

const SettingsScreen = ({currencyDropdownData}) => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Button title="Clear All" onPress={clearAll} color="red" />

      <DropdownComponent placeholder="Currency" data={currencyDropdownData} />
      <DropdownComponent
        placeholder="Date and Time Format"
        data={currencyDropdownData}
      />
    </View>
  );
};
export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
});
