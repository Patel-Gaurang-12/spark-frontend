import { Outlet } from 'react-router-dom';
import { LoginSignup } from './LoginSignup';

const useAuth = () => {
    sessionStorage.setItem("id", "authToken")
    var id = sessionStorage.getItem('id')
    if (id) {
        return true;
    }
    return false;
}

export const Auth = () => {
    return useAuth() ? <Outlet /> : <LoginSignup />
}
