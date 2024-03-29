import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  IncomeContainer,
  HomeContainer,
  TransactionContainer,
  RegisterContainer,
} from '../Container';
import {MainProvider} from '../Contexts/MainContext';
import WelcomeContainer from '../Container/WelcomeAndLoginContainer/WelcomeContainer';
import LoginContainer from '../Container/WelcomeAndLoginContainer/LoginContainer';
import IncomeFormScreen from '../Screens/FormScreens/IncomeFormScreen';
import ExpenseFormScreen from '../Screens/FormScreens/ExpenseFormScreen';
import {FirebaseAppProvider} from '@react-native-firebase/app';

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    // <FirebaseAppProvider>
      <MainProvider>
        <NavigationContainer>
          <Stack.Navigator initialRoute="Home">
            {/* <Stack.Screen
            name="Welcome"
            component={WelcomeContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterContainer}
            options={{headerShown: false}}
          /> */}

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
          </Stack.Navigator>
        </NavigationContainer>
      </MainProvider>
    // </FirebaseAppProvider>
  );
}
export default Navigation;
