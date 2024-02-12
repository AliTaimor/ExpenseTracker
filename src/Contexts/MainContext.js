import {createContext, useContext, useState, useEffect} from 'react';
const MainContext = createContext();

const apiUrl = 'http://192.168.10.26:3000';

function MainProvider({children}) {
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
  const [allData, setAllData] = useState([]);
  // for searching the transactions
  // const [query, setQuery] = useState();
  const [expenseNotification, setExpenseNotification] = useState(false);
  const [incomeNotification, setIncomeNotification] = useState(false);

  // derived states
  const totalIncome = allData
    .filter(currElem => currElem.type === 'Income')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  const totalExpense = allData
    .filter(currElem => currElem.type === 'Expense')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  useEffect(() => {
    async function fetchingIncome() {
      try {
        const response = await fetch(`${apiUrl}/data`);
        const data = await response.json();
        setAllData(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchingIncome();
  }, []);

  async function postingData(formData) {
    if (!formData) return;
    try {
      const response = await fetch(`${apiUrl}/data`, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setAllData(currData => [...currData, data]);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function deleteTransactions(id) {
    await fetch(`${apiUrl}/data/${id}`, {
      method: 'DELETE',
    });
    setAllData(currData => currData.filter(currElem => id !== currElem.id));
  }
  async function clearAllTransactions() {
    await fetch(`${apiUrl}/myExpense/myIncome`, {
      method: 'DELETE',
    });
    setAllData([]);
  }

  return (
    <MainContext.Provider
      value={{
        addIncome,
        setAddIncome,
        addExpense,
        setAddExpense,
        addDescription,
        setAddDescription,
        selectedDate,
        setSelectedDate,
        isDatePickerVisible,
        setDatePickerVisibility,
        addExpDescription,
        setAddExpDescription,
        allData,
        setAllData,
        expenseNotification,
        setExpenseNotification,
        incomeNotification,
        setIncomeNotification,
        postingData,
        totalIncome,
        totalExpense,
        totalBalance,
        deleteTransactions,
        clearAllTransactions,
        
      }}>
      {children}
    </MainContext.Provider>
  );
}

function useMainContext() {
  const context = useContext(MainContext);
  return context;
}

export {useMainContext, MainProvider};
