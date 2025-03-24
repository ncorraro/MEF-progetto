import { Link } from "react-router-dom";
import React from "react";
import Footer from "../Footer";
import CardComponent from "../components/CardComponent";
import uffici from "../data/uffici";

import { useContext } from "react";
import { DataContext } from "../DataContext";

const UfficiPage = () => {

  const { uffici, loading } = useContext(DataContext);

  if (loading) return <p>Caricamento...</p>;


  return (
    <>
      <div className="container-fluid p-0 card shadow">
        <div className="p-4">
          <h2 className="display-3 mt-2 mb-3 coltext1">UFFICI</h2>
          
          <div className="row d-flex justify-content-center w-70 mx-auto">
            <p className="coltext1 custom-text text-center" style={{ fontSize: 12 }}>
              L'IGPNRR è articolato organizzativamente in otto uffici, con specifiche competenze, 
              che agiscono sotto il coordinamento dell'Ispettore Generale Capo (IGC). 
              In Figura 3 si riportano le principali funzioni degli uffici:
            </p>
          </div>
          
          <hr className="custom-hr rounded-4" />
        </div>
        
        <div className="container my-4">
          <div className="row g-4">
            {uffici.map((ufficio) => (
              <div className="col-md-6" key={ufficio.id}>
                <CardComponent
                  id={ufficio.id}
                  numero={ufficio.numero}
                  title={ufficio.nome}
                  text={ufficio.descrizione}
                  cardBg="gradient-card"
                  textColor="text-white"
                />
                
              </div>
            ))}
          </div>
        </div>

        
      </div>
      <hr />
    </>
  );
};

export default UfficiPage;