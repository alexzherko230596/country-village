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
import leaf from '../../img/leaf.svg'
import { Map } from "../../components/Map/Map";
import BookPlace from "../../components/BookPlace/BookPlace";
import { Link } from "react-scroll";
import Footer from "../../components/Footer/Footer";
import Price from "../../components/Price/Price";

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
                            <Link 
                                className={classes.home__main__wrapper_button}
                                to="BlockBook"
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Забронировать
                            </Link>
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
                <section className={classes.home__abouthome} id="BlockAbout">
                    <img src={leaf} className={classes.home__abouthome_img} alt="Лист"/>
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
                                    <img src={sauna} className={classes.home__abouthome__wrapper__block__test__dscr__box_img} alt='sauna'/>
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
                            <p className={classes.home__abouthome__wrapper__block_price}></p>
                        </div>
                        </div>
                    </div>
                </section>

                <section className={classes.home__aboutHomeMore}>
                    <div className="g-container">
                        <div className={classes.home__aboutHomeMore__wrapper}>
                            <div className={classes.home__aboutHomeMore__wrapper__text}>
                                <p className={classes.home__aboutHomeMore__wrapper__text_title}>Усадьба располагается на хуторе, в деревне Янушки (Брестское    направление) 40 минут езды от кольцевой дороги в сторону г.п. Рубежевичи. 
                                    Дом теплый, отапливается круглосуточно электрокотлом с погодозависимой автоматикой.
                                    Домик  находится  в экологической чистой  зоне, свежий воздух, т.к. хутор расположен  в лесном массиве, состоящей в основном из сосновой хвои. Возле  усадьбы протекает чистейшая  река СУЛА  всего в 70-ти  метрах от дома , в которой водится рыба форель. В летний зной , что бы отдохнуть от жары необходимо, и даже нужно искупаться в этой замечательной речке. Летом она не глубокая  и поэтому принимать водные ванны  можно и детям.
                                    Здесь  царит тишина и спокойствие.  Все располагает к замечательному отдыху. Возле дома, а точнее к  бане (Баня отдельно стоящая, из соснового сруба 6х6) примыкает небольшое озерцо, где после бани можно окунуться зимой  в прорубь, а летом есть возможность половить и покормить рыбку. 
                                    Участок просторный, площадью 25 соток Дом площадью  65 м. кв. В усадьбе 2 комнаты. Внутренняя обстановка напоминает квартиру – студию: из небольшой прихожей попадаешь в просторную комнату с компактной кухонной зоной  Далее идет вторая небольшая комната. Сан. узел. оборудован всем необходимым: унитаз с подогревом сиденья  + биде. В доме имеется печь-камин, LCD телевизор (триколор), холодильник, микроволновая печь, полноценная кухня, предоставляется постельной белье, полотенца.
                                    Имеется мангал и угли для шашлыка. Дом очень теплый : обогревается паровым  электороотоплением посредством батарей, которые     проведены по всему дому с подогревом полов, имеется  печка  и  печь-камин. Подъездные пути хорошие: зимой чистят дорогу.
                                </p>
                            </div>
                            <img alt='house outside' className={classes.home__aboutHomeMore__wrapper_img} src={require('../../img/aboutHome2.jpg')}/>
                        </div>
                    </div>
                </section>
                <Price />
               <section className={classes.home__photoBlock} id="BlockPhoto">
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
               <Map />
               <BookPlace />
               <Footer />
            </div>
        </div>
    )
}