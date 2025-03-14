const uffici = [
    {
      id: 1,
      nome: "Affari Generali ",
      numero : "I",
      descrizione: "Gestisce gli affari 'generali dell’IGPNRR, supporta la definizione dell’assetto  organizzativo e analizza le esigenze logistiche. Coordina le attività normative, legali e prelegislative e gli adempimenti in materia di privacy e protezione dei dati. Gestisce i programmi per il rafforzamento delle capacità amministrative del Dipartimento ",
      processiCore: [101, 102], // Collegamento ai processiCore tramite ID
      processiVerticali: [201, 202], // Collegamento alle processiVerticali tramite ID
      processiRilevanti: [301], // Collegamento alle processiRilevanti tramite ID

    },
    {
      id: 2,
      nome: "Attuazione e Rendicontazione  ",
      numero : "II",
      descrizione: "Coordina le fasi di attuazione operativa delle misure e degli interventi PNRR di competenza di MEF, MI, MIT, MiG, CS e per diversi Dipartimenti della PCM ",
      processiCore: [101, 102], 
      processiVerticali: [201, 202], 
      processiRilevanti: [201, 202],

    },
    {
      id: 3,
      nome: "Attuazione e Rendicontazione  ",
      numero : "III",
      descrizione: "Coordina le fasi di attuazione operativa delle misure e degli interventi PNRR di competenza di MLPS, MUR, MIM, MS, e per diversi Dipartimenti della PCM ",
      processiCore: [101, 102], 
      processiVerticali: [201, 202], 
      processiRilevanti: [201, 202],
    },
    {
      id: 4,
      nome: "Attuazione e Rendicontazione  ",
      numero : "IV",
      descrizione: "Coordina le fasi di attuazione operativa delle misure e degli interventi PNRR di competenza diMASAF, MITUR, MIC, MASE, MIMIT e per diversi Dipartimenti della PCM. Supporta la pianificazione e l'integrazione delle misure REPowerEU nel PNRR nazionale ",
      processiCore: [101, 102], 
      processiVerticali: [201, 202], 
      processiRilevanti: [201, 202],
    },
    {
      id: 5,
      nome: "Controlli ",
      numero : "V",
      descrizione: "Coordina la rendicontazione e il controllo delle misure PNRR e di Milestone & Target. Presenta e monitora le richieste di pagamento alla CE, nonché gli importi richiesti ed i corrispondenti rimborsi. Coordina le iniziative antifrode in materia di PNRR e gestisce i rapporti con gli organismi di controllo esterno/audit nazionali ed europei ",
      processiCore: [101, 102], 
      processiVerticali: [201, 202], 
      processiRilevanti: [201, 202],
    },
    {
      id: 6,
      nome: "Monitoraggio ",
      numero : "VI",
      descrizione: "Acquisisce, elabora e divulga informazioni sullo stato di attuazione del Piano, tra cui i dati di avanzamento procedurale, fisico e finanziario degli interventi del PNRR, nonché del raggiungimento delle relative Milestone & Target.Sviluppa e gestisce il sistema informatico ReGIS. Predispone i rapporti e le Relazioni di monitoraggio previste per il PNRR ",
      processiCore: [101, 102], 
      processiVerticali: [201, 202], 
      processiRilevanti: [201, 202],
    },
    {
      id: 7,
      nome: "Assistenza Tecnica  ",
      numero : "VII",
      descrizione: "Definisce le azioni di assistenza tecnica verso le AT e i SA degli interventi PNRR, anche tramite il supporto delle RTS. Gestisce convenzioni e accordi con organismi esterni di assistenza tecnica, comprese le società in house della PA. Gestisce gli strumenti di comunicazione e pubblicità del PNRR ",
      processiCore: [101, 102], 
      processiVerticali: [201, 202], 
      processiRilevanti: [201, 202],
    },
    {
      id: 8,
      nome: "Gestione Finanziaria  ",
      numero : "VIII",
      descrizione: "Gestisce le operazioni finanziarie verso le AT e le relative contabilità speciali, a valere sul Fondo di rotazione nazionale Next Generation EU. Gestisce i capitoli di bilancio di competenza dell’!IGPNRR ",
      processiCore: [101, 102], 
      processiVerticali: [201, 202], 
      processiRilevanti: [201, 202],
    },
  ];
  
  export default uffici;
  