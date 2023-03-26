import React from "react";
import classes from './Footer.module.scss'
import logo from '../../img/logoHuge.svg'
import address from '../../img/addressLight.svg'
import email from '../../img/emailLight.svg'
import phone from '../../img/phoneLight.svg'
import telegram from '../../img/telegramLight.svg'

const Footer = () => {
    return(
        <footer className={classes.footer}>
            <div className="g-container">
                <div className={classes.footer__wrapper}>
                    <img src={logo} alt='Logo' className={classes.footer__wrapper_logo}/>
                    <div className={classes.footer__wrapper__info}>   
                        <div className={classes.footer__wrapper__info__item}>
                            <img src={address} alt='address' className={classes.footer__wrapper__info__item_img}/>
                            <a href="https://goo.gl/maps/P9TxMeK5cj1i6WdU7" target="_blank" rel="noreferrer" className={classes.footer__wrapper__info__item_title}>Деревня Янушки</a>
                        </div>
                        <div className={classes.footer__wrapper__info__item}>
                            <img src={phone} alt='phone' className={classes.footer__wrapper__info__item_img}/>
                            <a href="tel:+375293482358" className={classes.footer__wrapper__info__item_title}>+375293482358</a>
                        </div>
                        <div className={classes.footer__wrapper__info__item}>
                            <img src={email} alt='email' className={classes.footer__wrapper__info__item_img}/>
                            <a className={classes.footer__wrapper__info__item_title} href="mailto:pavelkminsk@gmail.com">pavelkminsk@gmail.com</a>
                        </div>
                        <div className={classes.footer__wrapper__info__item}>
                            <img src={telegram} alt='telegram' className={classes.footer__wrapper__info__item_img}/>
                            <p className={classes.footer__wrapper__info__item_title}>text4</p>
                        </div>
                    </div>
                    <p className={classes.footer__wrapper_final}>© 2023 Усадьба "В Янушках". Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer