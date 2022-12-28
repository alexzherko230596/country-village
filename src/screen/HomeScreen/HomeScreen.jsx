import React from "react";
import classes from './HomeScreen.module.scss'
import { Header } from "../../components/Header/Header";

export const HomeScreen = () => {
    return(
        <div className={classes.home}>
            <div className="g-wrapperScreens">
                <Header />
                <section className={classes.home__main}>
                   <div className="g-container">
                        <div className={classes.home__main__wrapper}>
                            <h1 className={classes.home__main__wrapper_h1}>Проведите выходные на берегу живописного озера в деревне Янушки </h1>
                            <h2 className={classes.home__main__wrapper_h2}>Проведите выходные на берегу живописного озера в деревне Янушки </h2>
                            <button className={classes.home__main__wrapper_button}>Забронировать</button>
                        </div >
                   </div>
                </section>
                <section className={classes.home__about}>
                    <div className="g-container">  
                        <div className={classes.home__about__box}> 
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item__p}> комфорт</p>  
                                <p className={classes.home__about__box__item__p1}> Мы оборудовали домики всем необходимым, чтобы вам было удобно </p>
                            </div> 
                        
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item__p}> комфорт</p>  
                                <p className={classes.home__about__box__item__p1}> Мы оборудовали домики всем необходимым, чтобы вам было удобно </p>
                            </div>
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item__p}> комфорт</p>  
                                <p className={classes.home__about__box__item__p1}> Мы оборудовали домики всем необходимым, чтобы вам было удобно </p>
                            </div>
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item__p}> комфорт</p>  
                                <p className={classes.home__about__box__item__p1}> Мы оборудовали домики всем необходимым, чтобы вам было удобно </p>
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        </div>
    )
}