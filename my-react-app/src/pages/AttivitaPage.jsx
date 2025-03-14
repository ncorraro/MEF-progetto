import React from "react";
import { useParams, Link } from "react-router-dom";
import uffici from "../data/uffici";
import attivitaData from "../data/attivitaData"; // ✅ Rinomina per evitare conflitti

const AttivitaPage = () => {
  const { ufficioId, attivitaId } = useParams();

  // Trova l'ufficio corrispondente
  const ufficio = uffici.find((u) => u.id === parseInt(ufficioId));

  // Trova l'attività nei dati di attivita.js
  const attivita = attivitaData.find((a) => a.id === parseInt(attivitaId)); // ✅ Usa il nuovo nome

  if (!ufficio || !attivita) {
    return <h2 className="text-center text-danger">Attività non trovata!</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="card p-3 mb-3 shadow-sm">
        <div className="bg-info card shadow-sm mb-3 p-3">
          <h5 className="display-6">{ufficio.nome}</h5>
          <h1 className="card-title">Attività: {attivita.nome}</h1>
          <p className="text-muted">{attivita.descrizione}</p>
        </div>

        {/* Sezione Obiettivi */}
        <div className="card p-3 mb-3">
          <h4 className="text-primary">Obiettivi</h4>
          <ul className="list-group">
            {attivita.obiettivi.map((obiettivo, index) => (
              <li key={index} className="list-group-item">
                {obiettivo}
              </li>
            ))}
          </ul>
        </div>

        {/* Sezione Sottoattività */}
        <div className="card p-3">
          <h4 className="text-success">Sottoattività</h4>
          <ul className="list-group">
            {attivita.sottoattivita.map((sotto, index) => (
              <li key={index} className="list-group-item">
                <strong>{sotto.nome}</strong>: {sotto.descrizione}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pulsante per tornare all'ufficio */}
      <div className="text-center">
        <Link to={`/ufficio/${ufficio.id}`} className="btn btn-primary text-white">
          Torna all'Ufficio
        </Link>
      </div>
    </div>
  );
};

export default AttivitaPage;
