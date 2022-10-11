import React, { useEffect, useState } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import cl from './RecoveryPass.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecoveryPassData } from '../../store/recoveryPass/selectors';
import { getRecoveryPassThunk, setRecoveryPassData, setRecoveryPassError } from '../../store/recoveryPass/actions';
import { ErrorRequest } from '../UI/errorRequest/ErrorRequest';
import { useNavigate } from 'react-router-dom';

export default function RecoveryPass() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, error } = useSelector(selectRecoveryPassData);
    const [email, setEmail] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(getRecoveryPassThunk(email));
    }

    const handleInput = (event) => {
        dispatch(setRecoveryPassError(null))
        setEmail(event.target.value);
    }

    useEffect(() => {
        if (data?.request?.status === 200) {
            dispatch(setRecoveryPassData(null));
            navigate('/resetpass', {replace: true});
        }
    }, [data, navigate, dispatch]);

    return (
        <section className={cl.recovery}>
            <div className="container">
                <div className={cl.recovery__wrapper}>
                    <h1 className={cl.recovery__title}>Восстановление пароля</h1>
                    <form className={cl.recovery__form} onSubmit={handleSubmit}>
                        {
                            error?.response?.status === 403 &&
                            <ErrorRequest>
                                Почтовый адрес не зарегистрирован
                            </ErrorRequest>
                        }
                        <Input
                            onChange={handleInput}
                            type='email'
                            autoFocus
                            required
                            placeholder='Введите вашу почту'
                        />
                        <Button>Сбросить пароль</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
