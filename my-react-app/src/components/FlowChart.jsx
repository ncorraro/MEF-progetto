import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useParams, useLocation } from "react-router-dom";
import ReactFlow, {  Background,  applyNodeChanges,  applyEdgeChanges,  SmoothStepEdge,  useReactFlow,  Controls} from 'reactflow';
import 'reactflow/dist/style.css';
import {   SquareNode,   SquareNode2,   SquareNode3,   SquareBlueNode,   SquareBlueNode2,   DiamondNode,   DiamondNode2,   TransparentNode } from './nodeComponents';
import {   CustomDashedEdge,   CustomBlueEdge,   CustomBlueLabelEdge,   CustomEdge } from './edgeComponents';

// Import all diagram data directly
// Add more imports here as needed for your diagrams
import * as diagramData1fs101 from '../data/infoProcessi/1fs101.js';
import * as diagramData1fs102 from '../data/infoProcessi/1fs102.js';

// Fallback data for testing - remove in production
const fallbackNodes = [
  { id: '1', type: 'custom', position: { x: 100, y: 100 }, data: { label: 'Test Node 1' } },
  { id: '2', type: 'custom', position: { x: 300, y: 100 }, data: { label: 'Test Node 2' } },
];

const fallbackEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'standard' },
];

const FlowChart = () => {
  // Get route parameters and location for debugging
  const params = useParams();
  const location = useLocation();
  const { processoId, diagramId } = params;
  
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState({});
  const { fitView } = useReactFlow();
  
  // Custom node types definition
  const nodeTypes = useMemo(() => ({
    custom: SquareNode,
    scelta: DiamondNode,
    scelta2: DiamondNode2,
    blue: SquareBlueNode,
    blue2: SquareBlueNode2,
    mancini: SquareNode2,
    custom2: SquareNode3,
    testo: TransparentNode,
  }), []);
  
  // Custom edge types definition
  const edgeTypes = useMemo(() => ({
    smoothstep: SmoothStepEdge,
    dashed: CustomDashedEdge,
    standard: CustomBlueEdge,
    standardLab: CustomBlueLabelEdge,
    scelta: CustomEdge,
  }), []);
  
  // Load diagram data
  useEffect(() => {
    const loadDiagramData = () => {
      setIsLoading(true);
      
      // Collect debug info
      const debug = {
        params,
        pathname: location.pathname,
        diagramId,
        processoId,
        availableDiagrams: ['1fs101', '1fs102'], // Update as you add more
        timestamp: new Date().toISOString()
      };
      setDebugInfo(debug);
      console.log("FlowChart Debug Info:", debug);
      
      // Test for missing diagramId
      if (!diagramId) {
        // Try to extract from URL if not in params
        const urlParts = location.pathname.split('/');
        const lastPart = urlParts[urlParts.length - 1];
        
        if (lastPart && ['1fs101', '1fs102'].includes(lastPart)) {
          // Found valid ID in URL, use it
          debug.extractedId = lastPart;
          loadDiagramById(lastPart, debug);
        } else {
          // No ID found, show error
          setError(`ID del diagramma mancante. URL: ${location.pathname}`);
          setIsLoading(false);
        }
      } else {
        // We have a diagramId, use it
        loadDiagramById(diagramId, debug);
      }
    };
    
    const loadDiagramById = (id, debug) => {
      try {
        // Map of all available diagrams
        const allDiagrams = {
          '1fs101': diagramData1fs101,
          '1fs102': diagramData1fs102,
          // Add more diagrams here as you import them
        };
        
        debug.diagramFound = id in allDiagrams;
        
        // Check if the requested diagram exists in our map
        if (!allDiagrams[id]) {
          setError(`Diagramma "${id}" non trovato. Assicurarsi che sia importato nel componente FlowChart.`);
          setIsLoading(false);
          return;
        }
        
        const diagramData = allDiagrams[id];
        debug.diagramDataKeys = Object.keys(diagramData);
        console.log(`Diagram data for ${id}:`, diagramData);
        
        // Check for different export patterns
        if (diagramData.initialNodes && diagramData.initialEdges) {
          setNodes(diagramData.initialNodes);
          setEdges(diagramData.initialEdges);
          debug.dataFormat = "initialNodes/initialEdges";
        } else if (diagramData.default?.nodes && diagramData.default?.edges) {
          setNodes(diagramData.default.nodes);
          setEdges(diagramData.default.edges);
          debug.dataFormat = "default.nodes/default.edges";
        } else if (diagramData.nodes && diagramData.edges) {
          setNodes(diagramData.nodes);
          setEdges(diagramData.edges);
          debug.dataFormat = "nodes/edges";
        } else if (diagramData.default?.initialNodes && diagramData.default?.initialEdges) {
          setNodes(diagramData.default.initialNodes);
          setEdges(diagramData.default.initialEdges);
          debug.dataFormat = "default.initialNodes/default.initialEdges";
        } else {
          // Handle the case where data is not in expected format
          debug.dataFormat = "unknown";
          
          // Special handling for modules that export arrays differently
          if (Array.isArray(diagramData.initialNodes)) {
            setNodes(diagramData.initialNodes);
            setEdges(diagramData.initialEdges || []);
            debug.dataFormat = "array initialNodes";
          } else if (Array.isArray(diagramData.default)) {
            setNodes(diagramData.default);
            setEdges([]);
            debug.dataFormat = "array default";
          } else {
            setError(`Formato dati non riconosciuto per il diagramma "${id}". Controlla l'esportazione del file.`);
          }
        }
        
        // Update debug info
        setDebugInfo(prevDebug => ({ ...prevDebug, ...debug }));
        
      } catch (err) {
        console.error("Errore nel caricamento del diagramma:", err);
        setError(`Errore nel caricamento del diagramma "${id}": ${err.message}`);
        setDebugInfo(prevDebug => ({ 
          ...prevDebug, 
          error: err.message, 
          errorStack: err.stack 
        }));
      } finally {
        setIsLoading(false);
      }
    };

    loadDiagramData();
  }, [diagramId, processoId, location, params]);
  
  // Adjust view to fit the diagram after loading
  useEffect(() => {
    if (!isLoading && nodes.length > 0) {
      // Short delay to ensure rendering is complete
      setTimeout(() => {
        fitView({ duration: 800, padding: 0.3 });
      }, 500);
    }
  }, [fitView, nodes, isLoading]);
  
  // Node and edge change handlers
  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);
  
  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);
  
  const defaultViewport = { x: 0, y: 0, zoom: 0.2 };
  
  // Loading indicator
  if (isLoading) {
    return (
      <div className="loading text-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Caricamento del diagramma in corso...</span>
        </div>
        <p className="mt-3">Caricamento del diagramma {diagramId ? `"${diagramId}"` : ""}...</p>
      </div>
    );
  }
  
  // Error message with debug info
  if (error) {
    return (
      <div className="error alert alert-danger m-4 p-4">
        <h4 className="alert-heading">Errore di caricamento</h4>
        <p>{error}</p>
        <hr/>
        <div className="mb-0">
          <p>Informazioni di debug:</p>
          <ul>
            <li>URL: {location.pathname}</li>
            <li>Parametri: {JSON.stringify(params)}</li>
            <li>diagramId: {diagramId || 'non definito'}</li>
            <li>processoId: {processoId || 'non definito'}</li>
            <li>Diagrammi disponibili: 1fs101, 1fs102</li>
          </ul>
          <p>
            Verifica che:
            <ol>
              <li>L'URL contenga l'ID del diagramma corretto</li>
              <li>Il componente FlowChart sia utilizzato all'interno di un Router</li>
              <li>Il diagramma sia correttamente importato nel componente</li>
            </ol>
          </p>
        </div>
      </div>
    );
  }
  
  // No nodes after loading
  if (nodes.length === 0) {
    // Use fallback test data
    return (
      <div className="reactflow-wrapper" style={{ height: '70vh', width: '100%' }}>
        <div className="alert alert-warning m-4">
          <h4 className="alert-heading">Dati di esempio</h4>
          <p>Stai visualizzando un diagramma di test perché non sono stati trovati nodi per "{diagramId || 'diagramma mancante'}".</p>
        </div>
        <ReactFlow
          nodes={fallbackNodes}
          edges={fallbackEdges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          defaultViewport={defaultViewport}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    );
  }
  
  return (
    <div className="reactflow-wrapper" style={{ height: '70vh', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        defaultViewport={defaultViewport}
        fitView
      >
        <Background variant="dots" gap={12} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;