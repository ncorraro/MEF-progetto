// src/data/nodi.js

const nodi = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Start' },
      position: { x: 250, y: 0 },
    },
    {
      id: '2',
      data: { label: 'Processo A' },
      position: { x: 250, y: 150 },
    },
    {
      id: '3',
      data: { label: 'Processo B' },
      position: { x: 250, y: 300 },
    },
    {
      id: '4',
      type: 'output',
      data: { label: 'End' },
      position: { x: 250, y: 450 },
    },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
  ];
  
  export default nodi;
  