import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {
  IncomeContainer,
  HomeContainer,
  TransactionContainer,
  RegisterContainer,
  SettingsContainer,
} from '../Container';

import {
  WelcomeContainer,
  LoginContainer,
  CalendarContainer,
} from '../Container';
import {IncomeFormScreen, ExpenseFormScreen} from '../Screens';
import Drawer from '../Components/Drawer';
import {MainProvider} from '../Contexts/MainContext';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {ToastProvider} from 'react-native-toast-notifications';
const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();
function Navigation() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider dangerColor="red">
        <MainProvider>
          <NavigationContainer>
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
              <Stack.Screen
                name="Settings"
                component={SettingsContainer}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </MainProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}
export default Navigation;
