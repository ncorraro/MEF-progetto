import React from "react";
import { useParams, Link } from "react-router-dom";
import processi from "../data/processi"; // Importiamo i processi
import sottoProcessi from "../data/sottoProcessi"; // Importiamo i sottoprocessi

const SottoProcessoPage = () => {
  const { ufficioId, processoId, sottoProcessoId } = useParams(); // Ottiene gli ID dall'URL

  // Trova il processo
  const processo = processi.find((p) => p.id === parseInt(processoId));

  // Trova il sottoprocesso
  const sottoProcesso = sottoProcessi.find((s) => s.id === parseInt(sottoProcessoId));

  if (!processo || !sottoProcesso) {
    return <h2 className="text-center text-danger">Sottoprocesso non trovato!</h2>;
  }

  return (
    <div className="container-fluid mt-4">
      
      {/* Card con informazioni del sottoprocesso */}
      <div className="text-start text-white mb-4 bg-info card shadow-s">
        <h4 className="display-6">SottoProcesso: {sottoProcesso.nome}</h4>
      </div>

      <div className="row justify-content-between gap-3">
       
        {/* Obbiettivo */}
        <div className="col-md-3 card col1 shadow p-3 text-white">
          <h4 className="bi bi-calendar-check text-start"> Obbiettivo:</h4>
          <p className="text-start">{sottoProcesso.obiettivo}</p>
        </div>

        {/* Attori */}
        <div className="col col-lg-2 card shadow p-3">
          <h4 className="bi bi-people-fill"> Attori:</h4>
          <ul>
            {sottoProcesso.attori.map((attore, index) => (
              <li key={index}>{attore}</li>
            ))}
          </ul>
        </div>

        {/* Informazioni del sottoprocesso */}
        <div className="col col1 text-white card shadow p-4">
          <h2 className="bi bi-info-square"> Informazioni del SottoProcesso</h2>

          {/* Input */}
          <div className="row mb-2" >
            <div className="card shadow p-3 h-100 d-flex flex-column justify-content-center text-white" style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}> 
              <div className="col">
                <span className="fw-bold bi bi-box-arrow-in-down-right"> Input di Processo:</span> {sottoProcesso.input}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="row mb-2">
            <div className="card shadow p-3 h-100 d-flex flex-column justify-content-center text-white" style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}>
              <div className="col">
                <span className="fw-bold bi bi-box-arrow-up-left"> Output di Processo:</span> {sottoProcesso.output}
              </div>
            </div>
          </div>

          {/* Vincoli Normativi */}
          <div className="row mb-2">
            <div className="card shadow p-3 h-100 d-flex flex-column justify-content-center text-white" style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}>
              <div className="row">
                <div className="col-md-4 fw-bold text-start">
                  <i className="bi bi-file-earmark-ruled"></i> Vincoli Normativi:
                </div>
                <div className="col-md-8">
                  <ul>
                    {sottoProcesso.vincoliNormativi.map((vincolo, index) => (
                      <li key={index}>{vincolo}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Strumenti Utilizzati */}
          <div className="row mb-2">
            <div className="card shadow p-3 h-100 d-flex flex-column justify-content-center text-white" style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}>
              <div className="row">
                <div className="col-md-4 fw-bold text-start">
                  <i className="bi bi-gear"></i> Strumenti Utilizzati:
                </div>
                <div className="col-md-8">
                  <ul>
                    {sottoProcesso.strumentiUtilizzati.map((strumento, index) => (
                      <li key={index}>{strumento}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div> {/* Fine della colonna principale */}

      </div> {/* Fine della riga */}

      {/* Pulsante per tornare al processo */}
      <div className="text-center mt-4">
        <Link to={`/ufficio/${ufficioId}/processo/${processo.id}`} className="btn btn-primary">
          Torna al processo
        </Link>
      </div>

    </div>
  );
};

export default SottoProcessoPage;
