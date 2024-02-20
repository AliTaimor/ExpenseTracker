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

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <MainProvider>
      <NavigationContainer>
        <Stack.Navigator initialRoute="Welcome">
          <Stack.Screen
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
        </Stack.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
}
export default Navigation;
