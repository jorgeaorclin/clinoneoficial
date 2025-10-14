import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Adiciona verificações para garantir que as variáveis de ambiente estão definidas
if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL não está definida nas variáveis de ambiente. Verifique seu arquivo .env.');
}
if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY não está definida nas variáveis de ambiente. Verifique seu arquivo .env.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);