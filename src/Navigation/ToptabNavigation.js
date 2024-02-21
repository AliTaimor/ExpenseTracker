import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IncomeFormScreen from '../Screens/FormScreens/IncomeFormScreen';
import ExpenseFormScreen from '../Screens/FormScreens/ExpenseFormScreen';

const Tab = createMaterialTopTabNavigator();

function ToptabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Income" component={IncomeFormScreen} />
      <Tab.Screen name="Expense" component={ExpenseFormScreen} />
    </Tab.Navigator>
  );
}

export default ToptabNavigation;
