import React from "react";
import styled from "styled-components";
import LogoBublo from "../multimedia/bublologo.png";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";



const Instrucciones = () => {
    return ( 
        <ContenedorInstrucciones>
            <ContenedorNavbar>
            <ContenedorNavlink>
                <StyledNavlink to="/servicios">
                    <IoIosArrowBack color="black" fontSize="32px"></IoIosArrowBack>
                </StyledNavlink>
            </ContenedorNavlink>
                <Logo></Logo>
            </ContenedorNavbar>
            <ContainerText>
                <Paragrahp>
                1) Presiona el boton de "Enviar ubicacion"<br/>
                2) Al ingresar al Whatsapp envia el mensaje predeterminado y presiona el boton de adjuntar.<br/>
                3) Selecciona el icono de ubicacion y envianos tu ubicacion actual.<br/>
                4) Indicanos la hora en la cual deseas que recogamos tu ropa.<br/>
                5) Espera pancientemente que nuestros colaboradores pasen por tu ropa.<br/>
              
                <Span>
                    ¡Gracias por elegirnos y confiar en 
                nosotros!
                </Span>
                
                </Paragrahp>    
            </ContainerText>
            <Boton><LinkEnvio href="https://wa.me/584129854915?text=Hola%20bublo,%20quiero%20adquirir%20el%20servicio%20a%20domicilio%20y%20pagar%200.85%24%20por%20kg.%20En%20breve%20te%20comparto%20mi%20ubicacion%20y%20la%20hora%20para%20que%20pases%20por%20mi%20ropa." target="_blank" rel="noopener noreferrer">Compartir ubicacion</LinkEnvio></Boton>
        </ContenedorInstrucciones>
     );
}
 
export default Instrucciones;


const ContenedorInstrucciones = styled.div`

    width:70%;
    height:65%;
    border-radius:22px;
    background-color:#ffffff;
    box-shadow:4px 4px 10px rgba(0,0,0,.3);
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    
`;

const ContenedorNavbar = styled.div`

    width:100%;
    position:relative;
    top: -20%;
    display: flex;
    justify-content:start;
    gap:10%;

    @media (max-width: 1250px){
    
        top:-15%;
    }
    @media (max-width: 1200px){
    
        top:-12%;
    }

    @media (max-width: 1000px){
    
        top:-15%;

    }

    @media (max-width: 650px){
    
        top:-10%;

    }
     
`;


const Logo = styled.div`
    aspect-ratio:1/1;
    width: 20%;
    border-radius:50%;
    border: none;
    background-image: url(${LogoBublo});
    background-size:cover;
    position:relative;

    @media (max-width: 1000px){
    
       
        right:3%;
        width:25%;
    }

    @media (max-width: 784px){
   
        right:8%;
        width:30%;
    }

    @media (max-width: 850px){
        right:5%;
        width:31%;
    }
    
    @media (max-width: 750px){
        right:5%;
        width:34%;
    }

    @media (max-width: 650px){
        right:5%;
        top:-15%;
        width:35%;
    }

    @media (max-width: 500px){
        right:8%;
        width:37%;
    }
        @media (max-width: 450px){
        right:10%;
        width:40%;
    }
        @media (max-width: 450px){
        right:12%;
        width:45%;
    }
`;

const ContainerText =styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-conent:center;
    align-items:start;
    position:relative;
    top:-20%;

    @media (max-width: 1250px){
    
        top:-18%;
    }

    @media (max-width: 1200px){
    
        top:-14%;
    }
        @media (max-width: 1000px){
    
        top: -12%;
    
    }
        @media (max-width: 850px){
        
        top:-18%;
    }
    
    


    @media (max-width: 784px){
    
        top: -10%;
    }
         @media (max-width: 550px){
        top:-9%;
    }

      @media (max-width: 420px){
        top:-7%;
    }
    
`;

const Paragrahp = styled.p`
    font-size:22px;
    color:black;
    font-weigth:bold;
    padding:0px 10px 0px 25px;
    line-height:2;

    @media (max-width: 1200px){
    
        font-size:20px;
    }
        @media (max-width: 1000px){
    
        font-size:18px;
    }
    

    @media (max-width: 784px){
    
        font-size:16px;
    }
        @media (max-width: 700px){
    
        font-size:15px;
    }
         @media (max-width: 550px){
        font-size:14px;
    }

      @media (max-width: 450px){
        font-size:13px;
    }
      @media (max-width: 420px){
        
        font-size:12px;
    }


`;

const Span= styled.span`
    font-weight: 700;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Boton = styled.button`
    background-color:#19EFE5;
    color:#ffff;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 26px;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgba(0,0,0,.2);
    transition: .3s easy all;
    position:relative;
    top:-18%;
    @media (max-width: 1200px){
    
        font-size: 26px;
    }
        @media (max-width: 784px){
    
        font-size: 22px;
    }

    @media (max-width: 420px){
        font-size: 16px;
    }

    &:hover { background-color: #17d2c1; }

   
`;

const ContenedorNavlink = styled.div`

    width:25%;
    height:100%;
    background-color:none;
    display:flex;
    flex-direction:column;
    justify-content:end;   
    padding-left:20px;
`;

const StyledNavlink = styled(NavLink)`

    position:relative;
    top:-20%;
`;

const LinkEnvio = styled.a`
    text-decoration: none;
    color:#ffffff;
`;