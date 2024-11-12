import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logoImagen from "../multimedia/bublologo.png";
import { IoIosArrowBack } from "react-icons/io";
import Stand from "./Stand";
import Delivery from "./Delivery";

const Servicios = () => {
    return ( 

        <ContenedorServicios>
            <ContenedorNavbar>
                <ContenedorBack>
                    <NavLink to="/">
                        <IoIosArrowBack size={32} color="#ffffff"></IoIosArrowBack>
                    </NavLink>
                </ContenedorBack>
                <Titulo>¿Cual prefieres?</Titulo>
                <ContenedorLogo></ContenedorLogo>
            </ContenedorNavbar>
            <ContenedorMain>
                <Stand>
                </Stand>
                <Delivery>
                </Delivery>
            </ContenedorMain>
            <ContenedorFooter>
                <ContainerParagrahp>
                    <Paragrahp>Comodidad, ahorro de tiempo, calidad garantizada, precios accesibles y servicio ecológico para tu ropa.
                    </Paragrahp>
                </ContainerParagrahp>

            </ContenedorFooter>
        </ContenedorServicios>
     );
}
 
export default Servicios;

const ContenedorServicios = styled.div`
    border-radius:22px;
    border:none;
    width: 80%;
    height: 70%;
    
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:40px;
    padding:20px;

      @media (max-width: 1200px){
        

        width:80%;
        height:80%;
        gap 20px;
        
        
    };

    
`;

const ContenedorNavbar = styled.div`

    width:100%;
    height:20%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

     @media (max-width: 1200px){
        

        width:100%;
        height:15%;
        
         
        
    };

`;

const ContenedorLogo = styled.div`

    aspect-ratio: 1/1;
    border:none;
    border radius: 50%;
    width:10%;
    background-image: url(${logoImagen});
    background-size: cover;

    @media (max-width: 1100px){
        

        width:15%;
    }

    @media (max-width: 950px){
        
        width: 16%;
    }
        @media (max-width: 850px){
        
        width: 18%;
    }

    @media (max-width: 650px){
    
        width: 20%;
    }
`;

const Titulo = styled.div`

    font-size: 32px;
    font-weight:bold;
    color:#ffffff;

    @media (max-width: 550px){
        
        font-size:30px;
    }
        @media (max-width: 500px){
        
        font-size:28px;
    }
         @media (max-width: 420px){
        
        font-size:24px;
    }

     @media (max-width: 350px){
        
        font-size:22px;
    }

`;

const ContenedorBack = styled.i`
    cursor:pointer;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const ContenedorMain =styled.div`

    width:100%;
    height:60%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    gap:20px;
    

     @media (max-width: 1200px){
        flex-direction:row;
        align-items:center;
        height: 45%;
        
    }

    @media ( max-width: 784px){
    
        flex-direction: column;
        height:90%
    }
`;

const ContenedorFooter = styled.div`

    width: 100%;
    height: 18%;
    background-color: none;
    border-radius: 8px;
    box-shadow: 4px 4px 4px rgba(0,0,0,.3);
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    
    @media (max-width: 1200px){
         height: 15%;
    }
         @media(max-width: 784px){

        display:none;

    }
`;

const ContainerParagrahp = styled.div`
    width:100%
    height:100%;
    display:flex;
    justify-content:center;
    align-center:center;

    

`;

const Paragrahp = styled.p`
    font-size:25px;
    color:black;
    font-wheight:extra-bold;

     @media (max-width: 1100px){
        
        font-size:20px;
        
    }

    @media (max-width: 950px){
        
        font-size:18px;
       
    }
        @media (max-width: 850px){
        
        font-size:16px;
        
    }

`;

