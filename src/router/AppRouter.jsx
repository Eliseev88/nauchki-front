import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, } from 'react-router-dom';
import Child from '../pages/Child';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import RecoveryPass from '../pages/RecoveryPass';
import Registration from '../pages/Registration';
import ResetPass from '../pages/ResetPass';
import { selectIsAuth } from '../store/user/selectors';
import { PrivateRoute } from './PrivateRoute';

export default function AppRouter() {

    const authed = useSelector(selectIsAuth);

    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/profile' element={<PrivateRoute authed={authed} />} >
                <Route path='' element={<Profile />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/recoverypass' element={<RecoveryPass />} />
            <Route path='/resetpass' element={<ResetPass />} />
            <Route path='/children/:id' element={<PrivateRoute authed={authed} />} >
                <Route path='' element={<Child />} />
            </Route>
        </Routes>
    )
}
