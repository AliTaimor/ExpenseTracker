import supabase from './Supabase';

export async function getTransactions() {
  let {data, error} = await supabase.from('data').select('*');
  if (error) {
    console.error(error);
    throw new error('Error loading data');
  }
  return data;
}

export async function addTransactions(formData) {
  
  const {data, error} = await supabase.from('data').insert(formData).select();

  
  if (error) {
    console.error(error);
    throw new error('Error posting data');
  }
}
