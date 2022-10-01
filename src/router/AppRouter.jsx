import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import { PrivateRoute } from './PrivateRoute';

export default function AppRouter() {

    const authed = true;

    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/profile' element={<PrivateRoute authed={authed} />} >
                <Route path='' element={<Profile />} />
            </Route>
            <Route path='/login' element={<div className='content'>Login</div>} />
        </Routes>
    )
}
