import React from "react";

function Funzionamento({ modelloDiFunzionamento }) {
  if (!Array.isArray(modelloDiFunzionamento) || modelloDiFunzionamento.length === 0) {
    return <p className="text-center">Nessun dato disponibile</p>;
  }

  // Divide l'array in gruppi da 3
  const createRows = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 3) {
      rows.push(items.slice(i, i + 3));
    }
    return rows;
  };

  const rows = createRows(modelloDiFunzionamento);

  return (
    <div className="row mt-2 col1 p-3 rounded-4 shadow">
      {rows.map((rowItems, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {/* Riga dei bottoni */}
          <div className="row d-flex justify-content-center mt-2">
            <div className="d-flex justify-content-center gap-3 w-100">
              {rowItems.map((item, index) => (
                <div 
                  className="card d-flex justify-content-center align-items-center flex-grow-1" 
                  key={index} 
                  style={{ 
                    height: '200px', 
                    maxWidth: '33.33%',
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}
                >
                  <h5 className="coltext1 text-center flex-shrink-0">{item.nome}</h5>
                  <button
                    className="btn col3 text-white d-flex align-self-center mt-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${rowIndex}-${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${rowIndex}-${index}`}
                  >
                    <i className="bi bi-arrow-down-square-fill"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Riga dei contenuti collassabili */}
          <div className="row mt-3">
            <div className="d-flex justify-content-center gap-3 w-100">
              {rowItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-grow-1" 
                  style={{ maxWidth: '33.33%' }}
                >
                  <div 
                    className="collapse" 
                    id={`collapse${rowIndex}-${index}`}
                  >
                    <div className="card card-body custom-text w-100">
                      {item.descrizione}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Funzionamento;