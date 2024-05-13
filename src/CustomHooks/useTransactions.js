import {getTransactions} from '../Services/apiTransactions';
import {useQuery} from '@tanstack/react-query';

export function useTransactions() {
  const {data, isLoading, error} = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
  });
  const totalIncome = data
    ?.filter(currelement => currelement.type === 'income')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  const totalExpense = data
    ?.filter(currelement => currelement.type === 'expense')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  return {data, isLoading, error, totalBalance, totalExpense, totalIncome};
}
