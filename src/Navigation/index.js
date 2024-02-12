import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  IncomeContainer,
  HomeContainer,
  TransactionContainer,
} from '../Container';
import {MainProvider} from '../Contexts/MainContext';

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <MainProvider>
      <NavigationContainer>
        <Stack.Navigator initialRoute="Home">
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
