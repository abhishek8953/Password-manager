import { useEffect } from "react"
import authStore from "../stores/authStore";
import {Navigate} from 'react-router-dom'

export default function LogoutPage(){
 const store=authStore();
    useEffect(()=>{
   store.logout();
    
    },[]);
    return (
     <Navigate to='/landing'/>
    
    )
}