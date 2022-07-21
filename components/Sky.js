import React, {useEffect} from "react";

let skyInterval

export default function Sky({sky}) {
  useEffect(()=> {
    skyInterval = setInterval(()=> {
      const primero = document.querySelector(".primero")
      const segundo = document.querySelector(".segundo")
      const tercero = document.querySelector(".tercero")
      const cuarto = document.querySelector(".cuarto")
            
      if(primero.hasAttribute("data-show")){
        cuarto.removeAttribute("data-up")
        primero.removeAttribute("data-show")
        primero.setAttribute("data-up", "")
        segundo.setAttribute("data-show", "")
      } else
      if(segundo.hasAttribute("data-show")){
        primero.removeAttribute("data-up")
        segundo.removeAttribute("data-show")
        segundo.setAttribute("data-up", "")
        tercero.setAttribute("data-show", "")
      } else
      if(tercero.hasAttribute("data-show")){
        segundo.removeAttribute("data-up")
        tercero.removeAttribute("data-show")
        tercero.setAttribute("data-up", "")
        cuarto.setAttribute("data-show", "")
      } else
      if(cuarto.hasAttribute("data-show")){
        tercero.removeAttribute("data-up")
        cuarto.removeAttribute("data-show")
        cuarto.setAttribute("data-up", "")
        primero.setAttribute("data-show", "")
      }
    }, 2000);
    return () => clearInterval(skyInterval)
  },[])
  return(
    <div className='sky' style={{display: sky ? "none" : "inline-block", transition: "all 0.3s ease-in-out"}}>
      <h1>Que es skyGame?</h1>
      <h2>
                esto es solamente una prueba
        <div className="mask-card">
          <span className="primero" data-show>para ver</span>
          <span className="segundo">como esta</span>
          <span className="tercero">funcionando</span>
          <span className="cuarto">el efecto</span>
        </div>
      </h2>
    </div>
  );
}