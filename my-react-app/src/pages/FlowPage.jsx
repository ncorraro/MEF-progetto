import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";
import FlowChart from "../components/FlowChart";
import sp from "../image/sp.png";
import { toPng } from 'html-to-image';
import processiCore from "./../data/processiCore";

const FlowPage = () => {
  // Ottieni i parametri dall'URL
  const { processoId, diagramId } = useParams();
  
  // Riferimento al container del diagramma
  const flowRef = useRef(null);
  
  // Trova il processo corrispondente per mostrare informazioni sul titolo
  const processo = processiCore.find(p => p.id === parseInt(processoId));
  
  // Trova l'indice del diagramma corrente nell'array dei diagrammi del processo
  const diagramIndex = processo?.diaggrammi?.findIndex(d => d === diagramId);
  
  // Scorri in alto all'apertura della pagina
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Funzione per scaricare il diagramma come immagine PNG
  const handleDownload = () => {
    if (flowRef.current === null) {
      return;
    }
    
    // Aggiungi una piccola pausa prima di catturare l'immagine
    // per assicurarsi che tutto sia renderizzato correttamente
    setTimeout(() => {
      toPng(flowRef.current, {
        quality: 0.95,
        backgroundColor: '#ffffff',
      })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `diagramma-${processo?.nome || 'di-flusso'}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Errore durante la generazione dell\'immagine:', error);
        });
    }, 100);
  };
  
  return (
    <div className="page-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4 className="mb-0">Diagramma di Flusso</h4>
          {processo && (
            <h5 className="text-muted">
              {processo.nome} - Diagramma {diagramIndex !== -1 ? diagramIndex + 1 : ''}
            </h5>
          )}
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn btn-success"
            onClick={handleDownload}
            title="Scarica il diagramma come immagine PNG"
          >
            <i className="bi bi-download me-1"></i> Scarica Diagramma
          </button>
          <Link to={`/processi/processo/${processoId}`} className="btn btn-outline-primary">
            <i className="bi bi-arrow-left me-1"></i> Torna al Processo
          </Link>
        </div>
      </div>
      
      {/* Diagramma di flusso */}
      <div className="flow-container" ref={flowRef}>
        <ReactFlowProvider>
          <FlowChart />
        </ReactFlowProvider>
      </div>
      
      <div className="row">
        <div className="col">
          {/* Icone degli strumenti usati nel processo */}
          <ul className="list-unstyled d-flex justify-content-end mb-2 mt-3 gap-2">
            <li className="icon-button">
              SharePoint <img src={sp} alt="Icon" className="sp-icon" /> -
            </li>
            
            <li className="icon-button">
              ReGiS <i className="bi bi-laptop"></i> -
            </li>
            
            <li className="icon-button">
              E-mail <i className="bi bi-envelope-at-fill"></i> -
            </li>
            
            <li className="icon-button">
              Report <i className="bi bi-file-earmark-ruled"></i>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">
          Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default FlowPage;