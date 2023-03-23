import React from "react";
import classes from './Header.module.scss'
import logo from '../../img/logo.svg'
import { Link } from "react-scroll";

export const Header = () => {
    return(
        <header className={classes.header}>
            <div className="g-container">
                <div className={classes.header__wrapper}>
                    <img src={logo} alt='Logo'/>
                    <nav className={classes.header__wrapper__menu}>
                        <ul className={classes.header__wrapper__menu__list}>
                            {/* <li className={classes.header__wrapper__menu__list_item}>О Доме</li> */}
                            <Link 
                                className={classes.header__wrapper__menu__list_item}
                                to="BlockAbout"
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    О Доме
                            </Link>
                            <Link 
                                className={classes.header__wrapper__menu__list_item}
                                to="BlockPhoto"
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Фото
                            </Link>
                            <Link 
                                className={classes.header__wrapper__menu__list_item}
                                to="BlockFeedback"
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Стоимость
                            </Link>
                            <Link 
                                className={classes.header__wrapper__menu__list_item}
                                to="BlockMap"
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Карта
                            </Link>
                            <Link 
                                className={classes.header__wrapper__menu__list_item}
                                to="BlockBook"
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Забронировать
                            </Link>
                            {/* <li className={classes.header__wrapper__menu__list_item}>Фото</li>
                            <li className={classes.header__wrapper__menu__list_item}>Отзывы</li>
                            <li className={classes.header__wrapper__menu__list_item}>Карта</li>
                            <li className={classes.header__wrapper__menu__list_item}>Забронировать</li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

