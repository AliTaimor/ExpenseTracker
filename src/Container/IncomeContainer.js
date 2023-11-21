import {useState} from 'react';
import {IncomeScreen} from '../Screens';

function IncomeContainer({navigation}) {
  const [isIncome, setIsIncome] = useState(true);
  const handleIsIncomePress = () => setIsIncome(true);
  const handleIsExpensePress = () => setIsIncome(false);


  return (
    <IncomeScreen
      isIncome={isIncome}
      handleIsExpensePress={handleIsExpensePress}
      handleIsIncomePress={handleIsIncomePress}
    />
  );
}

export default IncomeContainer;
