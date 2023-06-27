// import React, { useEffect, useState } from 'react'
// import axios from 'axios'


// const initialState = {identifier:"",password:""}
export const Login = () => {
    // const [user,setUser] = useState(initialState);
    // const putUser=({target})=>{
    //     setUser({...user,[target.name]:target.value})
    //     // console.log(user)
    // }
    // const handlLogin=async(e)=>{
    //     e.preventDefault();
    //     try{
    //         if(user.identifier && user.password){
    //             const res = await axios.post(process.env.REACT_APP_API_URL+"/auth/local",user)
    //             console.log(res)
    //             // console.log('Bearer ' + res.data.jwt)
    //             const ress = await axios.get(process.env.REACT_APP_API_URL+"/prducts",{
    //                 headers:{
    //                     Authorization:'Bearer ' + res.data.jwt
    //                 }
    //             })
    //             console.log(ress);
    //         } 
    //     }catch(e){
    //         console.log(e)
    //     }
    // }
  return (
    <>
        {/* <form onSubmit={handlLogin}>
            <input type="text" placeholder='enter usename or email' name='identifier'  onChange={putUser}/>
            <input type="password" placeholder='enter your password' name='password'  onChange={putUser}/>
            <input type="submit" value="Login" />
        </form> */}
        <div>Login page</div>
    </>
  )
}
