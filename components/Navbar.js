import React, {useRef, useEffect, useContext} from "react";
import Image from "next/image";
import {gsap, Circ} from 'gsap'
import AuthContext from "../store/AuthContext";

export default function Navbar() {
    let btn = useRef(null);
    let img = useRef(null);
    const {user, login, logout} = useContext(AuthContext);
    console.log(user)
    
    useEffect(() => {
        const info = document.querySelectorAll('.info-p');
        gsap.fromTo(info, {opacity: 0}, {opacity: 1, duration: 3})
        gsap.fromTo(btn, {opacity: 0}, {opacity: 1, duration: 3, ease: Circ.out})
        gsap.fromTo(img, {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 3})
    }, [])

    return(
        <div className='container-navbar'>
            <div className='info-navbar'>
                <p className="info-p" data-text='Nosotros'>Nosotros</p>
                <p className="info-p" data-text='Funcionalidad'>Funcionalidad</p>
                <p className="info-p" data-text='Contacto'>Contacto</p>
            </div>
            <div ref={el => img = el} className='logo-navbar'>
                <Image src="/img/skygame-logo.png" width='130' height='60' alt=""/>
            </div>
            <div className='user-navbar'>
                <button onClick={login} ref={el => btn = el} className="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                </button>
                <button onClick={logout} ref={el => btn = el} className="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Logout
                </button>
            </div>
        </div>
    );
}
