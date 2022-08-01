import React, {useRef, useEffect, useContext, useState} from "react";
import Image from "next/image";
import {gsap, Circ} from "gsap"
import AuthContext from "../store/AuthContext";
import Link from "next/link"

export default function Navbar() {
  let btn = useRef(null);
  let img = useRef(null);
  const {user, login, logout} = useContext(AuthContext);
  const [profile, setProfile] = useState(false);

  const changeLogout = () => {
    logout();
    setProfile(false);
  }
  const changeProfile = () => setProfile(prev => !prev);

  const username = user ? user.user_metadata.full_name : null

  useEffect(() => {
    const info = document.querySelectorAll(".info-p");
    gsap.fromTo(info, {opacity: 0}, {opacity: 1, duration: 3})
    gsap.fromTo(btn, {opacity: 0}, {opacity: 1, duration: 3, ease: Circ.out})
    gsap.fromTo(img, {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 3})
  }, [])

  return(
    <div className='container-navbar'>
      <div className='info-navbar'>
        <Link href='/us'>
          <p className="info-p" data-text='Nosotros'>Nosotros</p>
        </Link>

        <Link href='funcionality'>
          <p className="info-p" data-text='Funcionalidad'>Funcionalidad</p>
        </Link>

        <Link href='contact'>
          <p className="info-p" data-text='Contacto'>Contacto</p>
        </Link>
      </div>
      <div ref={el => img = el} className='logo-navbar'>
        <Link href='/'>
          <Image src="/img/skygame-logo.png" width='130' height='60' alt=""/>
        </Link>
      </div>
      <div className='user-navbar'>
        {!user && <button onClick={login} ref={el => btn = el} className="btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
                    Login
        </button>}
        {user && <div className="user">
          {username}
          <ul className="dropdown">

            {profile ?
              <Link  href='/'>
                <li>
                  <button onClick={changeProfile} className="profileBtn">Inicio</button>
                </li>
              </Link>
              :
              <Link href='/profile'>
                <li>
                  <button onClick={changeProfile} className="profileBtn">Mi perfil</button>
                </li>
              </Link>}

            <Link href='/'>
              <li>
                <button onClick={changeLogout} className='signOut'>Sign out</button>
              </li>
            </Link>
          </ul>
        </div>}
      </div>
    </div>
  );
}
