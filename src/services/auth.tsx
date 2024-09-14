import {adminAuthClient, supabaseUser} from "./init";

export const createAdminUser = async () =>{

  const { data, error } = await adminAuthClient.createUser({
      email: 'nguyentuanvinh1222@gmail.com',
      password: '120201Vinh',
      role: "super_admin",
      user_metadata: { 
        full_name: 'Tuan Vinh' 
      },
      email_confirm: true,
      
    })

    if (data) {
      console.log(data);
      
    }

    if (error) {
      console.log(data);
      
    }
}


export const signIn = async (form: {email: string, password: string}) =>{
  console.log(form);
  
  const {data, error} = await supabaseUser.auth.signInWithPassword({
    email: form.email,
    password: form.password
  })

  if(error){
    console.log(error);
    
  }

  // if (data) {
  //   window.location.href = "/"
  // }
}