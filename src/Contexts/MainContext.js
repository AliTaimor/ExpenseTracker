import {getData} from '../Services/apiTransactions';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
const MainContext = createContext();

function MainProvider({children}) {

  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
}

function useMainContext() {
  const context = useContext(MainContext);
  return context;
}

export {useMainContext, MainProvider};
