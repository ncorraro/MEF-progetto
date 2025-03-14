import React, { useState } from 'react';

const MissionDiagram = () => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-blue-900 p-6 text-white w-full">
      {/* Contenitore principale - forzato a rimanere in riga */}
      <div className="flex flex-row justify-between gap-2">
        
        {/* Missione 1 */}
        <div className="flex-1 relative min-w-0">
          <div className="border border-blue-300 rounded-lg p-2">
            <div className="bg-blue-950 text-white text-center py-2 px-2 rounded-lg mb-3">
              <h2 className="font-bold text-lg">Missione 1</h2>
            </div>
            <p className="text-center font-medium mb-3 text-sm">
              Definire la cornice normativa e abilitare il finanziamento delle Misure
            </p>
            
            {expanded && (
              <>
                <div className="mt-3 mb-3 border-t border-blue-300"></div>
                <div className="bg-blue-700/40 rounded-md p-2 mb-2 text-center text-sm">
                  Creare i percorsi normativi propedeutici all'attuazione degli interventi
                </div>
                <div className="bg-blue-700/40 rounded-md p-2 mb-2 text-center text-sm">
                  Allocare le risorse finanziarie per l'esecuzione degli interventi
                </div>
              </>
            )}
          </div>
          <div className="absolute -bottom-10 left-0 right-0 h-10 overflow-hidden flex justify-center">
            <div className="w-1/2 h-20 border-b-0 border-l-2 border-r-2 border-blue-300"></div>
          </div>
        </div>
        
        {/* Missione 2 */}
        <div className="flex-1 relative min-w-0">
          <div className="border border-blue-300 rounded-lg p-2">
            <div className="bg-blue-950 text-white text-center py-2 px-2 rounded-lg mb-3">
              <h2 className="font-bold text-lg">Missione 2</h2>
            </div>
            <p className="text-center font-medium mb-3 text-sm">
              Gestire l'attuazione del PNRR nel rispetto degli obiettivi
            </p>
            
            {expanded && (
              <>
                <div className="mt-3 mb-2 text-center font-bold">OBIETTIVI</div>
                <div className="bg-blue-700/40 rounded-md p-2 mb-2 text-center text-sm">
                  Agevolare il conseguimento di M&T
                </div>
                <div className="bg-blue-700/40 rounded-md p-2 mb-2 text-center text-sm">
                  Rendicontare la performance alla CE
                </div>
              </>
            )}
          </div>
          <div className="absolute -bottom-10 left-0 right-0 h-10 overflow-hidden flex justify-center">
            <div className="w-1/2 h-20 border-b-0 border-l-2 border-r-2 border-blue-300"></div>
          </div>
        </div>
        
        {/* Missione 3 */}
        <div className="flex-1 relative min-w-0">
          <div className="border border-blue-300 rounded-lg p-2">
            <div className="bg-blue-950 text-white text-center py-2 px-2 rounded-lg mb-3">
              <h2 className="font-bold text-lg">Missione 3</h2>
            </div>
            <p className="text-center font-medium mb-3 text-sm">
              Monitorare l'avanzamento del Piano e informare Istituzioni e cittadini
            </p>
            
            {expanded && (
              <>
                <div className="mt-3 mb-3 border-t border-blue-300"></div>
                <div className="bg-blue-700/40 rounded-md p-2 mb-2 text-center text-sm">
                  Supportare le Istituzioni per il governo strategico del Piano
                </div>
                <div className="bg-blue-700/40 rounded-md p-2 mb-2 text-center text-sm">
                  Comunicare i progressi del Piano verso i cittadini
                </div>
              </>
            )}
          </div>
          <div className="absolute -bottom-10 left-0 right-0 h-10 overflow-hidden flex justify-center">
            <div className="w-1/2 h-20 border-b-0 border-l-2 border-r-2 border-blue-300"></div>
          </div>
        </div>
      </div>
      
      {/* Obiettivi trasversali (visibili solo se espanso) */}
      {expanded && (
        <div className="mt-10">
          <div className="bg-blue-700/30 rounded-md p-2 mb-3 text-center">
            Concorrere alla salvaguardia della stabilità della finanza pubblica
          </div>
          <div className="bg-blue-700/30 rounded-md p-2 mb-3 text-center">
            Favorire le interazioni tra gli attori coinvolti
          </div>
        </div>
      )}
      
      {/* Pulsante Espandi/Comprimi */}
      <div className="flex justify-center mt-8">
        <button 
          onClick={toggleExpand}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
        >
          {expanded ? "Comprimi" : "Espandi"}
        </button>
      </div>
    </div>
  );
};

export default MissionDiagram;