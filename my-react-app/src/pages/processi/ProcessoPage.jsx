import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import Funzionamento from "../../components/Funzionamento";
import ProcessDetails from "../../components/ProcessDetails ";

const ProcessoPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('fase0');

  const { uffici, processi, loading } = useContext(DataContext);
  const processiCore = processi?.processi_core || [];

  if (loading) return <p>Caricamento...</p>;

  const { processoId } = useParams(); 
  const processo = processiCore.find((p) => 
    String(p.id) === processoId || 
    p.id === parseInt(processoId)
  );

  if (!processo) {
    return <h2 className="text-center">Processo non trovato!</h2>;
  }

  const ufficiCoinvolti = uffici.filter(ufficio => processo.attori.includes(String(ufficio.id)));

  const navigateToDiagram = (diagramId) => {
    navigate(`/diagramma/${processo.id}/${diagramId}`);
  };

  const processoDetails = Object.entries(processi || {})
    .flatMap(([processoType, processiList]) => 
      processoType.includes('core') 
        ? processiList.map(p => ({ ...p, type: processoType }))
        : []
    )
    .find(p => String(p.id) === processoId);

  if (loading) return <p>Caricamento...</p>;

  if (!processoDetails) {
    return <h2 className="text-center">Processo non trovato!</h2>;
  }

  const funzionamentoArray = Array.isArray(processoDetails.funzionamento)
    ? processoDetails.funzionamento
    : [];

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
                  <div className="p-2 w-67 d-flex align-items-start text-start" style={{ flex: "2" }}>
                    {processo.frequenza}
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                    Missione Di Riferimento:
                  </div>
                  <div className="p-2 w-67 d-flex align-items-start text-start" style={{ flex: "2" }}>
                    {processo.missione}
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                    Input:
                  </div>
                  <div className="p-2 w-67 d-flex align-items-start text-start" style={{ flex: "2" }}>
                    {processo.input}
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                    Output:
                  </div>
                  <div className="p-2 w-67 d-flex align-items-start text-start" style={{ flex: "2" }}>
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
              {ufficiCoinvolti.length > 0 && (
                  <li className="list-group-item d-flex">
                    <div className="col1 text-white p-2 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                      Attori IGPNRR coinvolti:
                    </div>
                    <div className="p-2 w-67 d-flex flex-column" style={{ flex: "2" }}>
                      <ul className="list-group">
                        {ufficiCoinvolti.map((uff) => (
                          <li className="list-group-item d-flex justify-content-between" key={uff.id}>
                            <span>Ufficio {uff.numero}</span>
                            <Link to={`/uffici/ufficio/${uff.id}`} className="btn btn-sm btn-primary bi bi-info"></Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )}
                {processo.terzi_coinvolti.length > 0 && (
                  <li className="list-group-item d-flex">
                    <div className="col1 text-white p-1 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                      Altre strutture coinvolte:
                    </div>
                    <div className="p-1 w-67 d-flex flex-wrap gap-2" style={{ flex: "2" }}>
                      {processo.terzi_coinvolti.map((terzo, index) => (
                        <div 
                          className="card p-1 shadow flex-grow-0 mb-1" 
                          key={index} 
                          style={{ 
                            width: '200px', 
                            height: '60px',  
                            overflow: 'hidden' 
                          }}
                        >
                          <div className="card-body d-flex align-items-center justify-content-between gap-3">
                            <i className="bi bi-hdd-stack-fill fs-4 text-primary"></i>
                            <p className="card-text flex-grow-1 m-0 text-center text-truncate">{terzo}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                )}
                {processo.destinatari.length > 0 && (
                  <li className="list-group-item d-flex">
                    <div className="col1 text-white p-1 w-33 d-flex align-items-center justify-content-center card" style={{ flex: "1" }}>
                      Destinatari output di processo:
                    </div>
                    <div className="p-1 w-67 d-flex flex-wrap gap-2" style={{ flex: "2" }}>
                      {processo.destinatari.map((terzo, index) => (
                        <div 
                          className="card p-1 shadow flex-grow-0 mb-1" 
                          key={index} 
                          style={{ 
                            width: '200px', 
                            height: '60px',  
                            overflow: 'hidden' 
                          }}
                        >
                          <div className="card-body d-flex align-items-center justify-content-between gap-3">
                            <i className="bi bi-hdd-stack-fill fs-4 text-primary"></i>
                            <p className="card-text flex-grow-1 m-0 text-center text-truncate">{terzo}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>


        <ProcessDetails 
        processo={processo}
        ufficiCoinvolti={ufficiCoinvolti}
        terziCoinvolti={processo.terzi_coinvolti}
        destinatari={processo.destinatari}
      />
      </div>

      {/* Funzionamento del Processo */}
      <div className="container mt-1">
        <Funzionamento modelloDiFunzionamento={processoDetails.modello_di_funzionamento} />
      </div>

      {/* Fasi del Processo */}
      <div className="row mt-2">
        <div className="col">
          <div className="card shadow col1 text-white mb-3">
            <h4 className="display-6 text-start">Fasi del processo di funzionamento</h4>

            {/* Tabs per le fasi */}
            <div className="nav-container position-relative">
              <ul className="nav nav-tabs mb-3 flex-nowrap">
                {funzionamentoArray.map((fase, index) => (
                  <li className="nav-item" key={index}>
                    <button
                      className={`nav-link ${activeTab === `fase${index}` ? "active bg-white" : ""}`}
                      onClick={() => setActiveTab(`fase${index}`)}
                      title={`Fase ${index + 1}: ${fase.nome}`}
                      style={{ whiteSpace: 'normal', wordBreak: 'break-word' }} 
                    >
                      <span className={activeTab === `fase${index}` ? "coltext1" : "text-white"}>
                        Fase {index + 1}: {fase.nome}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contenuto delle fasi */}
            <div className="card p-3 shadow text-start">
              {funzionamentoArray.map((fase, index) => (
                <div 
                  key={index} 
                  className={activeTab === `fase${index}` ? "d-block" : "d-none"}
                >
                  <h4>{fase.nome}</h4>
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