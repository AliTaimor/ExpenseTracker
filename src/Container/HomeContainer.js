import React, {useState} from 'react';
import {HomeScreen} from '../Screens';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

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

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Failed to logout please try again');
      console.error(error);
    }
  };

  return (
    <HomeScreen
      handleNavigate={handleNavigate}
      handleNavigateTransactions={handleNavigateTransactions}
      handleNavigateHome={handleNavigateHome}
      handleNavigateCalendar={handleNavigateCalendar}
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      handleLogout={handleLogout}
    />
  );
}
export default HomeContainer;
