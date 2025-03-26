import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../Footer";
import CardComponent from "../../components/CardComponent";


const ProcessiPage = () => {
    // Stile per la card Processi Core
    const coreCardStyle = {
        transition: "all 0.3s ease",
        background: "linear-gradient(135deg, #093596, #2a5cbf)"
    };

    // Stile per le card Processi Verticali e Rilevanti (semi-trasparente)
    const secondaryCardStyle = {
        transition: "all 0.3s ease",
        background: "linear-gradient(135deg, rgba(9, 53, 150, 0.7), rgba(42, 92, 191, 0.7))"
    };

    // Funzioni di evento hover per Processi Core
    const handleCoreMouseEnter = (e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, #2a5cbf, #093596)";
    };

    const handleCoreMouseLeave = (e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, #093596, #2a5cbf)";
    };

    // Funzioni di evento hover per Processi Verticali e Rilevanti (semi-trasparente)
    const handleSecondaryMouseEnter = (e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, rgba(42, 92, 191, 0.1), rgba(9, 53, 150, 0.7))";
    };

    const handleSecondaryMouseLeave = (e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, rgba(9, 53, 150, 0.7), rgba(42, 92, 191, 0.7))";
    };

    return (
      <>
        <div className="container-fluid p-0 ">
          <div className="p-4">
            
            <div className="row rounded-3">
                {/* Card Processi Core con animazione */}
                <div 
                    className="col card m-2 rounded-4 text-white" 
                    style={coreCardStyle}
                    onMouseEnter={handleCoreMouseEnter}
                    onMouseLeave={handleCoreMouseLeave}
                >
                    <h1 className="text-start custom-text" style={{ fontSize: 80 }}>Processi Core</h1>
                    <div className="row">
                        <div className="col">
                            <p className="custom-text" style={{fontSize:12}}>I processi core dell'Ispettorato si configurano come un complesso di soluzioni organizzativo-operative attraverso il quale l'IGPNRR assolve alle proprie missioni. Nel loro complesso, i processi core risultano interconnessi configurando un modello di funzionamento nell'ambito del quale la cooperazione tra gli Uffici e lo scambio di dati e informazioni rappresenta uno degli elementi critici per l'efficacia dell'azione dell'Ispettorato.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <Link to={`/processi/processiCore`} className="btn btn-light">
                                <i className="bi bi-info-square-fill"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col m-2 bg-photo3 p-4 rounded-4">
                    <div className="row mb-2">
                        {/* Card Processi Verticali con animazione semi-trasparente */}
                        <div 
                            className="col card mb-2 text-white" 
                            style={secondaryCardStyle}
                            onMouseEnter={handleSecondaryMouseEnter}
                            onMouseLeave={handleSecondaryMouseLeave}
                        >
                            <div className="row mb-2">
                                <div className="col">
                                    <h3 className="text-start">Processi Verticali</h3>
                                </div>
                                <div className="col-3 d-flex justify-content-end">
                                    <Link to={`/processi/processiVerticali`} className="btn btn-light">
                                        <i className="bi bi-info-square-fill"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="custom-text" style={{fontSize:12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ero ligula iaculis, pharetra purus vitae, maximus elit. Aliquam imperdiet commodo ligula, vitae tempor turpis vehicula et. Curabitur finibus dictum nu</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Card Processi Rilevanti con animazione semi-trasparente */}
                        <div 
                            className="col card text-white" 
                            style={secondaryCardStyle}
                            onMouseEnter={handleSecondaryMouseEnter}
                            onMouseLeave={handleSecondaryMouseLeave}
                        >
                            <div className="row mb-2">
                                <div className="col">
                                    <h3 className="text-start">Processi Rilevanti</h3>
                                </div>
                                <div className="col-3 d-flex justify-content-end">
                                    <Link to={`/processi/processiRilevanti`} className="btn btn-light">
                                        <i className="bi bi-info-square-fill"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="custom-text" style={{fontSize:12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ero ligula iaculis, pharetra purus vitae, maximus elit. Aliquam imperdiet commodo ligula, vitae tempor turpis vehicula et. Curabitur finibus dictum nu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
}

export default ProcessiPage;