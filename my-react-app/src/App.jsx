import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


import "bootstrap-icons/font/bootstrap-icons.css";

import './App.css'
import Footer from './Footer';
import Student from './Ufficio'
import UserGreeting from './UserGreeting'
import CardComponent from './components/CardComponent'
import HomePage from './pages/HomePage'
import UfficiPage from './pages/UfficiPage'
import ProcessiPage from './pages/processi/ProcessiPage.jsx'
import ProcessiCorePage from './pages/processi/ProcessiCorePage'
import ProcessiVerticaliPage from './pages/processi/ProcessiVerticaliPage'
import ProcessiRilevantiPage from './pages/processi/ProcessiRilevantiPage'
import DisposizioniPage from './pages/DisposizioniPage'

import Navbar from './components/Navbar'
import {  Route , createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import UfficioPage from './pages/UfficioPage'
import ProcessoPage from './pages/processi/ProcessoPage.jsx'
import ProcessoVerticalePage from './pages/processi/ProcessoVerticalePage.jsx'
import ProcessoRilevantePage from './pages/processi/ProcessoRilevantePage.jsx'

import RootLayout  from './RootLayout'
import FlowPage from './pages/FlowPage'



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
         <Route index element={<HomePage/>} />


         {/* Routing da home a pagina */}
         <Route path='uffici' element={<UfficiPage />} /> 
         <Route path='processi' element={<ProcessiPage />} />
         <Route path='disposizioni' element={<DisposizioniPage />} />



         {/* Routing da uffici a ufficio*/}
         <Route path='uffici/ufficio/:id' element={<UfficioPage />} />

         {/* Routing da processi a pagina*/} 
         <Route path='processi/processiCore' element={<ProcessiCorePage />} />
         <Route path='processi/processiVerticali' element={<ProcessiVerticaliPage />} />
         <Route path='processi/processiRilevanti' element={<ProcessiRilevantiPage />} />


         {/* Routing da processiTipo a processo*/}
         <Route path="processi/processiCore/processo/:processoId" element={<ProcessoPage />} />
         <Route path="processi/processiVerticali/processo/:processoId" element={<ProcessoVerticalePage />} />
         <Route path="processi/processiRilevanti/processo/:processoId" element={<ProcessoRilevantePage />} />

         

         {/* Routing da ufficioX a processoX*/}
         <Route path="ufficio/:ufficioId/processo/:processoId" element={<ProcessoPage />} />
         <Route path="ufficio/:ufficioId/processoVerticale/:processoId" element={<ProcessoVerticalePage />} />
         <Route path="ufficio/:ufficioId/processoRilevante/:processoId" element={<ProcessoRilevantePage />} /> {/* Routing da cambiare*/}

        
          {/* Routing Diagrammi*/}
         <Route path="/diagramma" element={<FlowPage />} />
         <Route path="/diagramma/:processoId/:faseId" element={<FlowPage />} />
         <Route path="/diagramma/:processoId/:diagramId" element={<FlowPage />} />


         


      </Route>
      
    )
  )


  return(
    <>
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App
