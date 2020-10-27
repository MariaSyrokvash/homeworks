import React from "react";
import er from './error.module.css';
import s from './../../../p1-main/m1-ui/u1-app/App.module.css'
import {NavLink} from 'react-router-dom';

function Error404() {
    return (
        <div className={`${er.wrap} ${s.App}`} >

            <div>
                <div className={er.starsec}></div>
                <div className={er.starthird}></div>
                <div className={er.starfourth}></div>
                <div className={er.starfifth}></div>
            </div>



            <div className={er.lamp__wrap}>
                <div className={er.lamp}>
                    <div className={er.cable}></div>
                    <div className={er.cover}></div>
                    <div className={er.incover}>
                        <div className={er.bulb}></div>
                    </div>
                    <div className={er.light}></div>
                </div>
            </div>

            <section className={er.error}>

                <div className={er.error__content}>
                    <div className={`${er.error__message} ${er.message}`}>
                        <h1 className={er.message__title}>Page Not Found</h1>
                        <p className={er.message__text}>We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                    </div>
                    <div className={`${er.error__nav} ${er.enav}`}>
                      <NavLink exact to="/" className={er.home}>HOME</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Error404;
