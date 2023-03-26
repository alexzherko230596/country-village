import React from "react";
import classes from './HomeScreen.module.scss'
import { Header } from "../../components/Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../img/album1.jpg'
import img2 from '../../img/album2.jpg'
import img3 from '../../img/album3.jpg'
import img4 from '../../img/album4.jpg'
import img5 from '../../img/album5.jpg'
import img6 from '../../img/album6.jpg'
import img7 from '../../img/album7.jpg'
import img8 from '../../img/album8.jpg'
import img9 from '../../img/album9.jpg'
import img10 from '../../img/album10.jpg'
import img11 from '../../img/album11.jpg'
import img12 from '../../img/album12.jpg'
import img13 from '../../img/album13.jpg'
import img14 from '../../img/album14.jpg'
import img15 from '../../img/album15.jpg'
import img16 from '../../img/album16.jpg'
import img17 from '../../img/album17.jpg'
import img18 from '../../img/album18.jpg'
import img19 from '../../img/album19.jpg'
import img20 from '../../img/album20.jpg'
import img21 from '../../img/album21.jpg'
import img22 from '../../img/album22.jpg'
import img23 from '../../img/album23.jpg'
import img0 from '../../img/aboutHouse20.jpg'
import sauna from '../../img/sauna.svg'
import forest from '../../img/forest.svg'
import bed from '../../img/bed.svg'
import silent from '../../img/silent.svg'
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
                            <h1 className={classes.home__main__wrapper_h1}>Ваши незабываемые выходные на хуторе у живописной реки СУЛА в деревне Янушки</h1>
                            <h2 className={classes.home__main__wrapper_h2}>Проведите выходные на природе в объятиях леса и реки</h2>
                            <Link 
                                className={classes.home__main__wrapper_button}
                                to="BlockBook"
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Забронировать
                            </Link>
                            <p className={classes.home__main__wrapper_bel}>Калi ласка, запрашаем да нас, паважаныя госцi !!!</p>
                        </div >
                   </div>
                </section>
                <section className={classes.home__about}>
                    <div className="g-container">  
                        <div className={classes.home__about__box}> 
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item_title}>Расстояние</p>  
                                <p className={classes.home__about__box__item_descr}> Недалеко от  Минска   (58 км от МКАД)</p>
                            </div> 
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item_title}>Климат</p>  
                                <p className={classes.home__about__box__item_descr}>У нас всегда тепло: отопление с погодозависимой автоматикой</p>
                            </div>
                            <div className={classes.home__about__box__item}>
                                <p className={classes.home__about__box__item_title}>Река</p>  
                                <p className={classes.home__about__box__item_descr}>Одна из самых чистых рек Беларуси - река Сула - в 70 метрах от дома </p>
                            </div>
                            <div className={classes.home__about__box__item}>

                                <p className={classes.home__about__box__item_title}>Баня</p>  
                                <p className={classes.home__about__box__item_descr}>Русская баня из соснового сруба на дровах с настоящим мокрым паром  </p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.home__abouthome} id="BlockAbout">
                    <img src={leaf} className={classes.home__abouthome_img} alt="Лист"/>
                    <div className="g-container" >
                        <div className={classes.home__abouthome__wrapper}>
                        <div className={classes.home__abouthome__wrapper__img}> 
                        <img src={img0} alt="Избушка в Янушках первое фото"/>
                        </div>
                        <div className={classes.home__abouthome__wrapper__block}>
                            <p className={classes.home__abouthome__wrapper__block_title}>О Доме</p>
                            
                            <div className={classes.home__abouthome__wrapper__block__test} >
                                <div className={classes.home__abouthome__wrapper__block__test__dscr} > 
                                    <div className={classes.home__abouthome__wrapper__block__test__dscr__box}> 
                                        <img src={forest} className={classes.home__abouthome__wrapper__block__test__dscr__box_img} alt='sauna'/>
                                        <p>Хутор расположен в лесном массиве</p>
                                    </div> 
                                    <div className={classes.home__abouthome__wrapper__block__test__dscr__box2}> 
                                    <img src={sauna} className={classes.home__abouthome__wrapper__block__test__dscr__box_img} alt='sauna'/>
                                        <p>На территории баня и озеро</p>
                                    </div> 
                                </div>
                                <div className={classes.home__abouthome__wrapper__block__test__dscr} > 
                                    <div className={classes.home__abouthome__wrapper__block__test__dscr__box}> 
                                    <img src={bed} className={classes.home__abouthome__wrapper__block__test__dscr__box_img} alt='sauna'/>
                                        <p>6 спальных мест</p>
                                    </div> 
                                    <div className={classes.home__abouthome__wrapper__block__test__dscr__box2}> 
                                        <img src={silent} className={classes.home__abouthome__wrapper__block__test__dscr__box_img} alt='sauna'/>
                                        <p>Тишина и спокойствие</p>
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
                                <p className={classes.home__aboutHomeMore__wrapper__text_title}>
                                Усадьба располагается на хуторе, в деревне Янушки (Брестское направление) 40 минут езды от кольцевой дороги в сторону г.п. Рубежевичи. Дом площадью 78 м. кв. , состоящий из 2 комнат и 6 спальных мест. Внутренняя обстановка напоминает квартиру – студию: из небольшой прихожей попадаешь в просторную комнату с компактной кухонной зоной. Далее идет вторая небольшая комната. Сан. узел. оборудован всем необходимым: унитаз с подогревом сиденья + биде. В доме имеется печь-камин, LCD телевизор (триколор), холодильник, микроволновая печь, полноценная кухня, предоставляется постельной белье, полотенца. Имеется мангал и угли для шашлыка.
                                </p>
                                <p className={classes.home__aboutHomeMore__wrapper__text_title_bel}></p>
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
                                    <img src={img1} alt="Избушка 1"/>
                                </div>
                                <div>
                                    <img src={img2} alt="Избушка 2"/>
                                </div>
                                <div>
                                    <img src={img3} alt="Избушка 3"/>
                                </div>
                                <div>
                                    <img src={img4} alt="Избушка 4"/>
                                </div>
                                <div>
                                    <img src={img5} alt="Избушка 5"/>
                                </div>
                                <div>
                                    <img src={img6} alt="Избушка 6"/>
                                </div>
                                <div>
                                    <img src={img7} alt="Избушка 7"/>
                                </div>
                                <div>
                                    <img src={img8} alt="Избушка 8"/>
                                </div>
                                <div>
                                    <img src={img9} alt="Избушка 9"/>
                                </div>
                                <div>
                                    <img src={img10} alt="Избушка 10"/>
                                </div>
                                <div>
                                    <img src={img11} alt="Избушка 11"/>
                                </div>
                                <div>
                                    <img src={img12} alt="Избушка 12"/>
                                </div>
                                <div>
                                    <img src={img13} alt="Избушка 13"/>
                                </div>
                                <div>
                                    <img src={img14} alt="Избушка 14"/>
                                </div>
                                <div>
                                    <img src={img15} alt="Избушка 15"/>
                                </div>
                                <div>
                                    <img src={img16} alt="Избушка 16"/>
                                </div>
                                <div>
                                    <img src={img17} alt="Избушка 17"/>
                                </div>
                                <div>
                                    <img src={img18} alt="Избушка 18"/>
                                </div>
                                <div>
                                    <img src={img19} alt="Избушка 19"/>
                                </div>
                                <div>
                                    <img src={img20} alt="Избушка 20"/>
                                </div>
                                <div>
                                    <img src={img21} alt="Избушка 21"/>
                                </div>
                                <div>
                                    <img src={img22} alt="Избушка 22"/>
                                </div>
                                <div>
                                    <img src={img23} alt="Избушка 23"/>
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