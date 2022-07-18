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
    borderRadius: '6px',
};

export default function Card() {
    const [clash, setClash] = useState(false);
    const [cod, setCod] = useState(false);
    const [axie, setAxie] = useState(false);
    const [valorant, setValorant] = useState(false);
    const [sky, setSky] = useState(false);

    const handleClashEnter = () => {
        setClash(true)
        setSky(true)
    };
    const handleClashLeave = () => {
        setClash(false)
        setSky(false)
    };;
    const handleCodEnter = () => {
        setCod(true)
        setSky(true)
    };;
    const handleCodLeave = () => {
        setCod(false)
        setSky(false)
    };;
    const handleAxieEnter = () => {
        setAxie(true)
        setSky(true)
    };;
    const handleAxieLeave = () => {
        setAxie(false)
        setSky(false)
    };;
    const handleValorantEnter = () => {
        setValorant(true)
        setSky(true)
    };;
    const handleValorantLeave = () => {
        setValorant(false)
        setSky(false)
    };;
    
    useEffect(()=> {
        const tl = gsap.timeline({
            defaults: {duration: 3, stagger: .6}
        })
        const gameCard = document.querySelectorAll('.game-card')
        tl.fromTo(gameCard, {y: 250, opacity: 0}, {y: 0, opacity: 1})

    },[])

    return(
        <div className={`${clash ? 'clash' : cod ? 'cod' : axie ? 'axie' : valorant ? 'valorant' : 'none'}`}>
        <div className="container-card">
            <div className="card-card">

                <div onMouseEnter={handleClashEnter} onMouseLeave={handleClashLeave} className='game-card blue'>
                    <div className="name-card">
                        <Image src='/img/cr.png' alt='' width='110' height='50'/>
                    </div>
                    <Image src='/img/Clash-Royale.jpg' alt='' layout='fill' style={border}/>
                </div>

                <div onMouseEnter={handleCodEnter} onMouseLeave={handleCodLeave} className="game-card yellow">
                    <div className="name-card">
                        <Image src='/img/codm.png' alt='' width='120' height='40'/>
                    </div>
                    <Image src='/img/R.jpg' alt='' layout='fill' style={border}/>
                </div>

                <div onMouseEnter={handleAxieEnter} onMouseLeave={handleAxieLeave} className="game-card green">
                    <div className="name-card">
                        <Image src='/img/axie.png' alt='' width='100' height='50'/>
                    </div>
                    <Image src='/img/axie-artwork.jpeg' alt='' layout='fill'  style={border}/>
                </div>

                <div onMouseEnter={handleValorantEnter} onMouseLeave={handleValorantLeave} className="game-card red">
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