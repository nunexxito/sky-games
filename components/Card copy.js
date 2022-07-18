import Image from "next/image";
import React, {useEffect, useState} from "react";

const border = {
    borderRadius: '6px',
    // width: '100%',
    // height: '100%',
};


export default function CardCopy() {
    // const [show, setShow] = useState()
    useEffect(()=> {

        setInterval(()=> {
            const primero = document.querySelector('.primero')
            const segundo = document.querySelector('.segundo')
            const tercero = document.querySelector('.tercero')
            const cuarto = document.querySelector('.cuarto')
            const up = document.querySelector('span[data-up]')
            
            if(primero.hasAttribute('data-show')){
                cuarto.removeAttribute('data-up')
                primero.removeAttribute('data-show')
                primero.setAttribute('data-up', '')
                segundo.setAttribute('data-show', '')
            } else
            if(segundo.hasAttribute('data-show')){
                primero.removeAttribute('data-up')
                segundo.removeAttribute('data-show')
                segundo.setAttribute('data-up', '')
                tercero.setAttribute('data-show', '')
            } else
            if(tercero.hasAttribute('data-show')){
                segundo.removeAttribute('data-up')
                tercero.removeAttribute('data-show')
                tercero.setAttribute('data-up', '')
                cuarto.setAttribute('data-show', '')
            } else
            if(cuarto.hasAttribute('data-show')){
                tercero.removeAttribute('data-up')
                cuarto.removeAttribute('data-show')
                cuarto.setAttribute('data-up', '')
                primero.setAttribute('data-show', '')
            }
        }, 2000);
    },[])
        

    return(
        <div className="container-card">
            <div className="card-card">
                <div className="game-card">
                    <div className="name-card">
                        <Image src='/img/cr.png' alt='' width='110' height='50'/>
                    </div>
                    <Image src='/img/Clash-Royale.jpg' alt='' layout='fill' style={border}/>
                </div>
                <div className="game-card">
                    <div className="name-card">
                        <Image src='/img/codm.png' alt='' width='120' height='40'/>
                    </div>
                    <Image src='/img/R.jpg' alt='' layout='fill' style={border}/>
                </div>
                <div className="game-card">
                    <div className="name-card">
                        <Image src='/img/axie.png' alt='' width='100' height='50'/>
                    </div>
                    <Image src='/img/axie-artwork.jpeg' alt='' layout='fill'  style={border}/>
                </div>
                <div className="game-card">
                    <div className="name-card">
                        <Image src='/img/valorant.png' alt='' width='130' height='25'/>
                    </div>
                    <Image src='/img/maxresdefault.jpg' alt='' layout='fill'  style={border}/>
                </div>
                <svg>
                    <filter id="wavy">
                        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
                            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite"></animate>
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
                    </filter>
                </svg>
            </div>
            <div className="info-card">
                <div className="typing-card">
                    <div className="typing-effect">
                        <h1>Que es skyGame?</h1>
                    </div>
                </div>
                <h2>
                    esto es solamente una prueba
                    <div className="mask-card">
                        <span className="first-span primero" data-show>para ver</span>
                        <span className="segundo">como esta</span>
                        <span className="tercero">funcionando</span>
                        <span className="last-span cuarto">el efecto</span>
                    </div>
                </h2>
            </div>
        </div>
    );
}