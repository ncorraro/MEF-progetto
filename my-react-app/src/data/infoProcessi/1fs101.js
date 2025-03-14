export const initialNodes = [
  { id: '1', type: 'custom', position: { x: 0, y: 0 }, data: { label: "Presa in Carico Della Richiesta" ,raci:"info aggiuntive della raci ",sp:true,pc:true,email:true,report:true}  },
  { id: '2', type: 'custom', position: { x: 250, y: -9 }, data: { label: "Avvio dell’istruttoria tramite strumenti di verifica*"  ,raci:"info aggiuntive della raci "}  },
  { id: '3', type: 'scelta', position: { x: 520, y: 3.5 }, data: { label: "Esito positivo dell’istruttoria" } },
  { id: '4', type: 'scelta', position: { x: 700, y: 3.5 }, data: { label: "Assenza di un elemento sostanziale?" } },
  { id: '5', type: 'custom', position: { x: 850, y: -9 }, data: { label: "Richiesta della documentazione da integrare" } },
  { id: '6', type: 'custom2', position: { x: 1100, y: 230 }, data: { label: "Integrazione e invio della documentazione" } },
  { id: '7', type: 'custom2', position: { x: 1200, y: 0 }, data: { label: "Ricezione e caricamento della documentazione di integrazione a sistema" } },
  { id: '8', type: 'mancini', position: { x: 1450, y: 0 }, data: { label: "Rifiuto della Richiesta" } },
  { id: '9', type: 'mancini', position: { x: 1428, y: 230 }, data: { label: "Ricezione del rifiuto della Richiesta Di Erogazione" } },
  { id: '10', type: 'custom', position: { x: 1650, y: -50 }, data: { label: "Caricamento degli strumenti di verifica nella sezione «consultazione della Richiesta Di Erogazione»" } },
  { id: '11', type: 'blue', position: { x: 0, y: 230 }, data: { label: 'Inserimento della richiesta di erogazione' } },
  { id: '12', type: 'testo', position: { x: -150, y: 0 }, data: { label: "UFFICIO VIII" } },
  { id: '13', type: 'testo', position: { x: -150, y: 221.5 }, data: { label: "AT" } },


];

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'standard', sourceHandle: 'right-handle', targetHandle: 'left-handle', label: 'Avvio' },
  { id: 'e2-3', source: '2', target: '3', type: 'standard', sourceHandle: 'right-handle', targetHandle: 'left-handle', label: 'Esito positivo' },
  { id: 'e3-4-no', source: '3', target: '4', label: 'No', type: 'scelta', sourceHandle: 'right-handle', targetHandle: 'left-handle', data: { startLabel: 'No' } },
  { id: 'e4-5-no', source: '4', target: '5', label: 'No', type: 'scelta', sourceHandle: 'right-handle', targetHandle: 'left-handle', data: { startLabel: 'No' }},
  { id: 'e3-10-si', source: '3', target: '10', label: 'Si', type: 'scelta', sourceHandle: 'top-handle', targetHandle: 'top-handle', data: { startLabel: 'Si' } },
  { id: 'e4-8-si', source: '4', target: '8', label: 'Si', type: 'scelta', sourceHandle: 'top-handle', targetHandle: 'top-handle', data: { startLabel: 'Si' } },
  { id: 'e5-6', source: '5', target: '6', type: 'dashed', sourceHandle: 'right-handle', targetHandle: 'left-handle' },
  { id: 'e6-7', source: '6', target: '7', type: 'dashed', sourceHandle: 'right-handle', targetHandle: 'left-handle' },
  { id: 'e8-9', source: '8', target: '9', type: 'dashed', sourceHandle: 'bottom-handle', targetHandle: 'top-handle' },
  { id: 'e7-2', source: '7', target: '2', type: 'standard', sourceHandle: 'bottom-handle', targetHandle: 'bottom-handle' },
  { id: 'e9-11', source: '9', target: '11', type: 'standard', sourceHandle: 'bottom-handle', targetHandle: 'bottom-handle' },
  { id: 'e11-1', source: '11', target: '1', type: 'standard', sourceHandle: 'top-handle', targetHandle: 'bottom-handle' },
  { id: 'e13-11', source: '13', target: '11', type: 'standard', sourceHandle: 'right-handle', targetHandle: 'left-handle' },

];
