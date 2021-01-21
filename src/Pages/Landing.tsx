import React from "react";
import "../styles/global.css";
import "../styles/pages/landing.css";
import logo from "../images/Logo.svg";
import Lottie from "lottie-react-web";
import animation from "../animations/31763-happy-mother.json";
import {FiArrowRight} from "react-icons/fi";
//link spa, habilidade de transição de tela para outra sem carregar pagina para outra
import {Link} from "react-router-dom";
function Landing() {
    return (
        <div id="page-landing">
        <div id="main">
        <div id="topo">
         
         <img src={logo}></img>
          <div id="location">
            <strong>Presidente Prudente</strong>
            <span>São Paulo</span>
          </div>
         
    
          </div>
          <div id="center">
          <div id="conteudo">
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            
          </div>
          <div id="animation">
          <Lottie
       height={500}
        options={{
          animationData: animation,
          loop: true,
         autoplay: true,
          
        
        }}
      
      />
      <Link id="enter-app" to="/app"><FiArrowRight size={26} color="rgba(0,0, 0, 0.6"></FiArrowRight></Link>
          </div>
          </div>
          </div>
          </div>
    
        
      );
}
export default Landing