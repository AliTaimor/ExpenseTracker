import React from 'react';
import {HomeScreen} from '../Screens';
import {useNavigation} from '@react-navigation/native';

function HomeContainer({add, addTwo, navigation}) {
  // const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('income');
  };
  const handleNavigateReport = () => {
    navigation.navigate('report');
  };
  return (
    <HomeScreen
      handleNavigate={handleNavigate}
      handleNavigateReport={handleNavigateReport}
      // sent the state add prop as a prop to the home screen
      add={add}
      addTwo={addTwo}
    />
  );
}
export default HomeContainer;
