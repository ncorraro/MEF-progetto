import { Link } from "react-router-dom";
import React from "react";
import Footer from "../Footer";
import CardComponent from "../components/CardComponent";
import uffici from "../data/uffici";

const DisposizioniPage = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">QUADRO NORMATIVO DI RIFERIMENTO</h2>
            
            <p className="mb-4">Seguono i principali riferimenti normativi e regolamentari che disciplinano i processi dell'Ispettorato:</p>
            
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Disposizioni Europee</h4>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item">
                    <strong>CID (Decisione di esecuzione del Consiglio dell'Unione Europea) n.15114/24 del 12/11/2024</strong> - che modifica la CID del 13/07/2021, relativa all'approvazione della valutazione del PNRR
                  </li>
                  <li className="list-group-item">
                    <strong>CID n.9399/24 del 14/05/2024</strong> - che modifica la CID del 13/07/2021, relativa all'approvazione della valutazione del PNRR
                  </li>
                  <li className="list-group-item">
                    <strong>CID n. 16051/23 del 08/12/2023</strong> - che modifica la CID del 13/07/2021, relativa all'approvazione della valutazione del PNRR
                  </li>
                  <li className="list-group-item">
                    <strong>CID n.12259/23 del 19/09/2023</strong> - che modifica la CID del 13/07/2021, relativa all'approvazione della valutazione del PNRR
                  </li>
                  <li className="list-group-item">
                    <strong>Operational Arrangements (OA)</strong> - tra la CE e l'Italia del 22/12/2021 e successive modificazioni e integrazioni a seguito delle CID relative all'approvazione delle variazioni del PNRR
                  </li>
                  <li className="list-group-item">
                    <strong>CID del 13/07/2021</strong> - che recepisce la proposta della CE relativa al PNRR (s.m.i.)
                  </li>
                  <li className="list-group-item">
                    <strong>Regolamento UE 2021/240</strong> - del Parlamento europeo e del Consiglio del 10/02/2021 istitutivo di uno strumento di sostegno tecnico
                  </li>
                  <li className="list-group-item">
                    <strong>Regolamento (UE) 2021/241</strong> - del Parlamento Europeo e del Consiglio del 12/02/2021 istitutivo del <em>Recovery and Resilience Facility</em> (RRF)
                  </li>
                  <li className="list-group-item">
                    <strong>Regolamento (UE) 2020/2094</strong> - del Consiglio Europeo del 14/12/2020
                  </li>
                  <li className="list-group-item">
                    <strong>Accordi di finanziamento</strong> - tra la Commissione Europea e l'Italia (<em>RRF Financing Agreement and Loan Agreement</em>)
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-header bg-success text-white">
                <h4 className="mb-0">Disposizioni Nazionali</h4>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item">
                    <strong>DL (Decreto-legge) n.155 del 19/10/2024</strong> - recante "Misure urgenti in materia economica e fiscale e in favore degli enti territoriali"
                  </li>
                  <li className="list-group-item">
                    <strong>DL n.113 del 09/08/2024</strong> - recante "Misure urgenti di carattere fiscale, proroghe di termini normativi ed interventi di carattere economico"
                  </li>
                  <li className="list-group-item">
                    <strong>DM (Decreto Ministeriale) del MEF del 07/08/2024</strong> - recante "l'individuazione e le attribuzioni degli Uffici di livello dirigenziale non generale dei Dipartimenti del Ministero dell'economia e delle finanze"
                  </li>
                  <li className="list-group-item">
                    <strong>Circolare MEF-RGS n.21 del 13/05/2024</strong> - contenente indicazioni operative per l'attivazione delle anticipazioni di cui all'art. 11 del DL 19/2024, convertito, con modificazioni, dalla legge 29 aprile 2024, n.56
                  </li>
                  <li className="list-group-item">
                    <strong>DL n.19 del 02/03/2024</strong> - recante "Ulteriori disposizioni urgenti per l'attuazione del Piano nazionale di ripresa e resilienza (PNRR)"
                  </li>
                  <li className="list-group-item">
                    <strong>Circolare MEF-RGS n.35 del 22/12/2023</strong> - riguardante "Strategia generale antifrode per l'attuazione del Piano Nazionale di Ripresa e Resilienza - versione 2.0"
                  </li>
                  <li className="list-group-item">
                    <strong>DL n. 13/2023 del 24/02/2023</strong> - recante "Disposizioni urgenti per l'attuazione del Piano nazionale di ripresa e resilienza (PNRR) e del Piano nazionale degli investimenti complementari al PNRR (PNC), nonché per l'attuazione delle politiche di coesione e della politica agricola comune"
                  </li>
                  <li className="list-group-item">
                    <strong>Circolare MEF-RGS n.29 del 26/07/2022</strong> - riguardante "Modalità di erogazione delle risorse PNRR e principali modalità di contabilizzazione da parte degli enti territoriali SA"
                  </li>
                  <li className="list-group-item">
                    <strong>Circolare MEF-RGS n.27 del 21/06/2022</strong> - contenente indicazioni relative al monitoraggio delle Misure PNRR
                  </li>
                  <li className="list-group-item">
                    <strong>Determina MEF-RGS-RR n.56 del 09/03/2022</strong> - di istituzione del "Tavolo di coordinamento per il monitoraggio e la valutazione del PNRR"
                  </li>
                  <li className="list-group-item">
                    <strong>Circolare MEF-RGS n.6 del 24/01/2022</strong> - riguardante "PNRR – Servizi di assistenza tecnica per le Amministrazioni titolari di interventi e soggetti attuatori del PNRR"
                  </li>
                  <li className="list-group-item">
                    <strong>DM del MEF del 11/10/2021</strong> - recante "Procedure relative alla gestione finanziaria delle risorse previste nell'ambito del PNRR" (s.m.i.)
                  </li>
                  <li className="list-group-item">
                    <strong>DM del MEF del 06/08/2021</strong> - recante "Assegnazione delle risorse finanziare previste per l'attuazione degli interventi del PNRR" (s.m.i.)
                  </li>
                  <li className="list-group-item">
                    <strong>DL n.77/2021 del 31/05/2021</strong> - recante "Governance del Piano nazionale di rilancio e resilienza e prime misure di rafforzamento delle strutture amministrative e di accelerazione e snellimento delle procedure"
                  </li>
                  <li className="list-group-item">
                    <strong>Legge n.178 del 30/12/2020</strong> - relativa al bilancio di previsione dello Stato per l'anno finanziario 2021 e bilancio pluriennale per il triennio 2021-2023
                  </li>
                  <li className="list-group-item">
                    <strong>DL n.76/2020 del 16/07/2020</strong> - recante "Misure urgenti per la semplificazione e innovazione digitale"
                  </li>
                  <li className="list-group-item">
                    <strong>Protocolli d'Intesa</strong> - stipulati tra la RGS e altri enti e Istituzioni pubbliche al fine della cooperazione interistituzionale nell'ambito dell'attuazione del PNRR
                  </li>
                </ul>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default DisposizioniPage;