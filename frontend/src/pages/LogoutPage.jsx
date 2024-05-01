import { useEffect } from "react"
import authStore from "../stores/authStore";
import { Navigate } from 'react-router-dom';
import notesStore from "../stores/notesStore"



export default function LogoutPage() {
    const store = authStore();
    const store2 = notesStore();
    useEffect(() => {
        store2.logoutremove();
        store.logout();

    }, []);
    return (
        <Navigate to='/landing' />

    )
}