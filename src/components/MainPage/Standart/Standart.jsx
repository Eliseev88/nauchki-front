import React from 'react';
import { NavLink } from 'react-router-dom';
import { standartsStages } from '../../../utils/constants';
import './standart.scss';
import padlock from '../../../assets/images/main_page/iconPadlock.svg';
import Level from '../../UI/level/Level';

export default function Standart() {
    return (
        <div className="container standart">
            <div className="standart__content">
                <h3 className="standart__title">Стандарты и нормы развития новорожденного ребенка</h3>
                <div className="standart__data">
                    <div className="standart__data-items">
                        <div className="standart__data-title">
                            <h4>Вес (кг)</h4>
                        </div>

                        <div className="standart__data-levels">
                            {Object.entries(standartsStages).map((el, index) => {
                                if (index <= 6) {
                                    return <Level
                                        key={el[0] + index}
                                        text={el[0] === 'medianWeight' ? 'Медиана' : `Ур ${el[0][el[0].length - 1]}`}
                                        color={el[0] === 'medianWeight' ? 'mediana' : `${el[0][el[0].length - 1]}`}
                                        number={el[1]}
                                    />
                                }
                                return '';
                            })}
                        </div>
                    </div>

                    <div className="standart__data-items">
                        <div className="standart__data-title">
                            <h4>Рост (см)</h4>
                        </div>

                        <div className="standart__data-levels">
                            {Object.entries(standartsStages).map((el, index) => {
                                if (index > 6 && el[0] !== 'skills') {
                                    return <Level
                                        key={el[0] + index}
                                        text={el[0] === 'medianHeight' ? 'Медиана' : `Ур ${el[0][el[0].length - 1]}`}
                                        color={el[0] === 'medianHeight' ? 'mediana' : `${el[0][el[0].length - 1]}`}
                                        number={el[1]}
                                    />
                                }
                                return '';
                            })}
                        </div>
                    </div>
                    <div className="standart__data-items">
                        <div className="standart__data-title">
                            <h5> Что должен уметь ваш ребенок</h5>
                        </div>

                        <div className="standart__data-skills ">
                            {standartsStages?.skills}
                        </div >
                    </div>

                    <div className="standart__data-items media">
                        <div className="standart__data-title standart__data-title--media">
                            <h5>Оценка по шкале развития ГНОМ</h5>
                        </div>

                        <NavLink to="/" className="standart__data-lock standart__data-lock--media">
                            <img src={padlock} alt="padlock" />
                        </NavLink>
                    </div>

                    <div className="standart__data-items media">
                        <div className="standart__data-title standart__data-title--media">
                            <h5>Оценка по зарубежным методикам</h5>
                        </div>

                        <NavLink to="/" className="standart__data-lock standart__data-lock--media">
                            <img src={padlock} alt="padlock" />
                        </NavLink>
                    </div>
                </div>
            </div>
            <NavLink className="standart_profile" to="/personalArea">
                Посмотреть информацию о своем ребенке
            </NavLink>
            <p className="standart__notice">
                Представленная информация сформирована на основе открытых источников , не является
                диагнозом, планом лечения или развития. Носит исключительно ознакомительный харктер для
                подготовки к осмотру ребёнка профильными медицинскими специалистами.
            </p>
        </div>
    )
}
