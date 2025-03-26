import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataContext";

import core from "../image/img1.png"; 
import noncore from "../image/img2.png"; 

const UfficioPage = () => {
  const { uffici, processi, loading } = useContext(DataContext);
  const processiCore = processi.processi_core;
  const processiVerticali = processi.processi_verticali;
  const processiRilevanti = processi.processi_rilevanti;

  if (loading) return <p>Caricamento...</p>;

  const { id } = useParams(); 
  const ufficio = uffici.find((u) => u.id === parseInt(id));

  if (!ufficio) {
    return <h2 className="text-center">Ufficio non trovato!</h2>;
  }

  // Recupera i processi dell'ufficio con i loro ruoli
  const processiCoreUfficio = Object.entries(ufficio.processiCore).map(([idProcesso, ruolo]) => {
    const processo = processiCore.find(p => p.id === parseInt(idProcesso));
    return processo ? { ...processo, ruolo } : null;
  }).filter(Boolean);

  const processiVerticaliUfficio = Object.entries(ufficio.processiVerticali).map(([idProcesso, ruolo]) => {
    const processo = processiVerticali.find(p => p.id === parseInt(idProcesso));
    return processo ? { ...processo, ruolo } : null;
  }).filter(Boolean);

  const processiRilevantiUfficio = Object.entries(ufficio.processiRilevanti).map(([idProcesso, ruolo]) => {
    const processo = processiRilevanti.find(p => p.id === parseInt(idProcesso));
    return processo ? { ...processo, ruolo } : null;
  }).filter(Boolean);


  return (
    <div className="container mt-4 card">
      <div className="text-start text-white mb-4 bg-info card shadow-sm bg-photo3">
        <h1 className="display-2">Ufficio {ufficio.numero} : {ufficio.nome}</h1>
      </div>
      <div className="custom-text coltext1">
        <p style={{ fontSize: 12 }}>{ufficio.descrizione}</p>
      </div>

      <div className="container mt-3">
        {processiCoreUfficio.length > 0 && (
          <div className="row mb-4 col1 custom-card-blu p-3 rounded-4 align-items-center">
            <div className="col-md-7 coltext1 p-4">
              <h4>Processi Core</h4>
              <ul className="list-group">
                {processiCoreUfficio.map((processo) => (
                  <li className="card p-2 mb-3 shadow" key={processo.id}>
                    <div className="card-body d-flex align-items-center justify-content-between gap-3">
                      <i className="bi bi-cpu-fill fs-4 text-primary"></i>
                      <p className="card-text flex-grow-1 m-0 text-center">{processo.nome}</p>
                      <small className="text-muted">Ruolo: {processo.ruolo}</small>
                      <Link to={`/ufficio/${ufficio.id}/processo/${processo.id}`} className="btn col1 btn-sm text-white">
                        Vai al processo <i className="bi bi-arrow-right-square-fill text-white fs-6 ms-2"></i>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-5 text-white rounded-4 p-4 d-flex justify-content-center align-items-center">
              <img src={core} alt="Logo" className="img-fluid" style={{ maxWidth: "80%" }} />
            </div>
          </div>
        )}

        <div className="row custom-card-blu rounded-4">
          {processiVerticaliUfficio.length > 0 && (
            <div className="col p-4">
              <h4>Processi Verticali</h4>
              <ul className="list-group">
                {processiVerticaliUfficio.map((processo) => (
                  <li className="card p-2 mb-3 shadow" key={processo.id}>
                    <div className="card-body d-flex align-items-center justify-content-between gap-3">
                      <i className="bi bi-distribute-vertical fs-4 text-primary"></i>
                      <p className="card-text flex-grow-1 m-0 text-center">{processo.nome}</p>
                      <small className="text-muted">Ruolo: {processo.ruolo}</small>
                      <Link to={`/ufficio/${ufficio.id}/processoVerticale/${processo.id}`} className="btn col1 btn-sm text-white">
                        Vai al processo <i className="bi bi-arrow-right-square-fill text-white fs-5 ms-2"></i>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {processiRilevantiUfficio.length > 0 && (
            <div className="col p-4">
              <h4>Processi Rilevanti</h4>
              <ul className="list-group">
                {processiRilevantiUfficio.map((processo) => (
                  <li className="card p-2 mb-3 shadow" key={processo.id}>
                    <div className="card-body d-flex align-items-center justify-content-between gap-3">
                      <i className="bi bi-aspect-ratio fs-4 text-primary"></i>
                      <p className="card-text flex-grow-1 m-0 text-center">{processo.nome}</p>
                      <small className="text-muted">Ruolo: {processo.ruolo}</small>
                      <Link to={`/ufficio/${ufficio.id}/processoRilevante/${processo.id}`} className="btn col1 btn-sm text-white">
                        Vai al processo <i className="bi bi-arrow-right-square-fill text-white fs-5 ms-2"></i>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="btn btn-primary text-white">
            Torna Indietro
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UfficioPage;