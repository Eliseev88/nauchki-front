import React from 'react';
import cl from './About.module.scss';

export default function About() {
    return (
        <section className={cl.about}>
            <div className="container">
                <div className={cl.about__grid}>
                    <div className={cl.about__element}>
                        <div className={cl.about__number}>1</div>
                        <div className={cl.about__text}>Знакомьтесь с важной информацией о развитии вашего малыша</div>
                    </div>
                    <div className={cl.about__element}>
                        <div className={cl.about__number}>2</div>
                        <div className={cl.about__text}>Делитесь новыми впечатлениями со своими родными и близкими, чтобы они были в курсе всех событий!</div>
                    </div>
                    <div className={cl.about__element}>
                        <div className={cl.about__number}>3</div>
                        <div className={cl.about__text}>Сохраните эти воспоминания на долгую память!</div>
                    </div>
                    <div className={cl.about__element}>
                        <div className={cl.about__number}>4</div>
                        <div className={cl.about__text}>Читайте полезные статьи посвященные важным темам в развитии детей</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
