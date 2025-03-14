import React from "react";
import { Link } from "react-router-dom";
// Importazione componenti
import MissionSection from "../components/Missioni";
// Importazione immagini
import office from "../image/office.png"; 
import processo from "../image/processo.png"; 
import nxg from "../image/nxe3.png"; 
import missione2 from "../image/missioni2.png"; 

import ExpandableImage from '../components/ExpandableImage';

const HomePage = () => {
  return (
    <>
      {/* Container principale con ombra */}
      <div className="container-fluid card shadow">
        
        {/* Sezione intestazione con immagine di sfondo */}
        <div className="container">
          <div className="row rounded-4 bg-photo2" style={{ minHeight: '400px' }}>
            <div className="col d-flex flex-column justify-content-center align-items-center text-center">
              {/* Titolo principale */}
              <h4 className="display-4 rounded-4 text-white shadow p-3 coltext1 fw-bold">
                ISPETTORATO <br /> GENERALE PER IL <br /> PNRR
              </h4>
              <p className="mb-4">
                L'Ispettorato Generale per il Piano Nazionale di Ripresa e Resilienza è l'organo della Ragioneria Generale dello Stato incaricato del coordinamento operativo delle fasi di attuazione, gestione finanziaria, monitoraggio, rendicontazione e controllo
              </p>
            </div>
          </div>
        </div>

        {/* Sezione Next Generation EU */}
        <div className="container  mt-3  rounded-top-4 ps-4 pb-5 pe-4 py-2 border-start border-end border-top">
          <div className="position-relative">
            <img 
              src={nxg} 
              alt="Logo" 
              className="img-fluid float-start me-3 rounded-4 p-2" 
              style={{ maxWidth: "20%", height: "auto" }} 
            />

            <p className="coltext1 mt-3 custom-text" style={{ fontSize: 14 }}>
              <span className="fw-bold">Il Next Generation EU</span> è <span className="fw-bold">il programma di rilancio economico</span>, istituito dal Regolamento (UE) 2020/2094 del Consiglio Europeo, per attenuare l'impatto economico e sociale della pandemia da Covid-19, <span className="fw-bold">promuovere una ripresa economica sostenibile</span>, resiliente ed inclusiva degli Stati Membri e garantire che l'UE sia preparata ad affrontare le sfide e le opportunità del futuro. 
              <br />
              Lo strumento di finanziamento chiave del programma è il <span className="fw-bold">Dispositivo per la Ripresa e la Resilienza</span>, istituito tramite il Regolamento (UE) 2021/241 del Parlamento europeo e del Consiglio, articolato in <span className="fw-bold">sovvenzioni e prestiti</span> per supportare le <span className="fw-bold">riforme</span> e <span className="fw-bold">gli investimenti</span> degli Stati Membri.
              <br /><br />
              Al fine di accedere alle risorse finanziarie del RRF, l'Italia ha presentato <span className="fw-bold">il Piano Nazionale di Ripresa e Resilienza</span> articolato inizialmente in <span className="fw-bold">sei Missioni</span> alle quali, tramite la modifica della Council Implementing Decision (CID) n. 16051/23 di dicembre 2023, è stata <span className="fw-bold">integrata la Missione "REPowerEU"</span>.
            </p>
          </div>

         
 
          </div>
          

          {/* MISSIONI */}
          <div className="container col1   ps-4 pe-4 py-4 ">
            <h5 className="display-5 fw-bold text-start coltext4 ">LE MISSIONI DELL'IGPNRR</h5>
            <p className="coltext4 text-start" style={{ fontSize: 12 }}>
              Al fine di accedere alle risorse finanziarie del RRF, l'Italia ha presentato il Piano Nazionale di Ripresa e Resilienza articolato inizialmente in sei Missioni alle quali, tramite la modifica della Council Implementing Decision (CID) n. 16051/23 di dicembre 2023, è stata integrata la Missione "REPowerEU" .
            </p>

            {/* Componente immagine espandibile */}
            <div className="container rounded-4">
              <ExpandableImage />
            </div>

           
          </div>

          <div className="container  rounded-bottom-4 ps-4 pe-4 py-2 pt-5 border-start border-end border-bottom">
          {/* Box informativo sui processi */}
          
          {/* UFFICI E PROCESSI */}
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Prima Card */}
            <div className="col-md-6 ">
              <div className="card  p-4 position-relative bg-photo4">
                <p className="text-white text-start">
                  L'IGPNRR è un ufficio centrale di livello dirigenziale generale, è articolato organizzativamente in otto uffici.
                </p>
                <Link  to={`/uffici`} 
                  className="btn text-white position-absolute bottom-0 end-0 mb-2 me-2"
                  >
                  Dettagli degli Uffici <i className="bi bi-arrow-right-square-fill"></i>
                </Link>
              </div>
            </div>

            {/* Seconda Card */}
            <div className="col-md-6">
              <div className="card  p-4 position-relative bg-photo5">
                <p className="text-white text-start">
                  I processi dell'Ispettorato si configurano come un complesso organizzativo-operative attraverso il quale l'IGPNRR assolve alle proprie mansioni.
                </p>
                <Link 
                  to={`/processi`} 
                  className="btn text-white position-absolute bottom-0 end-0 mb-2 me-2"
                >
                  Dettagli dei Processi <i className="bi bi-arrow-right-square-fill"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

            
          {/* Sezione relazioni IGPNRR */}
          <div className="container mt-4">
            <h5 className="display-5 fw-bold text-start text-uppercase coltext1 ">Il sistema delle relazioni dell'IGPNRR</h5>

            <p className="custom-text coltext1" style={{ fontSize: 15 }}>
              L'Ispettorato interagisce e collabora con una pluralità di stakeholder a livello nazionale ed internazionale. La figura riportata di seguito rappresenta i principali attori con cui l'Ispettorato collabora e comunica nello svolgimento dei processi e delle attività volti all'assolvimento delle proprie missioni.
              Sulla base delle dimensioni di analisi sopra indicate, sono identificati tre macro-aggregazioni di soggetti con cui l'IGPNRR coopera nell'ambito delle proprie missioni.
            </p>

            {/* Immagine schema relazioni */}
            <img 
              src={missione2} 
              alt="Schema relazioni IGPNRR" 
              className="img-fluid rounded-4 mt-3 mb-3"
            />

            {/* Sezione infografiche - 3 colonne */}
            <div className="row mt-5">
              {/* Colonna 1 */}
              <div className="col d-flex flex-column align-items-center text-center">
                <h2 className="text-white col4 rounded-3 p-2" style={{ width: "22%", height: "auto" }}>A1</h2>
                <h5 className="coltext1 mt-2" style={{ fontSize: 19 }}>Ragioneria Generale dello Stato</h5>
                <p className="coltext1 custom-text" style={{ fontSize: 12, width: "95", height: "auto" }}>
                Include le strutture della RGS e del MEF con cui l’IGPNRR coopera nell’esecuzione delle attività operative dell’Ispettorato. Nello svolgimento di tali attività l’Ispettorato interagisce con: IGRUE, RTS, IGIT, IGEPA, IGECOFIP, UDM NGEU, OIA e DT                </p>
              </div>

              {/* Colonna 2 */}
              <div className="col d-flex flex-column align-items-center text-center">
                <h2 className="text-white col4 rounded-3 p-2" style={{ width: "22%", height: "auto" }}>A2</h2>
                <h5 className="coltext1 mt-2" style={{ fontSize: 19 }}>Enti e Amministrazioni Centrali</h5>
                <p className="coltext1 custom-text" style={{ fontSize: 12, width: "95%", height: "auto" }}>
                include Enti e Amministrazioni Centrali e Locali coinvolti nell’implementazione del Piano, con cui l’IGPNRR si interfaccia esercitando funzioni di coordinamento e supporto. Tra i principali attori identificati l’Ispettorato interagisce con: AT, SA, ANCI, ANAC, Guardia di Finanza, Banca d'Italia, UIF                </p>
              </div>

              {/* Colonna 3 */}
              <div className="col d-flex flex-column align-items-center text-center">
                <h2 className="text-white col4 rounded-3 p-2" style={{ width: "22%", height: "auto" }}>A3</h2>
                <h5 className=" coltext1  mt-2" style={{ fontSize: 19 }}>Istituzioni Nazionali ed Europee</h5>
                <p className="coltext1 custom-text" style={{ fontSize: 12, width: "  95%", height: "auto" }}>
                Da un lato include le Istituzioni nazionali con ruoli di governance del PNRR, dall’altro, le Istituzioni europee con responsabilità decisionali nell’ambito NGEU. In particolare, si identificano i seguenti attori: PCM, Istituzioni europee (CE, ECOFIN, Consiglio Europeo).                 </p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
}

export default HomePage;