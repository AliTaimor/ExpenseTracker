import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomNotifications from '../../Components/CustomNotifications';
import {useMainContext} from '../../Contexts/MainContext';
import {useRoute} from '@react-navigation/native';

function IncomeFormScreen() {
  const {
    isDatePickerVisible,
    setDatePickerVisibility,
    postingData,
    dispatch,
    formattedDate,
    isNotification,
    editData,
  } = useMainContext();

  const route = useRoute();
  const {index} = route.params || {};

  console.log('Income Form screen', index);

  const [inputValueEvent, setInputValueEvent] = useState(
    index ? index.amount : '',
  );
  const [eventDescription, setEventDescription] = useState(
    index ? index.description : '',
  );
  const [dateTimeEvent, setDateTimeEvent] = useState(
    index ? index.dateTimeEvent : formattedDate(new Date()),
  );

  // date and time states
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

  const handleAddIncome = () => {
    if (eventDescription && dateTimeEvent && inputValueEvent) {
      dispatch({
        type: 'addincomeData',
        payload: {
          description: eventDescription,
          amount: parseFloat(inputValueEvent),
          type: 'Income',
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
        type: 'Income',
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
      type: 'Income',
      dateTimeEvent,
      id: index.id,
    };

    editData(newIndex);
  };

  console.log('Notification', isNotification);

  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        {isNotification && (
          <CustomNotifications
            message={'Income Data Submitted Sucessfully'}
            backgroundColor={'green'}
            duration={1500}
          />
        )}
      </View>
      <View style={styles.infoView}>
        <Text style={styles.amountHeading}>Description</Text>
        <TextInput
          placeholder="Note"
          value={eventDescription}
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
            <Text style={styles.dateTimeStyle}>
              <Text>{dateTimeEvent}</Text>
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
          value={String(inputValueEvent)}
          keyboardType="phone-pad"
          style={[styles.amountBox, {borderColor: 'green'}]}
          // detecting the changed state
          onChangeText={text => setInputValueEvent(text)}
        />
      </View>
      <View style={styles.buttonView}>
        {index ? (
          <TouchableOpacity
            style={[styles.buttonAdd, {backgroundColor: 'green'}]}
            activeOpacity={0.8}
            // setting the data in an empty array state
            onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.buttonAdd, {backgroundColor: 'green'}]}
            activeOpacity={0.8}
            // setting the data in an empty array state
            onPress={handleAddIncome}>
            <Text style={styles.buttonText}>Add Income</Text>
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
  notification: {
    flex: 2,
    position: 'absolute',
    backgroundColor: 'Yellow',
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

export default IncomeFormScreen;
