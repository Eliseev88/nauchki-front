import React, { useEffect, useRef, useState } from 'react';
import cl from './ResetPassword.module.scss';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import { useForm } from "react-hook-form";
import { getResetPassThunk, setResetPassData, setResetPassError } from '../../store/resetPass/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectResetPassData } from '../../store/resetPass/selectors';
import { Link } from 'react-router-dom';

export default function ResetPassword() {

    const dispatch = useDispatch();
    const { data, error } = useSelector(selectResetPassData);

    const [showFinishMessage, setShowFinishMessage] = useState(false);

    const password = useRef({});

    const { register, handleSubmit, watch, formState: { errors } } = useForm({});

    password.current = watch("password", "");

    const onSubmit = async ({ resetPasswordCode, password }) => {
        dispatch(getResetPassThunk(resetPasswordCode, password));
    }

    useEffect(() => {
        if (data?.data && data?.status === 200) {
            setShowFinishMessage(true);
            dispatch(setResetPassData(null));
        }
        if (!data?.data && data?.status === 200) dispatch(setResetPassError('Неверный проверочный код'));
    }, [data, dispatch])

    return (
        <section className={cl.reset}>
            <div className="container">
                <div className={cl.reset__wrapper}>
                    <h1 className={cl.reset__title}>
                        {showFinishMessage ? 'Пароль успешно сменен' : 'Код для восстановления пароля отправлен на почту'}
                    </h1>
                    {showFinishMessage && <Link to='/login' className={cl.reset__link}>Войти</Link>}
                    {!showFinishMessage &&
                        <form className={cl.reset__form} onSubmit={handleSubmit(onSubmit)}>
                            {error && <span className="error">{error}</span>}
                            <Input
                                name='resetPasswordCode'
                                type='number'
                                autoFocus
                                required
                                placeholder='Введите код с почты'
                                onFocus={() => dispatch(setResetPassError(null))}
                                {...register("resetPasswordCode",
                                    {
                                        required: true,
                                        valueAsNumber: true,

                                    })}
                            />
                            {errors.password && <span className='error'>{errors.password.message}</span>}
                            <Input
                                name='password'
                                type='password'
                                placeholder='Придумайте пароль'
                                {...register('password', {
                                    required: "Укажите пароль",
                                    minLength: {
                                        value: 8,
                                        message: "Пароль должен содержать не менее 8 символов"
                                    }
                                })}
                            />

                            {errors.password_repeat && <span className='error'>{errors.password_repeat.message}</span>}
                            <Input
                                name='password_repeat'
                                type='password'
                                placeholder='Повторите пароль'
                                {...register('password_repeat', {
                                    validate: value =>
                                        value === password.current || "Пароли не совпадают"
                                })}
                            />

                            <Button>Сменить пароль</Button>
                        </form>
                    }
                </div>
            </div>
        </section>
    )
}
