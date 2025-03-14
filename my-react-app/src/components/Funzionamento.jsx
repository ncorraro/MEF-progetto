import React from "react";

function Funzionamento({ modelloDiFunzionamento }) {
  return (
    <div className="row mt-2 col1 p-3 rounded-4 shadow">
      {/* Sezione con i pulsanti equamente distanziati */}
      <div className="row d-flex justify-content-center mt-2">
          {/* Genera i pulsanti in base agli elementi di modelloDiFunzionamento */}
          {modelloDiFunzionamento.map((item, index) => (
            <div className="col">
                <div className="card p-3 ">
                    <h5 className="coltext1">{item.titolo}</h5>
                    <button key={index}  className="btn col3 text-white  d-flex align-self-center" type="button"  data-bs-toggle="collapse"    data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`} style={{ maxWidth: "15%", height: "auto" }}>
                        <i className="bi bi-arrow-down-square-fill"></i>
                    </button>
                </div>
               
            </div>
            
          ))}
        
      </div>

      {/* Sezione con i testi collapsabili */}
      <div className="row">
        {/* Genera le sezioni di testo in base agli elementi di modelloDiFunzionamento */}
        {modelloDiFunzionamento.map((item, index) => (
          <div className="col-4 mt-3" key={index}>
            <div className="collapse" id={`collapse${index}`}>
              <div
                className="card card-body custom-text "           >
                {item.descrizione}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funzionamento;
