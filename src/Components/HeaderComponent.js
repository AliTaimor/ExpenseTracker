import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeaderComponent = ({
  handleIsIncomePress,
  handleIsExpensePress,
  index,
}) => {
  const [isActiveIncome, setIsActiveIncome] = useState(true);
  const [isActiveExpense, setIsActiveExpense] = useState(false);
  console.log(index);
  const handleIncomePress = () => {
    if (index.type === 'income') {
      setIsActiveIncome(true);
      setIsActiveExpense(false);
      handleIsIncomePress();
    }
  };

  const handleExpensePress = () => {
    if (index.type === 'expense') {
      setIsActiveIncome(false);
      setIsActiveExpense(true);
      handleIsExpensePress();
    }
  };
  return (
    <View style={styles.headingView}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.button,
          styles.border,
          isActiveIncome ? {backgroundColor: 'green'} : null,
        ]}
        onPress={handleIncomePress}>
        <Text
          style={[
            styles.headingText,
            isActiveIncome ? {color: 'white'} : null,
          ]}>
          Income
        </Text>
      </TouchableOpacity>
      <View style={styles.borderMiddle}></View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.button,
          styles.border,
          isActiveExpense ? {backgroundColor: 'darkred'} : null,
        ]}
        onPress={handleExpensePress}>
        <Text
          style={[
            styles.headingText,
            isActiveExpense ? {color: 'white'} : null,
          ]}>
          Expense
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headingView: {
    marginTop: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: hp('5%'),
  },
  borderMiddle: {
    borderRightWidth: 1,
  },
  border: {
    borderWidth: 1,
    borderRadius: 10,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    padding: hp('2%'),
  },
});

export default HeaderComponent;
