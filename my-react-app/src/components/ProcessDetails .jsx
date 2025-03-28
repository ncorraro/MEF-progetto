import React from 'react';
import { Card, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProcessDetails = ({ processo, ufficiCoinvolti }) => {
  // Renderizza una sezione di liste multiple
  const renderMultiList = (title, items, iconClass = 'bi-list-check') => {
    if (!items || items.length === 0) return null;

    return (
      <ListGroup.Item>
        <div className="d-flex align-items-start">
          <div className="me-3" style={{ width: '200px' }}>
            <Badge bg="primary" className="mb-2">{title}</Badge>
          </div>
          <div className="flex-grow-1">
            <ul className="list-unstyled mb-0">
              {items.map((item, index) => (
                <li 
                  key={index} 
                  className="d-flex align-items-center mb-2 text-start"
                >
                  <i className={`bi ${iconClass} me-2 text-primary`}></i>
                  <span className="text-start">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ListGroup.Item>
    );
  };

  // Render offices with links
  const renderOffices = () => {
    if (!ufficiCoinvolti || ufficiCoinvolti.length === 0) return null;

    return (
      <ListGroup.Item className="d-flex align-items-start">
        <div className="me-3" style={{ width: '200px' }}>
          <Badge bg="primary" className="mb-2">Attori IGPNRR</Badge>
        </div>
        <div className="flex-grow-1">
          <ListGroup variant="flush">
            {ufficiCoinvolti.map((uff) => (
              <ListGroup.Item 
                key={uff.id} 
                className="d-flex justify-content-between align-items-center px-0"
              >
                <span className="text-start">Ufficio {uff.numero}</span>
                <Link 
                  to={`/uffici/ufficio/${uff.id}`} 
                  className="btn btn-sm btn-outline-primary"
                >
                  <i className="bi bi-info-circle"></i>
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </ListGroup.Item>
    );
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header className="bg-primary text-white">
        <h5 className="mb-0">Dettagli del Processo</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex">
                <div className="fw-bold me-3" style={{ width: '150px' }}>Frequenza:</div>
                <div className="text-start">{processo.frequenza}</div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <div className="fw-bold me-3" style={{ width: '150px' }}>Missione:</div>
                <div className="text-start">{processo.missione}</div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <div className="fw-bold me-3" style={{ width: '150px' }}>Input:</div>
                <div className="text-start">{processo.input}</div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <div className="fw-bold me-3" style={{ width: '150px' }}>Output:</div>
                <div className="text-start">{processo.output}</div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <ListGroup variant="flush">
                  {renderOffices()}
                </ListGroup>
              </Col>
            </Row>
            
          </Col>
        </Row>
        <Row>
              <Col md={6}>
                <ListGroup variant="flush">
                  {renderMultiList('Altre Strutture', processo.terzi_coinvolti, 'bi-building')}
                </ListGroup>
              </Col>
              <Col md={6}>
                <ListGroup variant="flush">
                  {renderMultiList('Destinatari', processo.destinatari, 'bi-people')}
                </ListGroup>
              </Col>
            </Row>
      </Card.Body>
    </Card>
  );
};

export default ProcessDetails;