import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomExpenseDesign from '../Components/CustomExpenseDesign';
import CustomIncomeDesign from '../Components/CustomIncomeDesign';
function IncomeScreen({
  isIncome,
  handleIsIncomePress,
  handleIsExpensePress,
  // imported state props for setting income
  amount,
  setAmount,
  handleChange,
  // imported state props for setting expense
  addExpense,
  setAddExpense,
  handleChangeTwo,
}) {
  return (
    <View style={styles.container}>
      <HeaderComponent
        isIncome={isIncome}
        handleIsIncomePress={handleIsIncomePress}
        handleIsExpensePress={handleIsExpensePress}
      />
      {isIncome ? (
        <View style={[styles.headerContent]}>
          <CustomIncomeDesign
            buttonColor="green"
            borderColor="green"
            handleChange={handleChange}
          />
        </View>
      ) : (
        <View style={[styles.headerContent]}>
          <CustomExpenseDesign
            buttonColor="darkred"
            borderColor="darkred"
            handleChangeTwo={handleChangeTwo}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  headerContent: {
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
});

export default IncomeScreen;
