import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import uffici from "../../data/uffici";
import processiCore from "../../data/processiCore";
import Funzionamento from "../../components/Funzionamento";

const ProcessoPage = () => {
  const { ufficioId, processoId } = useParams();
  const [activeTab, setActiveTab] = useState("fase1");
  const navigate = useNavigate();

  // Trova il processo corrispondente all'ID nell'URL
  const processo = processiCore.find((p) => p.id === parseInt(processoId));
  
  // Trova gli uffici corrispondenti agli ID presenti in processo.attori
  const ufficiCoinvolti = uffici.filter((u) => processo?.attori.includes(String(u.id)));

  if (!processo) {
    return <h2 className="text-center">Processo non trovato!</h2>;
  }

  // Funzione per navigare al diagramma selezionato
  const navigateToDiagram = (diagramId) => {
    navigate(`/diagramma/${processoId}/${diagramId}`);
  };

  return (
    <div className="container-fluid mt-4 card shadow">
      {/* Header Processo */}
      <div className="card p-3 mb-3 bg-photo2 shadow-sm">
        <div className="row">
          <div className="col shadow text-white">
            <div
              className="card shadow-sm mb-3 text-white"
              style={{ backgroundColor: "rgba(23, 162, 184, 0.6)" }}
            >
              <h1 className="card-title">Processo: {processo.nome}</h1>
              <p className="text-white">{processo.descrizione}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione Diagrammi di Flusso */}
      <div className="container">
        <div className="row custom-card-blu rounded-4">
          <div className="col p-2">
            <h4 className="coltext1 text-start">I DIAGRAMMI DI FLUSSO DEL PROCESSO:</h4>

            {/* Lista di bottoni generati dinamicamente dai diagrammi disponibili */}
            <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3">
              {processo.diaggrammi && processo.diaggrammi.length > 0 ? (
                processo.diaggrammi.map((diagramId, index) => (
                  <li key={diagramId}>
                    <button 
                      className="col1 btn text-white"
                      onClick={() => navigateToDiagram(diagramId)}
                    >
                      Diagramma {index + 1}
                    </button>
                  </li>
                ))
              ) : (
                <li>
                  <p className="text-white">Nessun diagramma disponibile</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Resto del componente rimane invariato */}
      {/* Sezione con due colonne */}
      <div className="container mt-2">
        <div className="row bg-photo">
          {/* Colonna 1 */}
          <div className="col-md-6 d-flex">
            <div className="mb-3 d-flex align-items-center justify-content-center">
              <ul className="list-group ps-3">
                <li className="list-group-item d-flex">
                  <div className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                    Frequenza:
                  </div>
                  <div className="p-2 w-67 d-flex align-items-center" style={{ flex: "2" }}>
                    {processo.frequenza}
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                    Input:
                  </div>
                  <div className="p-2 w-67 d-flex align-items-center" style={{ flex: "2" }}>
                    {processo.input}
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                    Output:
                  </div>
                  <div className="p-2 w-67 d-flex align-items-center" style={{ flex: "2" }}>
                    {processo.output}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Colonna 2 */}
          <div className="col-md-6 d-flex">
            <div className="mb-3 w-100 d-flex align-items-center justify-content-center">
              <ul className="list-group ps-4 w-100">
                <li className="list-group-item d-flex">
                  <div className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                    Attori IGPNRR coinvolti:
                  </div>
                  <div className="p-2 w-67 d-flex flex-column" style={{ flex: "2" }}>
                    {ufficiCoinvolti.length === 0 ? (
                      <p className="text-center">Nessun ufficio coinvolto.</p>
                    ) : (
                      <ul className="list-group">
                        {ufficiCoinvolti.map((uff) => (
                          <li className="list-group-item d-flex justify-content-between" key={uff.id}>
                            <span>Ufficio {uff.numero}</span>
                            <Link to={`/uffici/ufficio/${uff.id}`} className="btn btn-sm btn-primary bi bi-info"></Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col1 text-white p-1 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                    Terzi coinvolti:
                  </div>
                  <div className="p-1 w-67 d-flex flex-column" style={{ flex: "2" }}>
                    <ul className="list-group">
                      {processo.terziCoinvolti.map((terzo, index) => (
                        <li className="card p-1 mb-1 shadow" key={index}>
                          <div className="card-body d-flex align-items-center justify-content-between gap-3">
                            <i className="bi bi-hdd-stack-fill fs-4 text-primary"></i>
                            <p className="card-text flex-grow-1 m-0 text-center">{terzo}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Funzionamento del Processo */}
      <div className="container mt-1 d-flex align-self-center">
      <Funzionamento modelloDiFunzionamento={processo.modelloDiFunzionamento} />
      </div>

      


      {/* Fasi del Processo */}
      <div className="row mt-2">
        <div className="col">
          <div className="card shadow col1 text-white mb-3">
            <h4 className="display-6 text-start">Fasi del processo di funzionamento</h4>
            {/* Tabs per le fasi */}
            <ul className="nav nav-tabs mb-3">
              {processo.funzionamento.map((fase, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`nav-link ${activeTab === `fase${fase.fase}` ? "active bg-white" : ""}`}
                    onClick={() => setActiveTab(`fase${fase.fase}`)}
                  >
                    <span className={activeTab === `fase${fase.fase}` ? "coltext1" : "text-white"}>
                      Fase {fase.fase}: {fase.titolo}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Contenuto delle fasi */}
            <div className="card p-3 shadow text-start">
              {processo.funzionamento.map((fase, index) => (
                <div key={index} className={activeTab === `fase${fase.fase}` ? "d-block" : "d-none"}>
                  <h4>{fase.titolo}</h4>
                  <p>{fase.descrizione}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessoPage;