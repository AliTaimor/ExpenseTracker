import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function CustomContent({add, addTwo}, result) {
  result = add - addTwo;

  console.log(result);
  return (
    <View style={styles.contentContainer}>
      <View>
        <Text style={styles.incomeText}>Income</Text>
        {/* added the state prop from navigation to show the updated income data */}
        <Text style={styles.incomeContent}>{add} Rs</Text>
      </View>
      <View>
        <Text style={styles.expenseText}>Expense</Text>
        {/* added the state prop from navigation to show the updated expense data */}
        <Text style={styles.expenseContent}>{addTwo} Rs</Text>
      </View>
      <View>
        <Text style={styles.balanceText}>Balance</Text>
        {/* calculated balance on the top of the screen and shown on the balance content */}
        <Text style={styles.balanceContent}>{result} RS</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 2,
    paddingVertical: 25,
    backgroundColor: '#ACA9BB',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  incomeContent: {
    color: '#043927',
    fontWeight: 'bold',
  },
  expenseContent: {
    color: '#58111A',
    fontWeight: 'bold',
  },
  balanceContent: {
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
