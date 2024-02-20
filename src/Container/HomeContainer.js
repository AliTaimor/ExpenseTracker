import React from 'react';
import {HomeScreen} from '../Screens';

function HomeContainer({navigation}) {
  const handleNavigate = () => {
    navigation.navigate('income');
  };
  const handleNavigateTransactions = () => {
    navigation.navigate('transactions');
  };
  return (
    <HomeScreen
      handleNavigate={handleNavigate}
      handleNavigateTransactions={handleNavigateTransactions}
    />
  );
}
export default HomeContainer;
