import React, {useRef, useEffect, useContext, useState} from "react";
import Image from "next/image";
import {gsap, Circ} from "gsap"
import AuthContext from "../store/AuthContext";
import Link from "next/link";
import {FormattedMessage} from "react-intl"
import { LangContext } from "../context/LangContext";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";

export default function Navbar() {
  let btn = useRef(null);
  let img = useRef(null);
  const {user, login, logout} = useContext(AuthContext);
  const [profile, setProfile] = useState(false);
  const language = useContext(LangContext);

  const changeLanguage = () => {
    if(language.locale === "en-US") {
      language.selectLang("es-MX")
    } else {
      language.selectLang("en-US")
    }
  }

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
          <p 
            className="info-p" 
            data-text={language.locale === "en-US" ? "Us" : "Nosotros"}
          >
            <FormattedMessage
              id="app.us"
              defaultMessage="Us"
            />
          </p>
        </Link>

        <Link href='/functionality'>
          <p 
            className="info-p" 
            data-text={language.locale === "en-US" ? "Functionality" : "Funcionalidad"}
          >
            <FormattedMessage
              id="app.functionality"
              defaultMessage="Functionality"
            />
          </p>
        </Link>

        <Link href='/contact'>
          <p 
            className="info-p" 
            data-text={language.locale === "en-US" ? "Contact" : "Contacto"}
          >
            <FormattedMessage
              id="app.contact"
              defaultMessage="Contact"
            />
          </p>
        </Link>

        <div className="containerLanguage">
          <button 
            className="btnLanguage" 
            onClick={changeLanguage}
          >
            <TranslateOutlinedIcon className="translateIcon"/>
            {language.locale === "en-US" ? "ES" : "US"}
          </button>
        </div>
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
                  <button onClick={changeProfile} className="profileBtn">
                    <FormattedMessage
                      id="app.home"
                      defaultMessage="Home"
                    />
                  </button>
                </li>
              </Link>
              :
              <Link href='/profile'>
                <li>
                  <button onClick={changeProfile} className="profileBtn">
                    <FormattedMessage
                      id="app.profile"
                      defaultMessage="My prefile"
                    />
                  </button>
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
