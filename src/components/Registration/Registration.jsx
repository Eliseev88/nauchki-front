import React, { useRef, useState } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import cl from './Registration.module.scss';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import { LoaderSvg } from '../UI/loader/LoaderSvg';
import { useForm } from "react-hook-form";
import { RegistrationAPI } from '../../API/authApi';

export default function Registration() {
    const [isLoading, setIsLoading] = useState(false);
    const [checkbox, setCheckbox] = useState(true);
    const [isEmailBusy, setIsEmailBusy] = useState(false);

    const password = useRef({});
    const title = useRef();
    const form = useRef();


    const { register, handleSubmit, watch, formState: { errors } } = useForm({});

    password.current = watch("password", "");

    const onSubmit = data => {
        setIsLoading(true);
        RegistrationAPI.registartion(
            data.email,
            data.password,
            data.username
        )
            .then((res) => {
                if (res.data && res.status === 200) {
                    title.current.innerHTML = 'Для завершения регистрации проверьте указанную вами почту'
                    form.current.style.display = 'none';
                } else if (!res.data && res.status === 200) {
                    setIsEmailBusy(true)
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setIsLoading(false);
    }
    
    return (
        <section className={cl.reg}>
            <div className="container">
                <div className={cl.reg__wrapper}>
                    <h1 ref={title} className={cl.reg__title}>Регистрация</h1>
                    <form ref={form} className={cl.reg__form} onSubmit={handleSubmit(onSubmit)}>

                        {errors.username && <span className='error'>Укажите имя пользователя</span>} 
                        <Input
                            name='username'
                            type='text'
                            placeholder='Ваше имя'
                            {...register("username", { required: true })}
                            autoFocus
                        />

                        {errors.email && <span className='error'>Укажите почту</span>}
                        {isEmailBusy && <span className='error'>Данный почтовый адрес уже зарегистрирован</span>}
                        <Input
                            name='email'
                            type='email'
                            placeholder='Ваша почта'
                            {...register("email", { required: true })}
                            onFocus={() => setIsEmailBusy(false)}
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

                        <Button disabled={!checkbox} type='submit'>{isLoading ? <LoaderSvg /> : 'Зарегистрироваться'}</Button>

                        <div className={cl.reg__checkbox}>
                            <input
                                onChange={() => setCheckbox(!checkbox)}
                                className={cl.check1}
                                type="checkbox"
                                id="check1"
                                checked={checkbox}
                            />
                            <label htmlFor="check1">Вы согласны на обработку данных?</label>
                        </div>
                    </form>

                    <Link to='/login' className={cl.reg__link}>Уже зарегистрированы?</Link>
                    <Social />
                </div>
            </div>
        </section>
    )
}
