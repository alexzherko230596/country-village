import React from "react";
import classes from './Map.module.scss'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import address from '../../img/map.svg'
import email from '../../img/email.svg'
import phone from '../../img/phone.svg'
import telegram from '../../img/telegram.svg'

export const Map = () => {
    return(
        <section className={classes.map} id="BlockMap">
            <div className="g-container">
                <div className={classes.map__wrapper}>
                    <div className={classes.map__wrapper__info}>
                        <p className={classes.map__wrapper__info_title}>Координаты</p>
                        <div className={classes.map__wrapper__info__data}>
                            <div className={classes.map__wrapper__info__data__item}>
                                <img className={classes.map__wrapper__info__data__item_img} src={address} alt = {'address'}/>
                                <p className={classes.map__wrapper__info__data__item_title}>д.Янушки </p>
                            </div>
                            <div className={classes.map__wrapper__info__data__item}>
                                <img className={classes.map__wrapper__info__data__item_img} src={email} alt = {'address'}/>
                                <p className={classes.map__wrapper__info__data__item_title}>Имейл</p>
                            </div>
                            <div className={classes.map__wrapper__info__data__item}>
                                <img className={classes.map__wrapper__info__data__item_img} src={phone} alt = {'address'}/>
                                <p className={classes.map__wrapper__info__data__item_title}>Телефон</p>
                            </div>
                            <div className={classes.map__wrapper__info__data__item}>
                                <img className={classes.map__wrapper__info__data__item_img} src={telegram} alt = {'address'}/>
                                <p className={classes.map__wrapper__info__data__item_title}>Телеграмм</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.map__wrapper__map}>
                        <MapContainer 
                            style = {{height: '500px', width: '100%'}}
                            className = {classes.div}
                            center = {[53.651185, 26.796954]}
                            zoom={15}
                            scrollWheelZoom = {false}>
                            <TileLayer 
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <Marker
                                    position={[53.651185, 26.796954]}>
                                </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}