import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
const supabaseUrl = 'https://ynvgjvxngjmmtmqstbrk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludmdqdnhuZ2ptbXRtcXN0YnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MDAxNzAsImV4cCI6MjAyNjA3NjE3MH0.poi21nFl8ISuypyy9nLW-Qs6o4ffKO2-llW6k0PjN7E';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
