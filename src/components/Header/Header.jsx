import React from "react";
import classes from './Header.module.scss'
import logo from '../../img/logo.svg'

export const Header = () => {
    return(
        <section className={classes.header}>
            <div className="g-container">
                <div className={classes.header__wrapper}>
                    <img src={logo} alt='Logo'/>
                    <nav className={classes.header__wrapper__menu}>
                        <ul className={classes.header__wrapper__menu__list}>
                            <li className={classes.header__wrapper__menu__list_item}>О Доме</li>
                            <li className={classes.header__wrapper__menu__list_item}>Фото</li>
                            <li className={classes.header__wrapper__menu__list_item}>Отзывы</li>
                            <li className={classes.header__wrapper__menu__list_item}>Карта</li>
                            <li className={classes.header__wrapper__menu__list_item}>Забронировать</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

