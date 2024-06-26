import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {formattedDate} from '../../Utils/helpers';
import {useAddIncome} from '../../CustomHooks/useAddIncome';
import {useToast} from 'react-native-toast-notifications';

function IncomeFormScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const {addIncome} = useAddIncome();
  const toast = useToast();

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
    index ? index.time : formattedDate(new Date()),
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
      addIncome({
        description: eventDescription,
        amount: inputValueEvent,
        time: dateTimeEvent,
        type: 'income',
      });
      setEventDescription('');
      setDateTimeEvent(formattedDate(new Date()));
      setInputValueEvent('');
    } else {
      toast.show('one or more fields left empty', {
        type: "danger",    
        placement: 'top',
        duration: 3000,
        offset: 30,
        animationType: 'zoom-in',
      });
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

    setEventDescription('');
    setDateTimeEvent(formattedDate(new Date()));
    setInputValueEvent('');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.notification}>
          {/* {isSuccess && (
            <CustomNotifications
              message= "Added Income Successfully"
              backgroundColor={'green'}
              duration={1500}
            />
          )} */}
        </View>
        <View style={styles.infoView}>
          <View style={styles.descriptionBox}>
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
            <View style={styles.dateTimeBox}>
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
          <View style={styles.incomeBox}>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: hp('2%'),
  },
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
    alignItems: 'center',
  },
  descriptionBox: {
    width: wp('95%'),
    marginTop: hp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('4%'),
  },
  dateTimeBox: {
    width: wp('95%'),
    marginTop: hp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('4%'),
  },
  incomeBox: {
    width: wp('95%'),
    marginTop: hp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('4%'),
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
    width: wp('89%'),
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    marginTop: hp('5%'),
  },
  buttonView: {
    paddingVertical: hp('2%'),
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  buttonText: {
    color: 'white',
  },
  dateTimeStyle: {
    color: 'black',
  },
});

export default IncomeFormScreen;
