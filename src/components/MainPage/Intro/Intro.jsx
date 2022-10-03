import React from 'react'
import cl from './Intro.module.scss';
import image from "../../../assets/images/main_page/Family Values-Family_2_1.png";

export default function Intro() {
    return (
        <section className={cl.intro}>
            <div className="container">
                <div className={cl.intro__wrapper}>
                    <div className={`${cl.intro__column} ${cl.intro__column__one}`}>
                        <div className={`${cl.intro__question} ${cl.intro__question__third}`}>?</div>
                        <div className={cl.intro__information}>
                            Здесь собрана вся научная информация о стандартах
                            и нормах развития детей
                            до 2 лет
                        </div>
                        <div className={cl.intro__box}>
                            <img src={image} alt="family" className={cl.intro__image} />
                            <div className={cl.intro__hidden_content}>
                                <div className={`hidden ${cl.intro__element} ${cl.intro__element__three} ${cl.fix_three}`}>Своевременно ли развивается моя дочь?</div>
                                <div className={`hidden ${cl.intro__element} ${cl.intro__element__four} ${cl.fix_four}`}>Что должен уметь ребенок в 4 месяца?</div>
                                <div className={`hidden ${cl.intro__element} ${cl.intro__element__five} ${cl.fix_five}`}>Пора ли ребенку сидеть?</div>
                            </div>
                            <div className={`hidden ${cl.intro__question} ${cl.intro__question__first} ${cl.question_fix}`}>?</div>
                        </div>
                    </div>
                    <div className={`${cl.intro__column} ${cl.intro__column__two}`}>
                        <div className={`${cl.intro__question} ${cl.intro__question__first}`}>?</div>
                        <div className={`${cl.intro__question} ${cl.intro__question__second}`}>?</div>
                        <div className={cl.intro__block}>
                            <div className={`${cl.intro__element} ${cl.intro__element__one}`}>Какой должен быть вес у девочки в 3 недели?</div>
                            <div className={`${cl.intro__element} ${cl.intro__element__two}`}>У подружки сын выше моего, стоит ли переживать?</div>
                            <div className={`${cl.intro__element} ${cl.intro__element__three}`}>Своевременно ли развивается моя дочь?</div>
                            <div className={`${cl.intro__element} ${cl.intro__element__four}`}>Что должен уметь ребенок в 4 месяца?</div>
                            <div className={`${cl.intro__element} ${cl.intro__element__five}`}>Пора ли ребенку сидеть?</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
