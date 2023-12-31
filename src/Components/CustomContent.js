import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MainContext} from '../Contexts/MainContext';

function CustomContent() {
  const {allData} = useContext(MainContext);

  // calculating balance

  const totalIncome = allData
    .filter(currElem => currElem.type === 'Income')
    .reduce((acc, currElem) => acc + currElem.data, 0);

  const totalExpense = allData
    .filter(currElem => currElem.type === 'Expense')
    .reduce((acc, currElem) => acc + currElem.data, 0);

  const totalBalance = totalIncome - totalExpense;

  console.log('total income', totalIncome);

  return (
    <View style={styles.contentContainer}>
      <View>
        <Text style={styles.incomeText}>Income</Text>
        {/* added the state prop to show the updated income data */}
        <Text style={styles.incomeContent}>{totalIncome} Rs</Text>
      </View>
      <View>
        <Text style={styles.expenseText}>Expense</Text>
        {/* added the state prop to show the updated expense data */}
        <Text style={styles.expenseContent}>{totalExpense} Rs</Text>
      </View>
      <View>
        <Text style={styles.balanceText}>Balance</Text>
        {/* calculated balance on the top of the screen and shown on the balance content */}
        <Text style={styles.balanceContent}>{totalBalance} RS</Text>
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
