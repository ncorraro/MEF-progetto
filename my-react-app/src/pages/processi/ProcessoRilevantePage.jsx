import React from "react";
import { useParams, Link } from "react-router-dom";
import uffici from "../../data/uffici";
import processiRilevanti from "../../data/processiRilevanti";
import { useState } from "react";


const ProcessoRilevantePage = () => {
  const { ufficioId, processoId } = useParams();
  const [activeTab, setActiveTab] = useState("fase1");

  const processo = processiRilevanti.find((p) => p.id === parseInt(processoId));

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
                <p>{processo.funzionamento}</p>
              </div>
            </div>
          </div>
        </div>



      </div>

     
    </div>
  );
};

export default ProcessoRilevantePage;
