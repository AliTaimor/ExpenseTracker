import React from 'react';
import {useContext} from 'react';
import {MainContext} from '../Contexts/MainContext';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
function CustomIncomeDesign({buttonColor, borderColor}) {
  const {
    addIncome,
    setAddIncome,
    isDatePickerVisible,
    setDatePickerVisibility,
    setSelectedDate,
    selectedDate,
    addDescription,
    setAddDescription,
    allData,
    setAllData,
  } = useContext(MainContext);

  // date and time states
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const formattedDate = selectedDate.toLocaleString();

  //adding the state for changing income

  const handleChange = newIncome => {
    setAddIncome(parseFloat(newIncome));
  };
  //adding the state for Description
  const handleDescription = newDescription => {
    setAddDescription(newDescription);
  };
  //

  const handleAddIncome = () => {
    if (addDescription && selectedDate && addIncome) {
      setAllData(prevData => ({
        ...prevData,
        income: [
          ...prevData.income,
          {
            description: addDescription,
            date: selectedDate,
            income: parseFloat(addIncome),
          },
        ],
      }));
    } else {
      Alert.alert('one or more fields left empty');
    }
  };
  console.log('my data', allData);

  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <Text style={styles.amountHeading}>Description</Text>
        <TextInput
          placeholder="Note"
          style={styles.amountBoxTwo}
          onChangeText={text => {
            handleDescription(text);
          }}
        />
        <View></View>
      </View>
      <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
        <View style={styles.infoView}>
          <Text style={styles.amountHeading}>Select Date and Time</Text>

          {/* date and time functionality */}

          <View>
            <Text style={styles.dateTimeStyle}>
              <Text>{formattedDate}</Text>
            </Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          {/*  */}
        </View>
      </TouchableOpacity>
      <View style={styles.infoView}>
        <Text style={styles.amountHeading}>Amount</Text>
        <TextInput
          placeholder="Amount"
          keyboardType="phone-pad"
          style={[styles.amountBox, {borderColor: borderColor}]}
          // detecting the changed state
          onChangeText={text => handleChange(text)}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.buttonAdd, {backgroundColor: buttonColor}]}
          activeOpacity={0.8}
          // setting the data in an empty array state
          onPress={handleAddIncome}>
          <Text style={styles.buttonText}>Add Income</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  infoView: {
    marginTop: '5%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  amountHeading: {
    color: 'black',
    fontWeight: 'bold',
  },
  amountBox: {
    borderBottomWidth: 1,
    color: 'black',
  },
  amountBoxTwo: {
    borderBottomWidth: 1,
  },
  buttonAdd: {
    width: '89%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
  },
  buttonView: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
  },
  dateTimeStyle: {
    color: 'black',
  },
});

export default CustomIncomeDesign;
