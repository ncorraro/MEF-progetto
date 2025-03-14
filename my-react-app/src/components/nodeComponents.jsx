import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Button, Modal } from 'react-bootstrap';
import { Overlay, Popover } from 'react-bootstrap';
import {  useRef } from 'react';
import sp from "../image/sp.png"; 



import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// Componente per il bottone Info con un Modal
const InfoButton = ({ info, label }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Button
        className="btn bi bi-info d-flex justify-content-center align-items-center info-button"
        onClick={toggleModal}
      />
      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Dettagli del {label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{info}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


const PopoverButton = ({ raci }) => {
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);
  const [show, setShow] = useState(false);

  const togglePopover = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    if (show && popoverRef.current && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const parentRect = buttonRef.current.offsetParent.getBoundingClientRect(); // Otteniamo il container del nodo

      const popover = popoverRef.current;
      const popoverHeight = popover.offsetHeight;

      popover.style.position = "absolute";
      popover.style.top = `${buttonRect.top - parentRect.top - popoverHeight - 5}px`; // Posiziona sopra il bottone
      popover.style.left = `${buttonRect.left - parentRect.left + buttonRect.width / 2}px`;
      popover.style.transform = "translateX(-50%)";
    }
  }, [show]);

  return (
    <div className="position-relative d-inline-block">
      <Button
        ref={buttonRef}
        className="btn bi bi-three-dots d-flex justify-content-center align-items-center info-button"
        onClick={togglePopover}
        disabled={!raci}
      />
      {show && (
        <div
          ref={popoverRef}
          className="popover fade show bg-light border p-2 shadow rounded"
          style={{ zIndex: 1000 }}
        >
          <div className="popover-header">Info</div>
          <div className="popover-body">{raci}</div>
        </div>
      )}
    </div>
  );
};




export const SquareNode = ({ data }) => (
  <div className="nodo card shadow relative flex flex-col items-center justify-center p-3">
    
    {/* Icona in alto a destra */}
    <div className="icon-button position-absolute top-0 end-0 m-2">
      <InfoButton info={data.info} label={data.label} />
    </div>

    {/* Icona in alto a sinistra */}
    <div className="icon-button position-absolute top-0 start-0 m-2">
      <PopoverButton raci={data.raci} />
    </div>

    {/* Testo al centro */}
    <div className="text-center mt-4 mb-3">
      <p>{data.label}</p>
    </div>

    {/* Se data.sp o data.pc sono true, mostra le icone in basso */}
    <ul className="list-unstyled d-flex position-absolute bottom-0 mb-2 mt-3 gap-2">
      {data.sp && (
        <li className="icon-button">
          <img src={sp} alt="Icon" className="sp-icon" />
        </li>
      )}
      {data.pc && (
        <li className="icon-button">
          <i className="bi bi-laptop"></i>
        </li>
      )}
      {data.email && (
        <li className="icon-button">
          <i className="bi bi-envelope-at-fill"></i>
        </li>
      )}

    {data.report && (
        <li className="icon-button">
          <i className="bi bi-file-earmark-ruled"></i>
        </li>
      )}

    </ul>

  
    {/* Handle per le connessioni */}
    <Handle type="source" position={Position.Right} id="right-handle" />
    <Handle type="target" position={Position.Left} id="left-handle" />
    <Handle type="target" position={Position.Top} id="top-handle" style={{ left: '50%', top: '-8px' }} />
    <Handle type="target" position={Position.Bottom} id="bottom-handle" style={{ left: '50%', top: 'calc(100% + 8px)' }} />

  </div>
);



export const SquareNode2 = ({ data }) => (
  <div className="nodo card shadow  relative flex flex-col items-center justify-center">
        {/* Icona in alto a destra */}
        <div className="icon-button position-absolute top-0 end-0 m-2">
      <InfoButton info={data.info} label={data.label} />
    </div>

    {/* Icona in alto a sinistra */}
    <div className="icon-button position-absolute top-0 start-0 m-2">
      <PopoverButton raci={data.raci} />
    </div>

    {/* Testo al centro */}
    <div className="text-center mt-4 mb-3">
      <p>{data.label}</p>
    </div>

    {/* Se data.sp o data.pc sono true, mostra le icone in basso */}
    <ul className="list-unstyled d-flex position-absolute bottom-0 mb-2 mt-3 gap-2">
      {data.sp && (
        <li className="icon-button">
          <img src={sp} alt="Icon" className="sp-icon" />
        </li>
      )}
      {data.pc && (
        <li className="icon-button">
          <i className="bi bi-laptop"></i>
        </li>
      )}
      {data.email && (
        <li className="icon-button">
          <i className="bi bi-envelope-at-fill"></i>
        </li>
      )}

    {data.report && (
        <li className="icon-button">
          <i className="bi bi-file-earmark-ruled"></i>
        </li>
      )}



    </ul>

    <Handle type="target" position={Position.Right} id="right-handle" />
    <Handle type="source" position={Position.Left} id="left-handle" />
    <Handle type="target" position={Position.Top} id="top-handle" style={{ left: '50%', top: '-8px' }} />
    <Handle type="source" position={Position.Bottom} id="bottom-handle" style={{ left: '50%', top: 'calc(100% + 8px)' }} />
  </div>
);

export const SquareNode3 = ({ data }) => (
  <div className="nodo card shadow  relative flex flex-col items-center justify-center">
       {/* Icona in alto a destra */}
    <div className="icon-button position-absolute top-0 end-0 m-2">
      <InfoButton info={data.info} label={data.label} />
    </div>

    {/* Icona in alto a sinistra */}
    <div className="icon-button position-absolute top-0 start-0 m-2">
      <PopoverButton raci={data.raci} />
    </div>

    {/* Testo al centro */}
    <div className="text-center mt-4 mb-3">
      <p>{data.label}</p>
    </div>

    {/* Se data.sp o data.pc sono true, mostra le icone in basso */}
    <ul className="list-unstyled d-flex position-absolute bottom-0 mb-2 mt-3 gap-2">
      {data.sp && (
        <li className="icon-button">
          <img src={sp} alt="Icon" className="sp-icon" />
        </li>
      )}
      {data.pc && (
        <li className="icon-button">
          <i className="bi bi-laptop"></i>
        </li>
      )}
      {data.email && (
        <li className="icon-button">
          <i className="bi bi-envelope-at-fill"></i>
        </li>
      )}

    {data.report && (
        <li className="icon-button">
          <i className="bi bi-file-earmark-ruled"></i>
        </li>
      )}



    </ul>

    <Handle type="source" position={Position.Right} id="right-handle" />
    <Handle type="target" position={Position.Left} id="left-handle" />
    <Handle type="target" position={Position.Top} id="top-handle" style={{ left: '50%', top: '-8px' }} />
    <Handle type="source" position={Position.Bottom} id="bottom-handle" style={{ left: '50%', top: 'calc(100% + 8px)' }} />
  </div>
);

export const SquareBlueNode = ({ data }) => (
  <div className="nodo col1 text-white card shadow relative flex flex-col items-center justify-center mb-4" >
     {/* Icona in alto a destra */}
     <div className="icon-button position-absolute top-0 end-0 m-2">
      <InfoButton info={data.info} label={data.label} />
    </div>

    {/* Icona in alto a sinistra */}
    <div className="icon-button position-absolute top-0 start-0 m-2">
      <PopoverButton raci={data.raci} />
    </div>

    {/* Testo al centro */}
    <div className="text-center mt-4 mb-3">
      <p>{data.label}</p>
    </div>

    {/* Se data.sp o data.pc sono true, mostra le icone in basso */}
    <ul className="list-unstyled d-flex position-absolute bottom-0 mb-2 mt-3 gap-2">
      {data.sp && (
        <li className="icon-button">
          <img src={sp} alt="Icon" className="sp-icon" />
        </li>
      )}
      {data.pc && (
        <li className="icon-button">
          <i className="bi bi-laptop"></i>
        </li>
      )}
      {data.email && (
        <li className="icon-button">
          <i className="bi bi-envelope-at-fill"></i>
        </li>
      )}

    {data.report && (
        <li className="icon-button">
          <i className="bi bi-file-earmark-ruled text-white"></i>
        </li>
      )}



    </ul>
   
    <Handle type="source" position={Position.Right} id="right-handle" />
    <Handle type="target" position={Position.Left} id="left-handle" />
    <Handle type="source" position={Position.Top} id="top-handle" style={{ left: '50%', top: '-8px' }} />
    <Handle type="target" position={Position.Bottom} id="bottom-handle" style={{ left: '50%', top: 'calc(100% + 8px)' }} />
  </div>
);

export const SquareBlueNode2 = ({ data }) => (
  <div className="nodo col1 text-white card shadow relative flex flex-col items-center justify-center mb-4" >
      {/* Icona in alto a destra */}
      <div className="icon-button position-absolute top-0 end-0 m-2">
      <InfoButton info={data.info} label={data.label} />
    </div>

    {/* Icona in alto a sinistra */}
    <div className="icon-button position-absolute top-0 start-0 m-2">
      <PopoverButton raci={data.raci} />
    </div>

    {/* Testo al centro */}
    <div className="text-center mt-4 mb-3">
      <p>{data.label}</p>
    </div>

    {/* Se data.sp o data.pc sono true, mostra le icone in basso */}
    <ul className="list-unstyled d-flex position-absolute bottom-0 mb-2 mt-3 gap-2">
      {data.sp && (
        <li className="icon-button">
          <img src={sp} alt="Icon" className="sp-icon" />
        </li>
      )}
      {data.pc && (
        <li className="icon-button">
          <i className="bi bi-laptop"></i>
        </li>
      )}
      {data.email && (
        <li className="icon-button">
          <i className="bi bi-envelope-at-fill"></i>
        </li>
      )}

    {data.report && (
        <li className="icon-button">
          <i className="bi bi-file-earmark-ruled text-white"></i>
        </li>
      )}



    </ul>
   
    <Handle type="target" position={Position.Right} id="right-handle" />
    <Handle type="source" position={Position.Left} id="left-handle" />
    <Handle type="source" position={Position.Top} id="top-handle" style={{ left: '50%', top: '-8px' }} />
    <Handle type="source" position={Position.Bottom} id="bottom-handle" style={{ left: '50%', top: 'calc(100% + 8px)' }} />
  </div>
);



export const DiamondNode = ({ data }) => (
  <div className="relative flex items-center justify-center  ">
    <div className='diamond-container'>
      
      <span className='text-white'
        style={{
          display: 'inline-block',
          transform: 'rotate(-45deg)',
          whiteSpace: 'normal',
          textAlign: 'center',
          width: '80px', // Ridurre la larghezza del testo
          fontSize: '10px' // Ridurre la dimensione del testo
          
        }}
      >
        {data.label}
      </span>
    </div>

    <Handle type="source" position={Position.Right} id="right-handle" style={{ left: 'calc(100% + 5px)' }} />
    <Handle type="target" position={Position.Left} id="left-handle" style={{ left: '-10px' }} />
    <Handle type="source" position={Position.Top} id="top-handle" style={{ left: '50%', top: '-10px' }} />
    <Handle type="source" position={Position.Bottom} id="bottom-handle" style={{ left: '50%', top: 'calc(100% + 5px)' }} />
  </div>
);

export const DiamondNode2 = ({ data }) => (
  <div className="relative flex items-center justify-center  ">
    <div className='diamond-container'>
      
      <span className='text-white'
        style={{
          display: 'inline-block',
          transform: 'rotate(-45deg)',
          whiteSpace: 'normal',
          textAlign: 'center',
          width: '80px', // Ridurre la larghezza del testo
          fontSize: '10px' // Ridurre la dimensione del testo
          
        }}
      >
        {data.label}
      </span>
    </div>

    <Handle type="source" position={Position.Right} id="right-handle" style={{ left: 'calc(100% + 5px)' }} />
    <Handle type="source" position={Position.Left} id="left-handle" style={{ left: '-10px' }} />
    <Handle type="target" position={Position.Top} id="top-handle" style={{ left: '50%', top: '-10px' }} />
    <Handle type="source" position={Position.Bottom} id="bottom-handle" style={{ left: '50%', top: 'calc(100% + 5px)' }} />
  </div>
);



export const TransparentNode = ({ data }) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#093596', // Sfondo trasparente
        color: 'white', // Scritta blu
        border: '2px solid blue', // Aggiungi un bordo blu opzionale
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        
      }}
    >
      {data.label} {/* Inserisci il testo del nodo */}

      <Handle type="source" position={Position.Right} id="right-handle" />
    <Handle type="target" position={Position.Left} id="left-handle" />
    <Handle type="source" position={Position.Top} id="top-handle" style={{ left: '50%', top: '-8px' }} />
    <Handle type="target" position={Position.Bottom} id="bottom-handle" style={{ left: '50%', top: 'calc(100% + 8px)' }} />
    </div>
  );
};