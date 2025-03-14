import React from "react";
import { useParams } from "react-router-dom";
import uffici from "../data/uffici";
import processiCore from"../data/processiCore";
import processiRilevanti from "../data/processiRilevanti";
import processiVerticali from "../data/processiVerticali";
import core from "../image/img1.png"; 
import noncore from "../image/img2.png"; 


import { Link } from "react-router-dom";  



const UfficioPage = () => {
  const { id } = useParams(); // Prende l'ID dall'URL
  const ufficio = uffici.find((u) => u.id === parseInt(id));
  

  if (!ufficio) {
    return <h2 className="text-center">Ufficio non trovato!</h2>;
  }


  // Recupera i processi dell'ufficio
  const processiCoreUfficio = processiCore.filter((p) => ufficio.processiCore.includes(p.id));
  const processiVerticaliUfficio = processiVerticali.filter((p) => ufficio.processiVerticali.includes(p.id));
  const processiRilevantiUfficio = processiRilevanti.filter((p) => ufficio.processiRilevanti.includes(p.id));


  
  // Recupera le attività dell'ufficio


  return (
    <div className="container mt-4 card">
      {/* Intestazione Ufficio */}
      <div className="text-start text-white mb-4 bg-info card shadow-sm bg-photo3 ">
        <h1 className="display-2 ">Ufficio {ufficio.numero} : {ufficio.nome}</h1>
      </div>
      <div className=" custom-text  coltext1   ">
        <p style={{ fontSize: 12 }} >{ufficio.descrizione}</p>
      </div>



     
      <div className="container mt-3">
        <div className="row mb-4 col1 custom-card-blu p-3 rounded-4 align-items-center">
          {/* Colonna Processi Core */}
          <div className="col-md-7 coltext1 p-4">
           
              <div className=" coltext1">
                <h4>Processi Core</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {processiCoreUfficio.map((processo) => (
                    <li className="card p-2 mb-3 shadow" key={processo.id}>
                      <div className="card-body d-flex align-items-center justify-content-between gap-3">
                        <i className="bi  bi-cpu-fill fs-4 text-primary"></i>
                        <p className="card-text flex-grow-1 m-0 text-center">{processo.nome}</p>
                        
                        <Link
                          to={`/ufficio/${ufficio.id}/processo/${processo.id}`}  // Link alla pagina del processo
                          className="btn col1 btn-sm d-flex align-items-center text-white">
                          Vai al processo <i className="bi bi-arrow-right-square-fill text-white fs-6 ms-2"></i>
                        </Link>

                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            
          </div>
          <div className="col-md-5 text-white rounded-4 p-4 d-flex justify-content-center align-items-center">
        <img src={core} alt="Logo" className="img-fluid" style={{ maxWidth: "80%", height: "auto" }} />
      </div>
        </div>

        <div className="row custom-card-blu rounded-4">
                    {/* Colonna Processi Verticali */}

        <div className="col-md-6 p-4">
            
              <div className="  coltext1">
                <h4>Processi Verticali</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {processiVerticaliUfficio.map((processo) => (
                    <li className="card p-2 mb-3 shadow" key={processo.id}>
                      <div className="card-body d-flex align-items-center justify-content-between gap-3">
                        <i className="bi  bi-distribute-vertical fs-4 text-primary"></i>
                        <p className="card-text flex-grow-1 m-0 text-center">{processo.nome}</p>
                        
                        <Link
                          to={`/ufficio/${ufficio.id}/processoVerticale/${processo.id}`}  // Link alla pagina del processo
                          className="btn col1 btn-sm d-flex align-items-center text-white"style={{ fontSize: 10 }}>
                          Vai al processo <i className="bi bi-arrow-right-square-fill text-white fs-5 ms-2"></i>
                          </Link>

                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            
          </div>
                    {/* Colonna Processi rilevanti */}

          <div className="col-md-6 p-4">
            
              <div className="coltext1">
                <h4>Processi Rilevanti</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {processiRilevantiUfficio.map((processo) => (
                    <li className="card p-2 mb-3 shadow" key={processo.id}>
                      <div className="card-body d-flex align-items-center justify-content-between gap-3">
                        <i className="bi  bi-aspect-ratio fs-4 text-primary"></i>
                        <p className="card-text flex-grow-1 m-0 text-center">{processo.nome}</p>
                        
                        <Link
                          to={`/ufficio/${ufficio.id}/processoRilevante/${processo.id}`}  // Link alla pagina del processo
                          className="btn col1 btn-sm d-flex align-items-center text-white"style={{ fontSize: 10 }}>
                          Vai al processo <i className="bi bi-arrow-right-square-fill text-white fs-5 ms-2"></i>
                          </Link>

                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            
             </div>
            </div>


      <div className=" custom-text  coltext1  mt-3   ">
        <p  style={{ fontSize: 12 }}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
      </div>

        {/* Pulsante per tornare alla Home */}
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
