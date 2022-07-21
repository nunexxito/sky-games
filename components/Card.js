import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Axie from "./Axie";
import Clash from "./Clash";
import Cod from "./Cod";
import Sky from "./Sky";
import Valorant from "./Valorant";
import styled from "styled-components";

const border = {
  borderRadius: "6px",
};

export default function Card() {
  const [clash, setClash] = useState(false);
  const [cod, setCod] = useState(false);
  const [axie, setAxie] = useState(false);
  const [valorant, setValorant] = useState(false);
  const [sky, setSky] = useState(false);

  const handleClashEnter = () => {
    setClash(true)
    setCod(false)
    setAxie(false)
    setValorant(false)
    setSky(true)
  };
  const handleCodEnter = () => {
    setClash(false)
    setCod(true)
    setAxie(false)
    setValorant(false)
    setSky(true)
  };
  const handleAxieEnter = () => {
    setClash(false)
    setCod(false)
    setAxie(true)
    setValorant(false)
    setSky(true)
  };
  const handleValorantEnter = () => {
    setClash(false)
    setCod(false)
    setAxie(false)
    setValorant(true)
    setSky(true)
  };
  const change = () => {
    setClash(false)
    setCod(false)
    setAxie(false)
    setValorant(false)
    setSky(false)
  }

  useEffect(()=> {
    const tl = gsap.timeline({
      defaults: {duration: 3, stagger: .6}
    })
    const gameCard = document.querySelectorAll(".game-card")
    tl.fromTo(gameCard, {y: 250, opacity: 0}, {y: 0, opacity: 1})

  },[])

  return(
    <div className={`${clash ? "clash" : cod ? "cod" : axie ? "axie" : valorant ? "valorant" : "none"}`}>
      {sky && <button onClick={change} className="exit">X</button>}
      <div className="container-card">
        <div className="card-card">

          <div onMouseEnter={handleClashEnter} className={`game-card blue ${clash ? "everHover" : ""}`}>
            <div className="name-card">
              <Image src='/img/cr.png' alt='' width='110' height='50'/>
            </div>
            <Image src='/img/Clash-Royale.jpg' alt='' layout='fill' style={border}/>
          </div>

          <div onMouseEnter={handleCodEnter} className={`game-card yellow ${cod ? "everHover" : ""}`}>
            <div className="name-card">
              <Image src='/img/codm.png' alt='' width='120' height='40'/>
            </div>
            <Image src='/img/R.jpg' alt='' layout='fill' style={border}/>
          </div>

          <div onMouseEnter={handleAxieEnter} className={`game-card green ${axie ? "everHover" : ""}`}>
            <div className="name-card">
              <Image src='/img/axie.png' alt='' width='100' height='50'/>
            </div>
            <Image src='/img/axie-artwork.jpeg' alt='' layout='fill'  style={border}/>
          </div>

          <div onMouseEnter={handleValorantEnter} className={`game-card red ${valorant ? "everHover" : ""}`}>
            <div className="name-card">
              <Image src='/img/valorant.png' alt='' width='130' height='25'/>
            </div>
            <Image src='/img/maxresdefault.jpg' alt='' layout='fill'  style={border}/>
          </div>

        </div>
        <div className="info-card">
          <Sky sky={sky}/>
          <Clash clash={clash}/>
          <Cod cod={cod}/>
          <Axie axie={axie}/>
          <Valorant valorant={valorant}/>
        </div>
      </div>
    </div>
  );
}

// const BackgroundImg = styled.div`
// background: ${props => {
//     props.clash ? "url(../public/img/Clash-Royale.jpg)" : 'none'
// }}
// `;