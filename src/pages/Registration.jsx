import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { selectIsAuth } from '../store/user/selectors'
import RegistrationComponent from '../components/Registration/Registration';

export default function Registration() {
    const auth = useSelector(selectIsAuth);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        auth && navigate(from, { replace: true })
    }, [])

    return (
        <main className="content">
            <RegistrationComponent />
        </main>
    );
}
