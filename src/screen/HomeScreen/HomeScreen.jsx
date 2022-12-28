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
                        </div>
                   </div>
                </section>
                <section className={classes.home__about}>
                    <div className="g-container">
                        <div className={classes.home__about__block}>
                                <div className={classes.home__about__block__p1}> 
                                    <div className={classes.home__about__block__p1__box}>
                                        <p>Комфорт</p>
                                        <p className={classes.home__about__block__p5}>Мы оборудовали домики всем неообходимым,чтобы вам было удобно</p>
                                    </div>
                                </div>
                            <div className={classes.home__about__block__p2}> 
                            <div className={classes.home__about__block__p2__box2}>
                                         <p>Комфорт</p>
                                        <p className={classes.home__about__block__p6}>Мы оборудовали домики всем неообходимым,чтобы вам было удобно </p>
                                     </div>
                             </div>
                            <div className={classes.home__about__block__p3}>
                               <div className={classes.home__about__block__p3__box3}>
                                     <p>Комфорт</p>
                                     <p className={classes.home__about__block__p7}>Мы оборудовали домики всем неообходимым,чтобы вам было удобно </p>
                                </div> 
                            </div>
                            <div className={classes.home__about__block__p4} >
                                <div className={classes.home__about__block__p4__box4}>
                                     <p>Комфорт</p>
                                     <p className={classes.home__about__block__p8}>Мы оборудовали домики всем неообходимым,чтобы вам было удобно</p>
                             </div>
                             </div>
                        </div>
                    </div>
                </section>
               
            </div>
        </div>
    )
}