import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addTransactions} from '../Services/apiTransactions';
import {useToast} from 'react-native-toast-notifications';
export function useAddIncome() {
  const queryClient = useQueryClient();
  const toast = useToast();
  const {mutate: addIncome, isSuccess} = useMutation({
    mutationFn: addTransactions,
    onSuccess: () => {
      toast.show('Added income successfully', {
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
    addIncome,
    isSuccess,
  };
}
