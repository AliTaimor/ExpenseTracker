import React, {useState, useEffect} from 'react';
import WelcomeScreen from '../../Screens/WelcomeAndLoginScreens/WelcomeScreen';
import auth from '@react-native-firebase/auth';

function WelcomeContainer({navigation}) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);

    if (!user) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Home');
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // Unsubscribe when the component unmounts
  }, []);

  const handleNavigatetoLogin = () => {
    navigation.navigate('Login');
  };
  const handleNavigatetoRegister = () => {
    navigation.navigate('Register');
  };

  if (initializing) return null;

  return (
    <WelcomeScreen
      handleNavigatetoLogin={handleNavigatetoLogin}
      handleNavigatetoRegister={handleNavigatetoRegister}
      navigation={navigation}
    />
  );
}

export default WelcomeContainer;
