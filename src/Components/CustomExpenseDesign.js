import React, {useState} from 'react';
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
import CustomNotifications from './CustomNotifications';
function CustomExpenseDesign({buttonColor, borderColor, index}) {
  const {
    dispatch,
    isDatePickerVisible,
    setDatePickerVisibility,
    formattedDate,
    postingData,
    isNotification,
  } = useMainContext();
  const [inputValueEvent, setInputValueEvent] = useState(
    index ? index.amount : '',
  );
  const [eventDescription, setEventDescription] = useState(
    index ? index.description : '',
  );
  const [dateTimeEvent, setDateTimeEvent] = useState(
    index ? index.dateTimeEvent : formattedDate(new Date()),
  );
  // date and time functions
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const newDate = formattedDate(date);
    setDateTimeEvent(newDate);
    hideDatePicker();
  };

  const handleAddExpense = () => {
    if (eventDescription && dateTimeEvent && inputValueEvent) {
      dispatch({
        type: 'addincomeData',
        payload: {
          description: eventDescription,
          amount: parseFloat(inputValueEvent),
          type: 'Expense',
          createdAt: dateTimeEvent,
        },
      });
      dispatch({
        type: 'notification',
        payload: true,
      });
      postingData({
        description: eventDescription,
        amount: parseFloat(inputValueEvent),
        type: 'Expense',
        dateTimeEvent,
      });
    } else {
      Alert.alert('one or more fields left empty');
    }
  };

  const handleEdit = () => {
    const newIndex = {
      description: eventDescription,
      amount: parseFloat(inputValueEvent),
      type: 'Expense',
      dateTimeEvent,
      id: index.id,
    };

    editData(newIndex);
  };

  return (
    <View style={styles.container}>
      {isNotification && (
        <CustomNotifications
          message={'Expense Data Submitted Sucessfully'}
          backgroundColor={'darkred'}
          duration={1500}
        />
      )}
      <View style={styles.infoView}>
        <Text style={styles.amountHeading}>Description</Text>
        <TextInput
          placeholder="Note"
          style={styles.amountBoxTwo}
          onChangeText={text => {
            setEventDescription(text);
          }}
        />
      </View>
      <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
        <View style={styles.infoView}>
          <Text style={styles.amountHeading}>Select Date and Time</Text>

          {/* date and time functionality */}

          <View>
            <Text style={styles.dateTimeStyle}>{dateTimeEvent}</Text>
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
          onChangeText={text => setInputValueEvent(text)}
        />
      </View>
      <View style={styles.buttonView}>
        {index ? (
          <TouchableOpacity
            style={[styles.buttonAdd, {backgroundColor: buttonColor}]}
            activeOpacity={0.8}
            onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.buttonAdd, {backgroundColor: buttonColor}]}
            activeOpacity={0.8}
            onPress={handleAddExpense}>
            <Text style={styles.buttonText}>Add Expense</Text>
          </TouchableOpacity>
        )}
    
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
