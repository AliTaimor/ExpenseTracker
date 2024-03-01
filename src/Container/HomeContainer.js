import React, {useState} from 'react';
import {HomeScreen} from '../Screens';

function HomeContainer({navigation}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavigate = () => {
    navigation.navigate('income');
  };
  const handleNavigateTransactions = () => {
    navigation.navigate('transactions');
  };

  const handleNavigateHome = () => {
    navigation.navigate('Home');
  };

  const handleNavigateCalendar = () => {
    navigation.navigate('Calendar');
  };

  return (
    <HomeScreen
      handleNavigate={handleNavigate}
      handleNavigateTransactions={handleNavigateTransactions}
      handleNavigateHome={handleNavigateHome}
      handleNavigateCalendar={handleNavigateCalendar}
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
    />
  );
}
export default HomeContainer;
