import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../image/Picture1.png"; 
import processiCore from "./../data/processiCore";
import processiVerticali from "./../data/processiVerticali";
import processiRilevanti from "./../data/processiRilevanti";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ufficiDropdownOpen, setUfficiDropdownOpen] = useState(false);
  const [processiDropdownOpen, setProcessiDropdownOpen] = useState(false);
  const searchDropdownRef = useRef(null);
  const ufficiDropdownRef = useRef(null);
  const processiDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (ufficiDropdownRef.current && !ufficiDropdownRef.current.contains(event.target)) {
        setUfficiDropdownOpen(false);
      }
      if (processiDropdownRef.current && !processiDropdownRef.current.contains(event.target)) {
        setProcessiDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Funzione per cercare nei dataset
  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term.length > 2) {
      const allProcesses = [...processiCore, ...processiVerticali, ...processiRilevanti];

      const results = allProcesses.filter((processo) =>
        processo.nome.toLowerCase().includes(term.toLowerCase())
      );

      setFilteredResults(results);
      setDropdownOpen(true);
    } else {
      setFilteredResults([]);
      setDropdownOpen(false);
    }
  };

  // Toggle function for Uffici dropdown
  const toggleUfficiDropdown = () => {
    setUfficiDropdownOpen(!ufficiDropdownOpen);
  };

  // Toggle function for Processi dropdown
  const toggleProcessiDropdown = () => {
    setProcessiDropdownOpen(!processiDropdownOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow px-3 ${scrolled ? "navbar-medium" : "navbar-large"} col1`}>
      <div className="container-fluid">
        <div className="d-flex">
          {/* Logo separato */}
          <div className="me-3">
            <img src={logo} alt="Logo" className={`logo ${scrolled ? "logo-medium" : "logo-large"}`} />
          </div>
          
          {/* Scritta MEF con bottoni sotto */}
          <div className="d-flex flex-column">
            {/* Testo MEF */}
            <p className="text-white mt-3 mb-1">MEF-Ragioneria Generale dello Stato</p>

            {/* Bottoni sotto la scritta MEF */}
            <div className="d-flex gap-1">
              <Link to="/" className="btn btn-light coltext1">Home</Link>
              
              {/* Dropdown Uffici */}
              <div className="dropdown" ref={ufficiDropdownRef}>
                <button 
                  className="btn btn-light dropdown-toggle coltext1" 
                  type="button" 
                  onClick={toggleUfficiDropdown}
                  aria-expanded={ufficiDropdownOpen}
                >
                  Uffici
                </button>
                <ul className={`dropdown-menu ${ufficiDropdownOpen ? 'show' : ''}`}>
                  {Array.from({ length: 8 }, (_, i) => (
                    <li key={i}>
                      <Link 
                        to={`/uffici/ufficio/${i + 1}`} 
                        className="dropdown-item"
                        onClick={() => setUfficiDropdownOpen(false)}
                      >
                        Ufficio {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dropdown Processi */}
              <div className="dropdown" ref={processiDropdownRef}>
                <button 
                  className="btn btn-light dropdown-toggle coltext1" 
                  type="button" 
                  onClick={toggleProcessiDropdown}
                  aria-expanded={processiDropdownOpen}
                >
                  Processi
                </button>
                <ul className={`dropdown-menu ${processiDropdownOpen ? 'show' : ''}`}>
                  <li>
                    <Link 
                      to="/processi/processiCore" 
                      className="dropdown-item"
                      onClick={() => setProcessiDropdownOpen(false)}
                    >
                      Processi Core
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/processi/processiVerticali" 
                      className="dropdown-item"
                      onClick={() => setProcessiDropdownOpen(false)}
                    >
                      Processi Verticali
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/processi/processiRilevanti" 
                      className="dropdown-item"
                      onClick={() => setProcessiDropdownOpen(false)}
                    >
                      Processi Rilevanti
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {/* Barra di ricerca con dropdown */}
          <div className="position-relative" ref={searchDropdownRef}>
            <input
              className="form-control"
              type="text"
              placeholder="Cerca processi..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {dropdownOpen && filteredResults.length > 0 && (
              <ul className="dropdown-menu show" style={{ width: "100%", position: "absolute", top: "100%", maxHeight: "200px", overflowY: "auto" }}>
                {filteredResults.map((processo) => (
                  <li key={processo.id}>
                    <Link 
                      to={
                        processo.tipo === "core"
                          ? `/processi/processiCore/processo/${processo.id}`
                          : processo.tipo === "verticale"
                          ? `/processi/processiVerticali/processo/${processo.id}`
                          : `/processi/processiRilevanti/processo/${processo.id}`
                      } 
                      className="dropdown-item border" 
                      style={{ whiteSpace: "normal", overflow: "hidden", wordWrap: "break-word" }}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span style={{ fontSize: 12 }}>{processo.nome}</span> <span className="badge bg-primary ms-2">{processo.tipo}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;