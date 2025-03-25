import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../Footer";
import CardComponentProcesso from "../../components/CardComponentProcesso";
import uffici from "../../data/uffici";
//import processiCore from "../../data/processiCore";

import { useContext } from "react";
import { DataContext } from "../../DataContext";



  

const ProcessiCorePage = () => {

  const { processi, loading } = useContext(DataContext);
  const processiCore = processi.processi_core;

  if (loading) return <p>Caricamento...</p>;


  // Funzione per suddividere l'array in gruppi di 2 elementi
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Raggruppa i processi in coppie
  const processChunks = chunkArray(processiCore, 2);

  return (
    <>
      <div className="container-fluid p-0 card shadow">
        <div className="row p-2">
          <h2 className="display-3 mt-2 coltext1">PROCESSI CORE</h2>
        </div>

        <div className="row d-flex justify-content-center w-70 mx-auto">
          <p className="coltext1 custom-text text-center" style={{ fontSize: 12 }}>
            I processi core dell'Ispettorato si configurano come un complesso di soluzioni 
            organizzativo-operative attraverso il quale l'IGPNRR assolve alle proprie missioni. 
            I processi core risultano interconnessi configurando un modello di 
            funzionamento nell'ambito del quale la cooperazione tra gli Uffici e lo scambio di 
            dati e informazioni rappresenta uno degli elementi critici per l'efficacia 
            dell'azione dell'Ispettorato.
          </p>
          <hr />
        </div>

        <div className="w-100">
          {processChunks.map((chunk, chunkIndex) => {
           
            
            return (
              <div className={`row w-100 mx-0 p-2 `} >
                {chunk.map((processo, processIndex) => {
                  
                  
                  return (
                    <div className="col-md-6 d-flex justify-content-center " key={processo.id}>
                      <CardComponentProcesso
                        id={processo.id}
                        nome={processo.nome}
                        tipo={processo.tipo}
                        descrizione={processo.descrizione}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </>
  );
};

export default ProcessiCorePage;