import React from "react";
import classes from './HomeScreen.module.scss'
import { Header } from "../../components/Header/Header";
import sauna from '../../img/sauna.svg'

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
                                <p className={classes.home__about__box__item_title}> Комфорт</p>  
                                <p className={classes.home__about__box__item_descr}> Мы оборудовали домики всем необходимым, чтобы вам было удобно </p>
                            </div> 
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item_title}> Комфорт</p>  
                                <p className={classes.home__about__box__item_descr}> Мы оборудовали домики всем необходимым, чтобы вам было удобно </p>
                            </div>
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item_title}> Комфорт</p>  
                                <p className={classes.home__about__box__item_descr}> Мы оборудовали домики всем необходимым, чтобы вам было удобно </p>
                            </div>
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item_title}> Комфорт</p>  
                                <p className={classes.home__about__box__item_descr}> Мы оборудовали домики всем необходимым, чтобы вам было удобно </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.home__abouthome}>
                    <div className="g-container" >
                     <div className={classes.home__abouthome__wrapper}>
                        <div className={classes.home__abouthome__wrapper__img}> 

                        </div>
                        <div className={classes.home__abouthome__wrapper__block}>
                            <p className={classes.home__abouthome__wrapper__block_title}>О Доме</p>
                           
                            <div className={classes.home__abouthome__wrapper__block__test} >
                               <div className={classes.home__abouthome__wrapper__block__test__dscr} > 
                                   <div className={classes.home__abouthome__wrapper__block__test__dscr__box}> 
                                        <img src={sauna} className={classes.home__abouthome__wrapper__block__test__dscr__box_img} alt='sauna'/>
                                        <p>Мы оборудовали домики </p>
                                    </div> 
                                    <div className={classes.home__abouthome__wrapper__block__test__dscr__box2}> 
                                    <img src={sauna} className={classes.home__abouthome__wrapper__block__test__dscr__box_img2} alt='sauna'/>
                                        <p>Мы оборудовали домики </p>
                                    </div> 
                                    
                               </div>
                               <div className={classes.home__abouthome__wrapper__block__test__dscr} > 
                                   <div className={classes.home__abouthome__wrapper__block__test__dscr__box}> 
                                   <img src={sauna} className={classes.home__abouthome__wrapper__block__test__dscr__box_img} alt='sauna'/>
                                        <p>Мы оборудовали домики </p>
                                    </div> 
                                    <div className={classes.home__abouthome__wrapper__block__test__dscr__box2}> 
                                    <img src={sauna} className={classes.home__abouthome__wrapper__block__test__dscr__box_img} alt='sauna'/>
                                        <p>Мы оборудовали домики </p>
                                    </div> 
                               </div>
                               
                            </div>
                           
                        <p className={classes.home__abouthome__wrapper__block_price}>200 рублей/сутки</p>
                            
                        </div>
                        
                            
                     </div>
                 </div>

                 </section>
               
            </div>
        </div>
    )
}