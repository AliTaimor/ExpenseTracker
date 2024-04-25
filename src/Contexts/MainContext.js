import {getData} from '../Services/apiData';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
const MainContext = createContext();

const formattedDate = createdAt => {
  return createdAt.toLocaleString();
};

const initialState = {
  income: 0,
  expense: 0,
  description: '',
  createdAt: new Date().toISOString(),
  isLoading: false,
  allData: [],
  isNotificationIncome: false,
  isNotificationExpense: false,
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'addincomeData':
      return {
        ...state,
        income: action.payload.amount,
        description: action.payload.description,
        createdAt: action.payload.createdAt,
      };

    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'datarecieved':
      return {
        ...state,
        isLoading: false,
      };

    case 'allData':
      return {
        ...state,
        allData: action.payload,
      };
    case 'postingData':
      return {
        ...state,
        allData: [...state.allData, action.payload],
      };
    case 'clearAll':
      return {
        ...state,
        allData: [],
      };
    case 'notification':
      return {
        ...state,
        isNotificationIncome: action.payload.notify,
        message: action.payload.message,
      };
    case 'expNotification':
      return {
        ...state,
        isNotificationExpense: action.payload.notify,
        message: action.payload.message,
      };
    case 'edit':
      return {...state, allData: action.payload};

    default:
      throw new Error('Invalid action type ');
  }
}

function MainProvider({children}) {
  const [
    {
      income,
      expense,
      balance,
      description,
      createdAt,
      isLoading,
      allData,
      isNotificationIncome,
      isNotificationExpense,
      message,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // derived states
  const totalIncome = allData
    .filter(currElem => currElem.type === 'Income')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  const totalExpense = allData
    .filter(currElem => currElem.type === 'Expense')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  // const totalBalance = totalIncome - totalExpense;
  const totalBalance = 0;

  useEffect(() => {
    async function fetchData() {
      getData().then(data => console.log(data));
      console.log(mydata);
    }
    fetchData();
  }, []);

  async function postingData(formData) {
    if (!formData) return;
  }
  async function editData(editedFormData) {
    if (!editedFormData) return;
  }

  async function deleteTransactions(id) {}
  async function clearAllTransactions() {}

  return (
    <MainContext.Provider
      value={{
        income,
        expense,
        balance,
        description,
        createdAt,
        dispatch,
        isDatePickerVisible,
        setDatePickerVisibility,
        formattedDate,
        allData,
        isLoading,
        totalIncome,
        postingData,
        totalExpense,
        totalBalance,
        deleteTransactions,
        clearAllTransactions,
        isNotificationIncome,
        isNotificationExpense,
        editData,
        message,
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
