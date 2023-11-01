import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {IncomeContainer, HomeContainer, ReportContainer} from '../Container';

const Stack = createNativeStackNavigator();
function Navigation() {
  // setting and exporting the income data through states and passing through the navigation
  const [add, setAdd] = useState(0);
  const handleChange = newAmount => {
    setAdd(newAmount);
  };
  // setting and exporting the expense data through states and passing through the navigation
  const [addTwo, setAddTwo] = useState(0);
  const handleChangeTwo = newAmountTwo => {
    setAddTwo(newAmountTwo);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Home">
        <Stack.Screen
          name="Home"
          component={({navigation}) => (
            <HomeContainer navigation={navigation} add={add} addTwo={addTwo} />
          )}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="income"
          component={({navigation}) => (
            <IncomeContainer
              navigation={navigation}
              handleChange={handleChange}
              handleChangeTwo={handleChangeTwo}
            />
          )}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="report"
          component={({navigation}) => (
            <ReportContainer
              navigation={navigation}
              add={add}
              addTwo={addTwo}
            />
          )}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
