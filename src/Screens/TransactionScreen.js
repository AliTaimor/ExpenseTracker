import {useContext} from 'react';
import {MainContext} from '../Contexts/MainContext';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomBottomSheet from '../Components/CustomBottomSheet';
import {DeleteIcon} from '../Assets/Icons';

function TransactionScreen() {
  const {
    allData,
    setAllData,
  } = useContext(MainContext);

  // calculating balance
  const balance = () => {
    var totalInc = allData.income.reduce(
      (total, curr) => total + curr.income,
      0,
    );
    var totalExp = allData.expense.reduce(
      (total, curr) => total + curr.expense,
      0,
    );
    return totalInc - totalExp;
  };
  //adding incomes
  const calculateTotalIncome = () => {
    return allData.income.reduce((total, curr) => total + curr.income, 0);
  };
  //adding expenses
  const calculateTotalExpense = () => {
    return allData.expense.reduce((total, curr) => total + curr.expense, 0);
  };
  //deleting all data
  const clearAll = () => {
    setAllData({income: [], expense: []});
  };

  const deleteTransaction = index => {
    setAllData(allData => {
      const updatedIncomeData = allData.income.filter((_, i) => i !== index);
      return updatedIncomeData;
    });
  };
  // income data
  const renderingIncomeData = allData.income.map((curr, index) => (
    <View key={index} style={styles.innerContainerTwo}>
      <View style={styles.incomeItem}>
        <Text style={styles.textContent}>
          Date and Time: {curr.date.toLocaleString()}
        </Text>
        <Text style={styles.textContent}>Description: {curr.description}</Text>

        <Text style={styles.textContent}>Your Income: {curr.income}.Rs</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteTransaction(index)}
        acitiveOpacity={0.8}>
        <DeleteIcon height={20} width={20} color={'red'} />
      </TouchableOpacity>
    </View>
  ));
  // expense data
  const renderingExpenseData = allData.expense.map((curr, index) => (
    <View key={index} style={styles.innerContainerTwo}>
      <View style={styles.expenseItem}>
        <Text style={styles.expenseContent}>
          Date and Time: {curr.date.toLocaleString()}
        </Text>
        <Text style={styles.expenseContent}>
          Description: {curr.expDescription}
        </Text>

        <Text style={styles.expenseContent}>
          Your Expense: {curr.expense}.Rs
        </Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Button title="Clear All" onPress={clearAll} color="red" />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, alignItems: 'center', marginVertical: 40}}>
          {/* showing income and expense data */}
          {renderingIncomeData}
          {renderingExpenseData}
        </View>
      </ScrollView>
      <Button
        title={`Balance: ${balance()} RS`}
        onPress={() => this.RBSheet.open()}
        color="black"
      />
      <CustomBottomSheet
        title={'Income: '}
        amountOne={calculateTotalIncome()}
        titleTwo={'Expense: '}
        amountTwo={calculateTotalExpense()}
        onClose={() => this.RBSheet.close()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  innerContainerTwo: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    height: '15%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContent: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: 'green',
  },
  expenseContent: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: 'red',
  },
});
export default TransactionScreen;
