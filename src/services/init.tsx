import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.REACT_APP_SERVER_URL as string, process.env.REACT_APP_SERVICE_ROLE_KEY as string,{
    auth: {
        autoRefreshToken: false,
        persistSession: false
      }
})

const adminAuthClient = supabase.auth.admin

export default adminAuthClient
// console.log(supabase.auth.admin);
