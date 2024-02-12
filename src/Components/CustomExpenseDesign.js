import React from 'react';
import {useMainContext} from '../Contexts/MainContext';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {handleAddTransaction} from '../Utils';
import CustomNotifications from './CustomNotifications';
function CustomExpenseDesign({buttonColor, borderColor}) {
  const {
    addExpense,
    setAddExpense,
    setSelectedDate,
    selectedDate,
    isDatePickerVisible,
    setDatePickerVisibility,
    addExpDescription,
    setAddExpDescription,
    setAllData,
    expenseNotification,
    setExpenseNotification,
    // myExpense,
    postingData,
  
  } = useMainContext();
  // date and time functions
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
  // function to add expense amount
  const handleChange = newAmount => {
    setAddExpense(parseFloat(newAmount));
  };
  //adding the state for Description
  const handleDescription = newDescription => {
    setAddExpDescription(newDescription);
  };

  const handleAddExpense = () => {
    if (addExpDescription && selectedDate && addExpense) {
      postingData({
        data: setAllData,
        description: addExpDescription,
        amount: parseFloat(addExpense),
        type: 'Expense',
        createdAt: selectedDate,
      });
      setExpenseNotification(true);
    } else {
      Alert.alert('one or more fields left empty');
    }
  };

  return (
    <View style={styles.container}>
      {expenseNotification && (
        <CustomNotifications
          message={'Expense Data Submitted Sucessfully'}
          backgroundColor={'darkred'}
          setNotification={setExpenseNotification}
          notification={expenseNotification}
          duration={1500}
        />
      )}
      <View style={styles.infoView}>
        <Text style={styles.amountHeading}>Description</Text>
        <TextInput
          placeholder="Note"
          style={styles.amountBoxTwo}
          onChangeText={text => {
            handleDescription(text);
          }}
        />
      </View>
      <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
        <View style={styles.infoView}>
          <Text style={styles.amountHeading}>Select Date and Time</Text>

          {/* date and time functionality */}

          <View>
            <Text style={styles.dateTimeStyle}>{formattedDate}</Text>
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
          //  detecting changes for setting expense
          onChangeText={text => handleChange(text)}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.buttonAdd, {backgroundColor: buttonColor}]}
          activeOpacity={0.8}
          onPress={handleAddExpense}>
          <Text style={styles.buttonText}>Add Expense</Text>
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
  submittedContainer: {
    flex: 1,
    backgroundColor: 'black',
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
    color: 'black',
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

export default CustomExpenseDesign;
