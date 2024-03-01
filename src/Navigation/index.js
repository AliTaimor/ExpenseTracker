import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {
  IncomeContainer,
  HomeContainer,
  TransactionContainer,
  RegisterContainer,
} from '../Container';

import {MainProvider} from '../Contexts/MainContext';
import {
  WelcomeContainer,
  LoginContainer,
  CalendarContainer,
} from '../Container';
import {IncomeFormScreen, ExpenseFormScreen} from '../Screens';
import Drawer from '../Components/Drawer';

const Stack = createNativeStackNavigator();

function Navigation() {
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = auth().currentUser;
      console.log(currentUser);
      setUserExists(!!currentUser); // !! converts value to boolean
    };

    checkUser();
  }, []);

  return (
    <MainProvider>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName={userExists ? 'Welcome' : 'Home'}> */}
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="income"
            component={IncomeContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="transactions"
            component={TransactionContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IncomeFormScreen"
            component={IncomeFormScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ExpenseFormScreen"
            component={ExpenseFormScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Calendar"
            component={CalendarContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
}
export default Navigation;
