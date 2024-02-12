import React from 'react';

import {View, StyleSheet} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomExpenseDesign from '../Components/CustomExpenseDesign';
import CustomIncomeDesign from '../Components/CustomIncomeDesign';
function IncomeScreen({isIncome, handleIsIncomePress, handleIsExpensePress}) {
  
  return (
    <View style={styles.container}>
      <HeaderComponent
        isIncome={isIncome}
        handleIsIncomePress={handleIsIncomePress}
        handleIsExpensePress={handleIsExpensePress}
      />
      {isIncome ? (
        <View style={[styles.headerContent]}>
          <CustomIncomeDesign buttonColor="green" borderColor="green" />
        </View>
      ) : (
        <View style={[styles.headerContent]}>
          <CustomExpenseDesign buttonColor="darkred" borderColor="darkred" />
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
  submittedContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  headerContent: {
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
});

export default IncomeScreen;
