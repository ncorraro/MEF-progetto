import React, { useState } from 'react';
import { Link } from "react-router-dom";

import miss from "../image/miss.png";
import missMin from "../image/missMin.png";
// Aggiungi questa importazione se usi npm/webpack
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpandableImage = () => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div 
        className="relative cursor-pointer w-full border-2 border-blue-500 rounded-lg mt-2 col1 rounded-3 p-3 "
        onClick={toggleExpand}
        style={{ maxWidth: '100%' }}
      >
        {expanded ? (
          // Bootstrap's fade animation
          <div className={`fade ${expanded ? 'show' : ''}`} style={{ transition: 'opacity .50s linear', opacity: expanded ? 1 : 0, display: expanded ? 'block' : 'none'}}>
            <img src={miss} alt="Immagine espansa"  className="w-100"  />
            <div className="d-flex justify-content-center align-items-center mb-3">
              <Link to={`/uffici`} className="btn col4 text-white align-self-start">
                PER I DETTAGLI DELLE MISSIONI <i className="bi bi-arrow-right-square-fill"></i>
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative w-full">
            <img src={missMin} alt="Immagine parziale" className="w-full h-auto" style={{ maxWidth: '100%' }}/>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-40"></div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold">
              Espandi gli Obbiettivi
            </div>
          </div>
        )}
      </div>
      
      
    </div>
  );
};

export default ExpandableImage;