import React, {useState} from 'react';

import Navigation from './src/Navigation';
import { MainContext } from './src/Contexts/MainContext';
const App = () => {
  // setting and exporting the income data through states and passing through the navigation
  const [addIncome, setAddIncome] = useState(0);
  // setting and exporting the expense data through states and passing through the navigation
  const [addExpense, setAddExpense] = useState(0);
  //setting state for despription
  const [addDescription, setAddDescription] = useState('');
  //setting state for expense description
  const [addExpDescription, setAddExpDescription] = useState('');
  // date and time functionality
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
 // all data for income and expense 
  // const [allData, setAllData] = useState({income:[], expense:[] });

  const [allData, setAllData] = useState([]);

  return <MainContext.Provider value={{addIncome, setAddIncome, addExpense, setAddExpense, addDescription, setAddDescription, selectedDate, setSelectedDate, isDatePickerVisible, setDatePickerVisibility, addExpDescription, setAddExpDescription, allData, setAllData}}><Navigation/></MainContext.Provider>;


};


export default App;


