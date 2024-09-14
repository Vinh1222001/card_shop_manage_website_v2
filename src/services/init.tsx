import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.REACT_APP_SERVER_URL as string, 
  process.env.REACT_APP_SERVICE_ROLE_KEY as string,{
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

export const adminAuthClient = supabaseAdmin.auth.admin
// console.log(supabase.auth.admin);

export const supabaseUser = createClient(
  process.env.REACT_APP_SERVER_URL as string, 
  process.env.REACT_APP_SUPABASE_KEY as string
)

