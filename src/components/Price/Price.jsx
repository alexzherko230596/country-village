import React from "react";
import classes from './Price.module.scss'
import cottage from '../../img/cottage.svg'

const Price = () => {

    return(
        <section className={classes.price} id="blockPrice">
            <img src={cottage} className={classes.price_img} alt="cottage"/>
            <div className="g-container">
                <div className={classes.price__wrapper}>
                    <h2>Стоимость</h2>
                    <div className={classes.price__wrapper__blocks}>
                        <div className={classes.price__wrapper__blocks__item}>
                            <div className={classes.price__wrapper__blocks__item__type}>
                                <p className={classes.price__wrapper__blocks__item__type_title}>Будние дни</p>
                            </div>
                            <div className={classes.price__wrapper__blocks__middle}>
                                <p className={classes.price__wrapper__blocks__middle_text}>Понедельник - Четверг</p>
                            </div>
                            <p className={classes.price__wrapper__blocks_price}>150 <br/> рублей</p>
                            <p className={classes.price__wrapper__blocks_price_mobile}>150 рублей</p>
                        </div>

                        <div className={classes.price__wrapper__blocks__item}>
                            <div className={`${classes.price__wrapper__blocks__item__type} ${classes.price__wrapper__blocks__item__type_middle}`}>
                                <p className={classes.price__wrapper__blocks__item__type_title}>Выходние дни</p>
                            </div>
                            <div className={classes.price__wrapper__blocks__middle}>
                                <p className={classes.price__wrapper__blocks__middle_text}>Пятница - Воскресенье</p>
                            </div>
                            <p className={classes.price__wrapper__blocks_price}>200 <br/> рублей</p>
                            <p className={classes.price__wrapper__blocks_price_mobile}>200 рублей</p>
                        </div>
                        
                        <div className={classes.price__wrapper__blocks__item}>
                            <div className={`${classes.price__wrapper__blocks__item__type} ${classes.price__wrapper__blocks__item__type_high}`}>
                                <p className={classes.price__wrapper__blocks__item__type_title}>Праздничные дни</p>
                            </div>
                            <div className={classes.price__wrapper__blocks__middle}>
                                <p className={classes.price__wrapper__blocks__middle_text}>Праздничные дни</p>
                            </div>
                            <p className={`${classes.price__wrapper__blocks_price} ${classes.price__wrapper__blocks_price_low}`}>Стоимость договорная</p>
                            <p className={classes.price__wrapper__blocks_price_mobile}>Стоимость договорная</p>
                        </div>
                    </div>
                    <p className={classes.price__wrapper_more}>Дополнительные услуги</p>
                    <div className={classes.price__wrapper__service}>
                        <p>Баня</p>
                        <p>130 рублей / сутки </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Price