import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomBottomSheet from '../../Components/CustomBottomSheet';
import {BackIcon, DeleteIcon} from '../../Assets/Icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EditIcon from '../../Assets/Icons/EditIcon';
import {useTransactions} from '../../CustomHooks/useTransactions';
import EachTransactions from './EachTransactions';
import HeaderComponent from '../../Components/HeaderComponent';

function TransactionScreen({navigation, handleNavigateBack}) {
  const {data, isLoading, totalBalance, totalExpense, totalIncome} =
    useTransactions();
  //deleting all data
  const clearAll = () => {};

  const deleteTransaction = index => {};

  const handleEdit = index => {
    if (!index) return;

    if (index.type === 'income') {
      navigation.navigate('IncomeFormScreen', {index: index});
    } else {
      navigation.navigate('ExpenseFormScreen', {index: index});
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon />
          </TouchableOpacity>
        }></HeaderComponent>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, alignItems: 'center', marginVertical: hp('2%')}}>
          {/* showing income and expense data */}
          {data.map(transaction => (
            <EachTransactions transaction={transaction} key={transaction.id} />
          ))}
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
  textDeleteContainer: {
    flexDirection: 'row',
    gap: wp('5%'),
  },
  editDeleteIconView: {
    flexDirection: 'row',
    marginTop: hp('1%'),
    gap: wp('2%'),
  },
  innerContainerTwo: {
    marginVertical: hp('1%'),
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: wp('5%'),
    width: wp('90%'),
    height: hp('14%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContent: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    color: 'green',
  },
  expenseContent: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    color: 'red',
  },
});

export default TransactionScreen;
