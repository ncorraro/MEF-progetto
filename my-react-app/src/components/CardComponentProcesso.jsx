import { Link } from "react-router-dom";
import React from "react";

function CardComponentProcesso({ id, nome, tipo, descrizione }) {
  console.log("ID del processo:", id);

  return (
    <div 
      className="card shadow rounded-4 p-3 h-100 w-100"
      style={{
        background: "linear-gradient(135deg, #093596, #2a5cbf)",
        transition: "all 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, #2a5cbf, #093596)";
        e.currentTarget.style.transform = "translateY(-5px)";  // Effetto sollevamento
        e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.3)";  // Ombra più marcata
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, #093596, #2a5cbf)";
        e.currentTarget.style.transform = "translateY(0)";  // Torna alla posizione originale
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";  // Ombra normale
      }}
    >
      <div className="card-body d-flex flex-column text-white">
        
        {/* Nome Processo in alto a sinistra */}
        <div className="text-start">
          <h3 className="fw-bold">Processo: {nome}</h3>
        </div>

        {/* Descrizione centrata */}
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <p className="card-text text-start">{descrizione}</p>
        </div>
        
        {/* Pulsante in basso a destra */}
        <div className="d-flex justify-content-end">
          <Link 
            to={
              tipo === "core"
                ? `/processi/processiCore/processo/${id}`
                : tipo === "verticale"
                ? `/processi/processiVerticali/processo/${id}`
                : tipo === "rilevante"
                ? `/processi/processiRilevanti/processo/${id}`
                : "#"
            } 
            className="btn btn-light rounded-3 mt-2 coltext1"
          >
            DETTAGLI 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardComponentProcesso;
