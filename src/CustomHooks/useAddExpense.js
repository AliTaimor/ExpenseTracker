import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addTransactions} from '../Services/apiTransactions';
import {useToast} from 'react-native-toast-notifications';
export function useAddExpense() {
  const queryClient = useQueryClient();
  const toast = useToast();
  const {mutate: addExpense, isSuccess} = useMutation({
    mutationFn: addTransactions,
    onSuccess: () => {
      toast.show('Added expense successfully', {
        type: 'success',
        placement: 'top',
        duration: 3000,
        offset: 30,
        animationType: 'zoom-in',
      });
      queryClient.invalidateQueries({queryKey: ['transactions']});
    },
  });
  return {
    addExpense,
    isSuccess,
  };
}
