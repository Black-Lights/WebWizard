import { createClient } from '@supabase/supabase-js';

export default ({ $config }, inject) => {
  const supabaseUrl = $config.SUPABASE_URL;
  const supabaseKey = $config.SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key are required.');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  inject('supabase', supabase);
};
