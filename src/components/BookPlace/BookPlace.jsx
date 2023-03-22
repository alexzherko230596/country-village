import React, {useState, useRef} from "react";
import classes from './BookPlace.module.scss'
import emailjs from '@emailjs/browser';

const BookPlace = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [isFormSend, setFormSend] = useState(false)
    const [loadingForm, setLoadingForm] = useState(false)
    const [errorText, setErrorText] = useState('')
    const form = useRef();

    const handleForm = (e) => {
        console.log(e.target)
        e.preventDefault();
        setLoadingForm(true)
        setErrorText('')
        var templateParams = {
            name: name,
            phone: phone
        };
        emailjs.send(process.env.REACT_APP_MAIL_TEMPLATE, process.env.REACT_APP_MESSAGE_TEMPLATE, templateParams, process.env.REACT_APP_USER_NAME)
        .then((result) => {
            setLoadingForm(false)
            setFormSend(true)
        }, 
        (error) => {
                console.log(error.text);
                setErrorText('Непредвиденная ошибка. Повторите попытку позже')
                setLoadingForm(false)
        });
    }

    const sendFormAgain = () => {
        setFormSend(false)
        setName('')
        setPhone('')
    }

    return(
        <section className={classes.book} id="BlockBook">
            <div className="g-container">
                <div className={classes.book__wrapper}>
                    <div className={classes.book__wrapper__left}>
                        <img alt="lake" src={require('../../img/leftImage.jpg')} className={classes.book__wrapper__left_img}/>
                    </div>
                    {loadingForm ? 
                        <div className={classes.book__wrapper__middleLoading}>
                            <div className={classes.book__wrapper__middleLoading_loading} />
                        </div>
                    :
                    !isFormSend ? 
                        <form className={classes.book__wrapper__middle} onSubmit={handleForm} ref={form}>
                            <div>
                                <p className={classes.book__wrapper__middle_title}>Забронируй место прямо сейчас</p>
                                <p className={classes.book__wrapper__middle_descr}>Оставьте свои данные и мы перезвоним для уточнения деталей</p>
                                <input 
                                    placeholder="Имя"
                                    className={classes.book__wrapper__middle_input} 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    maxLength='20'/>
                                <input 
                                    placeholder="Номер телефона"
                                    className={classes.book__wrapper__middle_input2} 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    maxLength='20'/>
                                <p className={classes.book__wrapper__middle_error}>{errorText}</p>
                            </div>
                            <button className={classes.book__wrapper__middle_btn} type = 'submit' onClick={handleForm} disabled={!name || !phone}>Отправить</button>
                        </form>
                    :
                        <div className={classes.book__wrapper__middle}>
                            <div>
                                <p className={classes.book__wrapper__middle_title}>Спасибо за заявку</p>
                                <p className={classes.book__wrapper__middle_descr}>Наши менеджеры свяжутся с вами в ближайщее время</p>
                                <p className={classes.book__wrapper__middle_name}>Имя: <span>{name}</span></p>
                                <p className={classes.book__wrapper__middle_name}>Номер телефона: <span>{phone}</span></p>
                            </div>
                            <button className={classes.book__wrapper__middle_btn} onClick = {sendFormAgain}>Отправить еще одну форму</button>
                        </div>
                    }
                    <div className={classes.book__wrapper__right}>
                    <img alt="lake" src={require('../../img/rightMenu.jpg')} className={classes.book__wrapper__right_img}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookPlace