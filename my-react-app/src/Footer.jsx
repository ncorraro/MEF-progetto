import logo from "./image/Picture1.png"; 
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="container mt-4 col1 rounded-2 shadow">
                <div className="row p-2">
                    {/* Logo e nome */}
                    <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={logo} alt="Logo" style={{ maxWidth: "40%", height: "auto" }} />
                            <span className="text-white ms-2">MEF Ragioneria Generale dello Stato</span>
                        </div>
                        <button className="btn btn-light btn-sm mt-2">
                             <Link to={`/disposizioni`} className="btn btn-sm coltext1">Quadro normativo</Link>
                        </button>
                    </div>

                    {/* Colonna Uffici */}
                    <div className="col-3 mt-2">
                        <h5 className="text-white text-start"> <i className="bi bi-building"></i> Uffici </h5>
                        <div className="row mt-3" style={{ fontSize: 14 }}>
                            {/* Colonna Sinistra */}
                            <div className="col-6 text-start">
                                <div className="mb-4">
                                    <Link to={`/uffici/ufficio/1`} className="text-white">Ufficio I</Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/uffici/ufficio/2`} className="text-white">Ufficio II</Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/uffici/ufficio/3`} className="text-white">Ufficio III</Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/uffici/ufficio/4`} className="text-white">Ufficio IV</Link>
                                </div>
                            </div>

                            {/* Colonna Destra */}
                            <div className="col-6 text-start">
                                <div className="mb-4">
                                    <Link to={`/uffici/ufficio/5`} className="text-white">Ufficio V</Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/uffici/ufficio/6`} className="text-white">Ufficio VI</Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/uffici/ufficio/7`} className="text-white">Ufficio VII</Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/uffici/ufficio/8`} className="text-white">Ufficio VIII</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonna Processi */}
                    <div className="col mt-2">
                        <h5 className="text-white text-start"><i className="bi bi-bar-chart-steps"></i> Processi </h5>
                        <div className="row mt-3" style={{ fontSize: 14 }}>
                            <div className="col-12 text-start">
                                <div className="mb-4">
                                    <Link to={`/processi/processiCore`} className="text-white">
                                        Processi Core
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/processi/processiVerticali`} className="text-white">
                                        Precessi Verticali
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/processi/processiRilevanti`} className="text-white">
                                        Processi Rilevanti
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonna Missioni */}
                    <div className="col mt-2">
                        <h5 className="text-white text-start"> <i className="bi bi-box-arrow-in-down-right"></i> Missioni </h5>
                        <div className="row mt-3" style={{ fontSize: 14 }}>
                            <div className="col-12 text-start">
                                <div className="mb-4">
                                    <Link to={`/processi/processiCore`} className="text-white">
                                        Processi Core
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/processi/processiVerticali`} className="text-white">
                                        Precessi Verticali
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`/processi/processiRilevanti`} className="text-white">
                                        Processi Rilevanti
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonna Contatti */}
                    <div className="col mt-2">
                        <h5 className="text-white text-start"><i className="bi bi-person-lines-fill"></i> Contatti </h5>
                        <div className="row mt-3" style={{ fontSize: 14 }}>
                            <div className="col-12 text-start">
                                <div className="mb-4 text-white">
                                    Centralino +39 06476111
                                </div>
                                <div className="mb-4">
                                    <Link to={`https://www.mef.gov.it/comunica-con-noi/linea-diretta-cittadini/urp.html#cont1`} className="text-white">
                                        URP
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`https://www.mef.gov.it/ministro-uffici/uffici/uffici.html#cont3`} className="text-white">
                                        Ufficio Stampa
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`https://www.mef.gov.it/comunica-con-noi/contatti-recapiti/contatti-mef.html#cont8`} className="text-white">
                                        Elenco PEC
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <Link to={`https://www.mef.gov.it/comunica-con-noi/seguici/social-mef.html#cont5`} className="text-white">
                                        Feed RSS
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;