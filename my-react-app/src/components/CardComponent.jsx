import { Link } from "react-router-dom";
import React from "react";

function CardComponent({ id, numero, title, text, cardBg, textColor }) {
  return (
    <div
      className={`card shadow rounded-4 p-3 ${cardBg} h-100 w-100`}
      style={{
        background: "linear-gradient(135deg, #093596, #2a5cbf)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, #2a5cbf, #093596)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, #093596, #2a5cbf)";
      }}
    >
      <div className={`card-body d-flex flex-column ${textColor}`}>
        
        {/* Ufficio + Numero in alto a sinistra */}
        <div className="text-start">
          <h3 className="fw-bold">UFFICIO {numero}</h3>
          <h5 className="fw-semibold">{title}</h5>
        </div>

        {/* Descrizione centrata */}
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <p className="card-text text-start">{text}</p>
        </div>

        {/* Pulsante in basso a destra */}
        <div className="d-flex justify-content-end">
          <Link to={`/uffici/ufficio/${id}`} className="btn btn-light">
            <i className="bi bi-info-square-fill"></i>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default CardComponent;
