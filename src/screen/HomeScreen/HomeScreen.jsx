import React from "react";
import classes from './HomeScreen.module.scss'
import { Header } from "../../components/Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../img/aboutHome1.jpg'
import img7 from '../../img/aboutHome7.jpg'
import img8 from '../../img/aboutHome8.jpg'
import img9 from '../../img/aboutHome9.jpg'
import img12 from '../../img/aboutHome12.jpg'
import img13 from '../../img/aboutHome13.jpg'
import img14 from '../../img/aboutHome14.jpg'
import img15 from '../../img/aboutHome15.jpg'
import img16 from '../../img/aboutHome16.jpg'
import img17 from '../../img/aboutHome17.jpg'
import img18 from '../../img/aboutHome18.jpg'
import img19 from '../../img/aboutHome19.jpg'
import img20 from '../../img/aboutHouse20.jpg'
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
                        <img src={img20} alt="Избушка в Янушках первое фото"/>
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

               <section className={classes.home__photoBlock}>
                    <div className="g-container">
                        <div className={classes.home__photoBlock__wrapper}>
                            <Carousel className={classes.home__photoBlock__wrapper__slider}>
                                <div>
                                    <img src={img1} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img7} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img8} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img9} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img12} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img13} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img14} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img19} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img15} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img16} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img17} alt="Избушка в Янушках первое фото"/>
                                </div>
                                <div>
                                    <img src={img18} alt="Избушка в Янушках первое фото"/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
               </section>
            </div>
        </div>
    )
}