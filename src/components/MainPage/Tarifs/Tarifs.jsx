import React from 'react';
import cl from './Tarifs.module.scss';
import { ImCheckboxChecked as Checked, ImCheckboxUnchecked as UnChecked } from 'react-icons/im';
import { tarifsArr } from '../../../utils/constants';

export default function Tarifs() {
    return (
        <section className={cl.tarifs}>
            <div className="container">
                <h4 className={cl.tarifs__title}>Чтобы открыть доступ к дополнительной информации необходимо выбрать наиболее удобный для вас тариф</h4>
                <div className={cl.tarifs__grid}>
                    <div className={cl.tarifs__element}>
                        <h6 className={cl.tarifs__name}>Представленные тарифы</h6>
                    </div>
                    <div className={cl.tarifs__element}>
                        <div className={cl.tarifs__description}>Вес</div>
                    </div>
                    <div className={cl.tarifs__element}>
                        <div className={cl.tarifs__description}>Рост</div>
                    </div>
                    <div className={cl.tarifs__element}>
                        <div className={cl.tarifs__description}>Что должен уметь ваш ребенок</div>
                    </div>
                    <div className={cl.tarifs__element}>
                        <div className={cl.tarifs__description}>Оценка по зарубежным методикам</div>
                    </div>
                    <div className={cl.tarifs__element}></div>
                    {tarifsArr.map((el, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className={cl.tarifs__element}>
                                    <span className={cl.tarifs__name}>{el.name}</span>
                                </div>
                                <div className={cl.tarifs__element}>
                                    <div className={cl.tarifs__icon}>{el.weight ? <Checked /> : <UnChecked />}</div>
                                </div>
                                <div className={cl.tarifs__element}>
                                    <div className={cl.tarifs__icon}>{el.height ? <Checked /> : <UnChecked />}</div>
                                </div>
                                <div className={cl.tarifs__element}>
                                    <div className={cl.tarifs__icon}>{el.option1 ? <Checked /> : <UnChecked />}</div>
                                </div>
                                <div className={cl.tarifs__element}>
                                    <div className={cl.tarifs__icon}>{el.option2 ? <Checked /> : <UnChecked />}</div>
                                </div>
                                <div className={cl.tarifs__element}>
                                    <button className={cl.tarifs__price}>{el.price} руб.</button>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className={cl.adaptive}>
                    {tarifsArr.map((el, index) => {
                        return (
                            <div key={index} className={cl.adaptive__box}>
                                <div className={cl.adaptive__name}>{el.name}</div>
                                <div className={cl.adaptive__row}>
                                    <div className={cl.tarifs__description}>Вес</div>
                                    <div className={cl.tarifs__icon}>{el.weight ? <Checked /> : <UnChecked />}</div>
                                </div>
                                <div className={cl.adaptive__row}>
                                    <div className={cl.tarifs__description}>Рост</div>
                                    <div className={cl.tarifs__icon}>{el.height ? <Checked /> : <UnChecked />}</div>
                                </div>
                                <div className={cl.adaptive__row}>
                                    <div className={cl.tarifs__description}>Что должен уметь ваш ребенок</div>
                                    <div className={cl.tarifs__icon}>{el.option1 ? <Checked /> : <UnChecked />}</div>
                                </div>
                                <div className={cl.adaptive__row}>
                                    <div className={cl.tarifs__description}>Оценка по зарубежным методикам</div>
                                    <div className={cl.tarifs__icon}>{el.option2 ? <Checked /> : <UnChecked />}</div>
                                </div>
                                <button className={`${cl.tarifs__price} ${cl.adaptive__price}`}>{el.price} руб.</button>
                            </div>
                        )
                    })}
                </div>
                <h5 className={[cl.tarifs__title, cl.tarifs__title__descr]}>Указана стоимость в месяц. Ежемесячная оплата будет происходить до отмены покупателем подписки. Отмену можно произвести в любой момент.</h5>
            </div>
        </section>
    )
}

