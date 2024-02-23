import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
const MainContext = createContext();

const apiUrl = 'http://192.168.10.18:3000';

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

  const totalBalance = totalIncome - totalExpense;

  useEffect(() => {
    async function fetchingIncome() {
      dispatch({type: 'loading'});
      try {
        const response = await fetch(`${apiUrl}/data`);
        const data = await response.json();
        dispatch({type: 'allData', payload: data});
      } catch (err) {
        console.error(err.message);
      } finally {
        dispatch({type: 'datarecieved'});
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
      dispatch({type: 'postingData', payload: data});
    } catch (err) {
      console.error(err.message);
    }
  }
  async function editData(editedFormData) {
    if (!editedFormData) return;
    try {
      const response = await fetch(`${apiUrl}/data/${editedFormData.id}`, {
        method: 'PATCH',
        body: JSON.stringify(editedFormData),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        const updatedData = allData.map(currElem => {
          if (currElem.id === editedFormData.id) {
            return {
              ...currElem,
              amount: editedFormData.amount,
              createdAt: editedFormData.dateTimeEvent,
              description: editedFormData.description,
            };
          }
          return currElem;
        });
        dispatch({type: 'edit', payload: updatedData});
      } else {
        console.error('Failed to update data on the server');
      }
    } catch (error) {
      console.error('Error while updating data on the server:', error.message);
    }
  }

  async function deleteTransactions(id) {
    await fetch(`${apiUrl}/data/${id}`, {
      method: 'DELETE',
    });
    const updatedData = allData.filter(currElem => id !== currElem.id);
    dispatch({type: 'allData', payload: updatedData});
  }
  async function clearAllTransactions() {
    await fetch(`${apiUrl}/myExpense/myIncome`, {
      method: 'DELETE',
    });
    dispatch({type: 'clearAll'});
  }

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
