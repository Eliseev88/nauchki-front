import React from 'react';
import cl from './Children.module.scss';
import Button from '../../UI/button/Button';
import Child from '../Child/Child';

export default function Children() {
  return (
    <section className={cl.children}>
        <div className="container">
            <div className={cl.children__wrapper}>
            <div className={cl.children__intro}>
                <h2 className={cl.children__title}>Мои дети</h2>
                <Button circle='true'>+</Button>
            </div>
            <div className={cl.children__box}>
                <Child name='Георгий' img='https://via.placeholder.com/150x150/FFF' birth='05.05.2018' url='' />
                <Child name='Георгий' img='https://via.placeholder.com/150x150/FFF' birth='05.05.2018' url='' />
                <Child name='Георгий' img='https://via.placeholder.com/150x150/FFF' birth='05.05.2018' url='' />
            </div>
            </div>
        </div>
    </section>
  )
}
