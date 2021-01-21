import React from "react";
import MapMarking from "../images/map_marker.svg";
import {Link} from "react-router-dom";
import Lottie from "lottie-react-web";
import {FiPlus} from "react-icons/fi";
import "../styles/pages/orphanage-map.css";
import Boyhappy from "../animations/boy_happy.json";
import {Map,TileLayer} from "react-leaflet";
//importar css padraõ do mapa
import "leaflet/dist/leaflet.css";

function OrphanageMaps() {
    return (
     <div id="page-map">
         <aside id="lado">
             <header>
                 <img src={MapMarking}></img>
                 <h2>Escolha um orfanato no mapa</h2>
                 <p>Muitas crianças estão esperando a sua visita :)</p>
              
             </header>
            <div id="animation">
            <Lottie
       height={180}
        options={{
          animationData: Boyhappy,
          loop: true,
         autoplay: true,
          
           
        }}></Lottie>
            </div>
             <footer>
         <strong>Presidente Prudente</strong>
            <span>São Paulo</span>
         </footer>
         </aside>
        <Map center={
          [-22.1136981,-51.3782344,]
        }
        
        zoom={15}
        style={{ width: "100%", height: "100%",}
       
      }>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
      </Map>
        
         <Link to="" className="create-orphanage">
       <FiPlus color="white"></FiPlus>
       </Link>
     </div>
    
    );
}
export default OrphanageMaps