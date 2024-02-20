import React from 'react';
import WelcomeScreen from '../../Screens/WelcomeAndLoginScreens/WelcomeScreen';

export default function WelcomeContainer({navigation}) {
  const handleNavigatetoLogin = () => {
    navigation.navigate('Login');
  };
  const handleNavigatetoRegister = () => {
    navigation.navigate('Register');
  };
  return <WelcomeScreen handleNavigatetoLogin={handleNavigatetoLogin} handleNavigatetoRegister={handleNavigatetoRegister}/>;
}
