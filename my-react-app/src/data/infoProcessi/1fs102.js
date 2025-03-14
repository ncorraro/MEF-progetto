export const initialNodes = [
    {
      id: '1',
      type: 'blue2',
      position: { x: 0, y: 0 },
      data: {
        label: "Invio della comunicazione per l’avvio dell’aggiornamento dei dati",
        raci: "info aggiuntive della raci",
        sp: false,
        pc: false,
        email: true,
        report: false
      }
    },
  
    {
      id: '2',
      type: 'custom',
      position: { x: 250, y: -19 },
      data: {
        label: "Esecuzione dei controlli automatici ed estrazione degli esiti e dei dati pre-validati e validati",
        raci: "info aggiuntive della raci",
        sp: true,
        pc: true,
        email: false,
        report: false
      }
    },
  
    {
      id: '3',
      type: 'custom',
      position: { x: 520, y: -19 },
      data: {
        label: "Esecuzione dei controlli automatici ed estrazione degli esiti e dei dati pre-validati e validati",
        raci: "info aggiuntive della raci",
        sp: false,
        pc: true,
        email: false,
        report: false
      }
    },
  
    {
      id: '4',
      type: 'scelta',
      position: { x: 770, y: 10 },
      data: {
        label: "Rilevazione di criticità?",
      }
    },
  
    {
      id: '5',
      type: 'custom2',
      position: { x: 950, y: -19 },
      data: {
        label: "Ove necessario invio della richiesta di approfondimento di merito sul dato critico",
        raci: "info aggiuntive della raci",
        sp: false,
        pc: false,
        email: true,
        report: false
      }
    },
  
    {
      id: '6',
      type: 'custom2',
      position: { x: 1200, y: -19 },
      data: {
        label: "Invio della richiesta di aggiornamento dei dati o di condivisione delle motivazioni degli scostamenti rilevati",
        raci: "info aggiuntive della raci",
        sp: false,
        pc: false,
        email: true,
        report: false
      }
    },
  
    {
      id: '7',
      type: 'custom2',
      position: { x: 1450, y: -10 },
      data: {
        label: "Elaborazione e divulgazione dei report con evidenza eventuali misure problematiche"
      }
    },
    {
        id: '8',
        type: 'testo',
        position: { x: -150, y: 220 },
        data: {
          label: "UFFICI IGPNRR",
          
        }
      },
    
      {
        id: '9',
        type: 'mancini',
        position: { x: 950, y: 220 },
        data: {
          label: "Ricezione della richiesta e condivisione dei chiarimenti sulla criticità",
          raci: "info aggiuntive della raci",
          sp: false,
          pc: false,
          email: true,
          report: false
        }
      },
    
      {
        id: '10',
        type: 'blue2',
        position: { x: 1450, y: 220 },
        data: {
          label: "Ricezione dei report",
          raci: "info aggiuntive della raci",
          sp: true,
          pc: false,
          email: false,
          report: true
        }
      },
  
    {
      id: '12',
      type: 'testo',
      position: { x: -150, y: 0 },
      data: {
        label: "UFFICIO VI"
      }
    },

    {
        id: '13',
        type: 'testo',
        position: { x: -150, y: 420 },
        data: {
          label: "AT "
        }
      },
      {
        id: '14',
        type: 'custom2',
        position: { x: 0, y: 420 },
        data: {
          label: " Ricezione della comunicazione e inoltro della richiesta ",
          sp: false,
          pc: false,
          email: true,
          report: false
        }
      },
      {
        id: '15',
        type: 'custom',
        position: { x: 240, y: 420 },
        data: {
          label: " Aggiornamento e validazione dei dati ",
          sp: false,
          pc: true,
          email: false,
          report: false
        }
      },
      {
        id: '16',
        type: 'mancini',
        position: { x: 950, y: 420 },
        data: {
          label: "Aggiornamento dei dati e/o condivisione delle motivazioni degli scostamenti rilevati ",
          sp: false,
          pc: true,
          email: false,
          report: false
        }
      },
      {
        id: '17',
        type: 'scelta2',
        position: { x: 1250, y: 420 },
        data: {
          label: "Presenza motivazioni o dei dati aggiornati?"
        }
      },
      {
        id: '18',
        type: 'custom',
        position: { x: 1400, y: 420 },
        data: {
          label: "Richiesta dei dati aggiornati e/o delle motivazioni degli scostamenti rilevati"
                }
      },
      {
        id: '19',
        type: 'testo',
        position: { x: -150, y: 620 },
        data: {
          label: "SA"
        }
      },
      {
        id: '20',
        type: 'custom',
        position: { x: 0, y: 620 },
        data: {
          label: "Ricezione della comunicazione"
        }
      },
      {
        id: '21',
        type: 'custom',
        position: { x: 250, y: 620 },
        data: {
          label: "Aggiornamento e pre-validazione dei dati",
          sp: false,
          pc: true,
          email: false,
          report: false
        }
      },
      {
        id: '22',
        type: 'mancini',
        position: { x: 1200, y: 620 },
        data: {
          label: "Aggiornamento dei dati e/o condivisione delle motivazioni degli scostamenti rilevati",
          sp: false,
          pc: true,
          email: false,
          report: false
        }
      },
      {
        id: '23',
        type: 'testo',
        position: { x: -150, y: 820 },
        data: {
          label: "Stakeholder"
        }
      },
      {
        id: '24',
        type: 'blue2',
        position: { x: 1450, y: 820 },
        data: {
          label: "Ricezione dei report",
          sp: true,
          pc: false,
          email: false,
          report: true
        }
      },
  
    
  ]
  
  
  export const initialEdges = [
    { id: 'e1-14', source: '1', target: '14', type: 'standard', sourceHandle: 'bottom-handle', targetHandle: 'top-handle', label: 'Avvio' },
    { id: 'e2-3', source: '2', target: '3', type: 'standard', sourceHandle: 'right-handle', targetHandle: 'left-handle', label: 'Esito positivo' },
    { id: 'e3-4', source: '3', target: '4', type: 'standard', sourceHandle: 'right-handle', targetHandle: 'left-handle' },
    { id: 'e5-9', source: '5', target: '9', type: 'standard', sourceHandle: 'bottom-handle', targetHandle: 'top-handle' },
    { id: 'e4-5-si', source: '4', target: '5', label: 'No', type: 'scelta', sourceHandle: 'right-handle', targetHandle: 'left-handle', data: { startLabel: 'si' }},
    { id: 'e4-6-si', source: '4', target: '6', label: 'No', type: 'scelta', sourceHandle: 'bottom-handle', targetHandle: 'left-handle', data: { startLabel: 'si' }},
    { id: 'e4-7-si', source: '4', target: '7', label: 'No', type: 'scelta', sourceHandle: 'top-handle', targetHandle: 'top-handle', data: { startLabel: 'no' }},
    { id: 'e6-17', source: '6', target: '17', type: 'standard', sourceHandle: 'bottom-handle', targetHandle: 'top-handle' },
    { id: 'e7-24', source: '7', target: '24', type: 'standard', sourceHandle: 'right-handle', targetHandle: 'right-handle' },
    { id: 'e7-10', source: '7', target: '10', type: 'standard', sourceHandle: 'right-handle', targetHandle: 'right-handle' },


    { id: 'e9-3', source: '9', target: '3', type: 'standard', sourceHandle: 'left-handle', targetHandle: 'bottom-handle' },

    { id: 'e14-20', source: '14', target: '20', type: 'standard', sourceHandle: 'bottom-handle', targetHandle: 'top-handle' },
    { id: 'e16-3', source: '16', target: '3', type: 'standard', sourceHandle: 'left-handle', targetHandle: 'bottom-handle' },
    { id: 'e17-16-si', source: '17', target: '16', label: 'si', type: 'scelta', sourceHandle: 'bottom-handle', targetHandle: 'right-handle', data: { startLabel: 'si' }},
    { id: 'e17-18-no', source: '17', target: '18', label: 'no', type: 'scelta', sourceHandle: 'right-handle', targetHandle: 'left-handle', data: { startLabel: 'no' }},
    { id: 'e18-22', source: '18', target: '22', type: 'standard', sourceHandle: 'left-handle', targetHandle: 'right-handle' },

    { id: 'e20-21', source: '20', target: '21', type: 'standard', sourceHandle: 'right-handle', targetHandle: 'left-handle' },
    { id: 'e21-15', source: '21', target: '15', type: 'standard', sourceHandle: 'top-handle', targetHandle: 'bottom-handle' },
    { id: 'e22-3', source: '22', target: '3', type: 'standard', sourceHandle: 'left-handle', targetHandle: 'bottom-handle' },


  
  ];
  