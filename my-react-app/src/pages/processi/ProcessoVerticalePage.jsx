import React from "react";
import { useParams, Link } from "react-router-dom";
import uffici from "../../data/uffici";
import processiVerticali from "../../data/processiVerticali";
import { useState } from "react";


const ProcessoVerticalePage = () => {
  const { ufficioId, processoId } = useParams();
  const [activeTab, setActiveTab] = useState("fase1");

  const processo = processiVerticali.find((p) => p.id === parseInt(processoId));

  // Trova gli uffici corrispondenti agli ID presenti in processo.attori
  const ufficiCoinvolti = uffici.filter((u) => processo.attori.includes(String(u.id)));

  if (!processo) {
    return <h2 className="text-center">Processo non trovato!</h2>;
  }

  return (
    <div className="container-fluid mt-4">
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

      {/* Sezione con due colonne */}
      <div className="container mt-2">
      <div className="row">
  {/* Colonna 1 */}
  <div className="col-md-6 d-flex bg-photo">
    <div className="card shadow mb-3 h-100 w-100">
      <ul className="list-group">
        <li className="list-group-item d-flex">
          <div
            className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card"
            style={{ flex: "1" }}
          >
            Frequenza:
          </div>
          <div className="p-2 w-67 d-flex align-items-center" style={{ flex: "2" }}>
            {processo.frequenza}
          </div>
        </li>
        <li className="list-group-item d-flex">
          <div
            className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card"
            style={{ flex: "1" }}
          >
            Input:
          </div>
          <div className="p-2 w-67 d-flex align-items-center" style={{ flex: "2" }}>
            {processo.input}
          </div>
        </li>
        <li className="list-group-item d-flex">
          <div
            className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card"
            style={{ flex: "1" }}
          >
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
    <div className="card shadow mb-3 h-100 w-100">
      <ul className="list-group bg-photo ps-4">
        <li className="list-group-item d-flex">
          <div
            className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card"
            style={{ flex: "1" }}
          >
            Attori IGPNRR coinvolti:
          </div>
          <div className="p-2 w-67 d-flex flex-column" style={{ flex: "2" }}>
            {ufficiCoinvolti.length === 0 ? (
              <p>Nessun ufficio coinvolto.</p>
            ) : (
              <ul className="list-group">
                {ufficiCoinvolti.map((uff) => (
                  <li className="list-group-item d-flex justify-content-between" key={uff.id}>
                    <span>Ufficio {uff.numero}</span>
                    <Link
                      to={`/ufficio/${uff.id}`}
                      className="btn btn-sm btn-primary bi bi-info"
                    ></Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        <li className="list-group-item d-flex">
          <div
            className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card"
            style={{ flex: "1" }}
          >
            Terzi coinvolti:
          </div>
          <div className="p-2 w-67 d-flex flex-column" style={{ flex: "2" }}>
            <ul className="list-group">
              {processo.terziCoinvolti.map((terzo, index) => (
                <li className="card p-2 mb-3 shadow" key={index}>
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


        {/* Riga per "Prefunzionamento" */}
        <div className="row mt-4">
          <div className="col">
            <div className="card shadow col1 text-white mb-3">
              <h4 className="display-6 text-start ">Funzionamento del processo</h4>
              <div className="card-body text-start">
                <p>{processo.prefunzionamento}</p>
              </div>
            </div>
          </div>
        </div>


        <div className="row mt-2">
          <div className="col">
            <div className="card shadow col1 text-white mb-3">
              <h4 className="display-6 text-start ">Fasi del processo di funzionamento</h4>
             {/* Tabs per le fasi */}
                <ul className="nav nav-tabs mb-3">
                  {processo.funzionamento.map((fase, index) => (
                    <li className="nav-item" key={index}>
                      <button
                        className={`nav-link ${activeTab === `fase${fase.fase}` ? "active" : ""}`}
                        onClick={() => setActiveTab(`fase${fase.fase}`)}
                      >
                        Fase {fase.fase}: {fase.titolo}
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

     
    </div>
  );
};

export default ProcessoVerticalePage;
