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
                            <p className={classes.footer__wrapper__info__item_title}>text</p>
                        </div>
                        <div className={classes.footer__wrapper__info__item}>
                            <img src={phone} alt='phone' className={classes.footer__wrapper__info__item_img}/>
                            <p className={classes.footer__wrapper__info__item_title}>text2</p>
                        </div>
                        <div className={classes.footer__wrapper__info__item}>
                            <img src={email} alt='email' className={classes.footer__wrapper__info__item_img}/>
                            <p className={classes.footer__wrapper__info__item_title}>text3</p>
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