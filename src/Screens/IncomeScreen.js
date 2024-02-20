import React from 'react';

import {View, StyleSheet} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomExpenseDesign from '../Components/CustomExpenseDesign';
import CustomIncomeDesign from '../Components/CustomIncomeDesign';
import {useRoute} from '@react-navigation/native';
function IncomeScreen({isIncome, handleIsIncomePress, handleIsExpensePress}) {
  const route = useRoute();
  const {index} = route.params || {};
  console.log(index);
  return (
    <View style={styles.container}>
      <HeaderComponent
        isIncome={isIncome}
        handleIsIncomePress={handleIsIncomePress}
        handleIsExpensePress={handleIsExpensePress}
        index={index}
      />
      {isIncome ? (
        <View style={[styles.headerContent]}>
          <CustomIncomeDesign
            buttonColor="green"
            borderColor="green"
            index={index}
          />
        </View>
      ) : (
        <View style={[styles.headerContent]}>
          <CustomExpenseDesign
            buttonColor="darkred"
            borderColor="darkred"
            index={index}
          />
        </View>
      )}
      {/* {index.type == 'Income' ? (
        <View style={[styles.headerContent]}>
          <CustomIncomeDesign
            buttonColor="green"
            borderColor="green"
            index={index}
          />
        </View>
      ) : (
        <View style={[styles.headerContent]}>
          <CustomExpenseDesign
            buttonColor="darkred"
            borderColor="darkred"
            index={index}
          />
        </View>
      )} */}
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
