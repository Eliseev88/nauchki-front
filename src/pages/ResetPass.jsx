import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectIsAuth } from '../store/user/selectors';
import ResetPassword from '../components/ResetPassword/ResetPassword';

export default function ResetPass() {
    const auth = useSelector(selectIsAuth);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        auth && navigate(from, { replace: true })
    }, [auth, from, navigate]);

    return (
        <main className='content'>
            <ResetPassword />
        </main>
    )
}
