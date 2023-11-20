import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const UserContext = createContext()

export const UserInfoProvider = ({children}) => {
    const [userInfo,setUserInfo] = useState({
        id:"",
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        phone_number:"",
        secret_key:"",
    });
    const [users,setUsers] = useState([])

    useEffect(()=>{
        const getProducts = async () => {
            try {
                const res = await axios.get("/api/registration")
                setUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        getProducts();
    },[])
    
    const values = {
        userInfo,
        setUserInfo,
        users
      };

    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}