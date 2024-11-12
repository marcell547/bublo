import React from "react";
import Onboarding from "./Componentes/Onboarding";
import styled from "styled-components";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Servicios from "./Componentes/Servicios";
import Instrucciones from "./Componentes/Instrucciones";

const App = () => {
  return (
    <BrowserRouter basename="/bublo">
    <Wrap>
      <Routes >
        <Route path="/" element={

          <Onboarding></Onboarding>
        }
        />


      <Route path="/servicios" element={

        <Servicios></Servicios>
      }
      
      />

      <Route path="/instrucciones" element={

        <Instrucciones></Instrucciones>
      }
      
      />
      </Routes>
    </Wrap>
    </BrowserRouter>
    );
}
 
export default App;

const Wrap = styled.div `
  background: linear-gradient(to bottom, #19EFE5, #ffffff );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;