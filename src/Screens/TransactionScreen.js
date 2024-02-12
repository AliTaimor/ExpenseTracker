import {useMainContext} from '../Contexts/MainContext';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  // TextInput,
} from 'react-native';
import CustomBottomSheet from '../Components/CustomBottomSheet';
import {DeleteIcon} from '../Assets/Icons';

function TransactionScreen() {
  const {
    allData,
    deleteTransactions,
    clearAllTransactions,
    totalIncome,
    totalExpense,
    totalBalance,
  } = useMainContext();

  //deleting all data
  const clearAll = () => {
    // setAllData([]);
    clearAllTransactions();
  };

  const deleteTransaction = index => {
    deleteTransactions(index);
  };

  // const handleSearch = () => {
  //   const searchData = allData.filter(item =>
  //     item.description.toLowerCase().includes(query.toLowerCase()),
  //   );
  //   setQuery(searchData);
  // };

  const renderingIncomeData = allData.map((curr, index) =>
    curr.type == 'Income' ? (
      <View key={index} style={styles.innerContainerTwo}>
        <View style={styles.incomeItem}>
          <Text style={styles.textContent}>{curr.type}</Text>

          <Text style={styles.textContent}>
            Date and Time: {curr.createdAt.toLocaleString()}
          </Text>
          <Text style={styles.textContent}>
            Description: {curr.description}
          </Text>

          <Text style={styles.textContent}>Your Income: {curr.amount}.Rs</Text>
        </View>
        <TouchableOpacity
          onPress={() => deleteTransaction(curr.id)}
          acitiveOpacity={0.8}>
          <DeleteIcon height={20} width={20} color={'red'} />
        </TouchableOpacity>
      </View>
    ) : (
      <View key={index} style={styles.innerContainerTwo}>
        <View style={styles.expenseItem}>
          <Text style={styles.expenseContent}>{curr.type}</Text>

          <Text style={styles.expenseContent}>
            Date and Time: {curr.createdAt.toLocaleString()}
          </Text>
          <Text style={styles.expenseContent}>
            Description: {curr.description}
          </Text>

          <Text style={styles.expenseContent}>
            Your Expense: {curr.amount}.Rs
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => deleteTransaction(curr.id)}
          acitiveOpacity={0.8}>
          <DeleteIcon height={20} width={20} color={'red'} />
        </TouchableOpacity>
      </View>
    ),
  );

  return (
    <View style={styles.container}>
      <Button title="Clear All" onPress={clearAll} color="red" />
      {/* <TextInput
        placeholder="Search"
        // value={query}
        // onChangeText={handleSearch}
        style={{
          borderWidth: 1,
          borderRadius: 20,
          marginHorizontal: 10,
          marginTop: 10,
          backgroundColor: 'white',
        }}
      /> */}

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, alignItems: 'center', marginVertical: 40}}>
          {/* showing income and expense data */}
          {renderingIncomeData}
          {/* {renderingExpenseData} */}
        </View>
      </ScrollView>
      <Button
        title={`Balance: ${totalBalance} RS`}
        onPress={() => this.RBSheet.open()}
        color="black"
      />
      <CustomBottomSheet
        title={'Income: '}
        amountOne={totalIncome}
        titleTwo={'Expense: '}
        amountTwo={totalExpense}
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
