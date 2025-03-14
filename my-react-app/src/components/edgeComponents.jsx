import React, { useState, useCallback } from 'react';
import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath } from 'reactflow';
import { getBezierPath,} from '@xyflow/react';
// Helper component to render the edge label
function EdgeLabel({ transform, label }) {
  return (
    <div
      style={{
        position: 'absolute',
        background: 'blue', // Sfondo blu
        color: 'white', // Testo bianco
        padding: '4px 8px',
        borderRadius: '8px',
        fontSize: '10px',
        border: '2px solid white', // Bordo bianco
        boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.2)', // Ombra per contrasto
        zIndex: 10, // Porta l'etichetta sopra i nodi
        transform,
        whiteSpace: 'nowrap', // Evita il wrapping del testo
      }}
      className="nodrag nopan"
    >
      {label}
    </div>
  );
}


export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) => {
  // Usa getSmoothStepPath per ottenere un percorso fluido (smoothstep)
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      {/* Renderizza l'edge con il percorso smoothstep */}
      <BaseEdge id={id} path={edgePath} style={{ stroke: 'blue', strokeWidth: 2 }} markerEnd="url(#arrow)" />

      {/* Aggiungi una freccia blu alla fine dell'edge */}
      <svg>
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="10"
            refY="5"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0,0 L10,5 L0,10" fill="blue" />
          </marker> 
        </defs>
      </svg>

      {/* Renderizza le etichette all'inizio e alla fine */}
      <EdgeLabelRenderer>
        {data.startLabel && (
          <EdgeLabel
            transform={`translate(-10%, -70%) translate(${sourceX}px,${sourceY}px)`}
            label={data.startLabel}
          />
        )}
        {data.endLabel && (
          <EdgeLabel
            transform={`translate(-50%, -100%) translate(${targetX}px,${targetY}px)`}
            label={data.endLabel}
          />
        )}
      </EdgeLabelRenderer>
    </>
  );
};



export const CustomBlueLabelEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data }) => {
  // Usa getSmoothStepPath per creare il percorso dell'edge
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  // Calcola il punto medio del segmento tra source e target per posizionare l'etichetta sopra
  const midX = (sourceX + targetX) / 2;
  const midY = (sourceY + targetY) / 2;

  return (
    <>
      {/* Linea curva smoothstep con colore blu */}
      <BaseEdge id={id} path={edgePath} style={{ stroke: 'blue', strokeWidth: 2 }} markerEnd="url(#arrow)" />

      {/* Freccia blu alla fine dell'arco */}
      <svg>
        <defs>
          <marker id={`arrow-${id}`} markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L10,5 L0,10" fill="blue" />
          </marker>
        </defs>
      </svg>

      {/* Etichetta sopra il segmento, centrata sul percorso */}
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${midX}px, ${midY}px)`,
            background: 'blue',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
          className="nodrag nopan"
        >
          {data?.label || 'Edge Label'}
        </div>
      </EdgeLabelRenderer>
    </>
  );
};





export const CustomBlueEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) => {
  // Usa getSmoothStepPath per un comportamento smoothstep
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      {/* Linea curva smoothstep con colore blu */}
      <BaseEdge id={id} path={edgePath} style={{ stroke: 'blue', strokeWidth: 2 }} markerEnd="url(#arrow)" />

      {/* Freccia blu alla fine dell'arco */}
      <svg>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L10,5 L0,10" fill="blue" />
          </marker>
        </defs>
      </svg>
    </>
  );
};



export const CustomDashedEdge = (props) => {
    const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;
  
    // Usa getSmoothStepPath per un edge curvo
    const [edgePath] = getSmoothStepPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourcePosition,
      targetPosition,
      borderRadius: 20, // Arrotondamento della curva
    });
  
    return (
      <>
        {/* Definizione della freccia SVG */}
        <svg style={{ position: 'absolute' }}>
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="5"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path d="M0,0 L10,5 L0,10 Z" fill="#e74c3c" />
            </marker>
          </defs>
        </svg>
  
        <BaseEdge
          path={edgePath}
          style={{
            strokeDasharray: '8,4',
            stroke: '#e74c3c',
            animation: 'dash-animation 1.5s linear infinite',
          }}
          markerEnd="url(#arrow)" // Aggiunge la freccia alla fine
        />
  
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              padding: '4px',
              borderRadius: '4px',
            }}
          >
          </div>
        </EdgeLabelRenderer>
  
        {/* CSS per l'animazione */}
        <style>
          {`
            @keyframes dash-animation {
              to {
                stroke-dashoffset: -20;
              }
            }
          `}
        </style>
      </>
    );
  };


  