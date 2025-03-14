import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../Footer";
import CardComponentProcesso from "../../components/CardComponentProcesso";
import processiRilevanti from"../../data/processiRilevanti";


const ProcessiRilevantiPage = () => {
    return (
      <>
        <div className="container-fluid p-0 card shadow">
        <div className="row p-2">
          <h2 className="display-3 mt-2 coltext1">PROCESSI RILEVANTI</h2>
        </div>

        <div className="row d-flex justify-content-center w-70 mx-auto">
          <p className="coltext1 custom-text text-center" style={{ fontSize: 12 }}>
            I processi core dell’Ispettorato si configurano come un complesso di soluzioni 
            organizzativo-operative attraverso il quale l’IGPNRR assolve alle proprie missioni. 
            I processi core risultano interconnessi configurando un modello di 
            funzionamento nell’ambito del quale la cooperazione tra gli Uffici e lo scambio di 
            dati e informazioni rappresenta uno degli elementi critici per l’efficacia 
            dell’azione dell’Ispettorato.
          </p>       
          <hr />
        </div>


          <div className="w-100">
            {processiRilevanti.map((processo, index) => {
              // Definizione classi dinamiche in base all'indice
              const rowClass = index % 2 === 0 ? "col1" : "bg-white";
              const cardBg = index % 2 === 0 ? "bg-white" : "col1";
              const textColor = index % 2 === 0 ? "coltext1" : "text-white";

              return (
                <div className={`row w-100 mx-0 g-0 ${rowClass}`} key={processo.id}>
                  <div className="col-12 d-flex justify-content-center p-5">
                    <CardComponentProcesso
                      id={processo.id}
                      nome={processo.nome}
                      tipo={processo.tipo}
                      descrizione={processo.descrizione}
                      cardBg={cardBg}
                      textColor={textColor}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
      </>
    );
}

export default ProcessiRilevantiPage;
