import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useMainContext} from '../Contexts/MainContext';
import CustomSpinner from './CustomSpinner';

function CustomContent() {
  const {totalIncome, totalExpense, totalBalance} = useMainContext();

  return (
    <View style={styles.contentContainer}>
      <View>
        <Text style={styles.incomeText}>Income</Text>
        {/* added the state prop to show the updated income data */}

        {totalIncome === 0 ? (
          <Text style={styles.incomeContent}>0 Rs</Text>
        ) : totalIncome > 0 ? (
          <Text style={styles.incomeContent}>{totalIncome} Rs</Text>
        ) : (
          <CustomSpinner />
        )}
      </View>
      <View>
        <Text style={styles.expenseText}>Expense</Text>
        {/* added the state prop to show the updated expense data */}

        {totalExpense === 0 ? (
          <Text style={styles.expenseContent}>0 Rs</Text>
        ) : totalIncome > 0 ? (
          <Text style={styles.expenseContent}>{totalExpense} Rs</Text>
        ) : (
          <CustomSpinner />
        )}
      </View>
      <View>
        <Text style={styles.balanceText}>Balance</Text>
        {/* calculated balance on the top of the screen and shown on the balance content */}

        {totalBalance === 0 ? (
          <Text style={styles.balanceContent}>0 Rs</Text>
        ) : totalIncome > 0 ? (
          <Text style={styles.balanceContent}>{totalBalances} Rs</Text>
        ) : (
          <CustomSpinner />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 25,
    width: '90%',
    backgroundColor: '#ACA9BB',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 30,
  },
  incomeContent: {
    width: 60,
    color: '#043927',
    fontWeight: 'bold',
  },
  expenseContent: {
    width: 60,
    color: '#58111A',
    fontWeight: 'bold',
  },
  balanceContent: {
    width: 60,
    color: '#0090C4',
    fontWeight: 'bold',
  },
  incomeText: {
    fontWeight: 'bold',
    color: 'black',
  },
  expenseText: {
    fontWeight: 'bold',
    color: 'black',
  },
  balanceText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomContent;
