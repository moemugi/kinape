import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fnrmwyztffypghxujuwz.supabase.co";
const SUPABASE_PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZucm13eXp0ZmZ5cGdoeHVqdXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMDkzNTQsImV4cCI6MjA5Mzg4NTM1NH0.aRuGReWaEMsGzeN8dQqn38O-q-vb2KEqyD3J9uzylgM";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLIC_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);