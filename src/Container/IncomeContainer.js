import {useState} from 'react';
import {IncomeScreen} from '../Screens';

function IncomeContainer({handleChange, handleChangeTwo, navigation}) {
  const [isIncome, setIsIncome] = useState(true);
  const handleIsIncomePress = () => setIsIncome(true);
  const handleIsExpensePress = () => setIsIncome(false);
  //making the state for adding the income
  const [amount, setAmount] = useState('');
  //making the state for adding expense
  const [addExpense, setAddExpense] = useState('');

  return (
    <IncomeScreen
      isIncome={isIncome}
      handleIsExpensePress={handleIsExpensePress}
      handleIsIncomePress={handleIsIncomePress}
      // sending income props
      amount={amount}
      setAmount={setAmount}
      handleChange={handleChange}
      //sending expense props
      addExpense={addExpense}
      setAddExpense={setAddExpense}
      handleChangeTwo={handleChangeTwo}
    />
  );
}

export default IncomeContainer;
