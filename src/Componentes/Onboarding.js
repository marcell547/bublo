import React from "react";
import styled from "styled-components";
import logoImage from "../multimedia/bublologo.png"
import imgPrincipal from "../multimedia/imagenPrincial.jpg"
import Boton from "../Elementos/Boton";
import { NavLink } from "react-router-dom";

const Onboarding = () => {
    return ( 
        <Contenedor>
            <Logo></Logo>
            <ImagenPrincipal></ImagenPrincipal>
            <TextContainer>
                <TitleContainer>
                <Title>Lava más, paga menos
                ¡Bienvenido a Bublo!</Title>
                </TitleContainer>
                <ParagraphContainer>
                <Paragrahp>Descubre la forma más fácil y económica de mantener tu ropa impecable. Con Bublo, lava a solo $0.65 por kg, y si tu pedido es de 10 kg o más, disfruta de nuestro servicio de recogida y entrega por solo $0.85 por kg. ¡Así de sencillo, así de conveniente!</Paragrahp>
                </ParagraphContainer>
                <Boton><StyledNavLink to="/servicios">Empieza ya</StyledNavLink></Boton>
            </TextContainer>
        </Contenedor>
     );
}
 
export default Onboarding;


const Contenedor = styled.div`

    background-color: #ffffff;
    border: none;
    border-radius: 22px;
    width: 70%;
    height: 70%;
    box-shadow:  5px 5px 15px rgba(0,0,0,.3);
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    position: relative;

        @media (max-width: 1200px){
    
        height: 70%;
        width: 70%;
    }
        @media (max-width: 784px){
    
        height: 70%;
        width: 80%;
    }

    @media (max-width: 420px){
        height: 70%;
        width: 90%;
    }
   
  

`;

const Logo = styled.div `
    aspect-ratio: 1/1;
    width: 30%;
    border-radius: 50%;
    background-image: url(${logoImage});
    background-size:cover;
    position: absolute;
    top: -15%;
    right: 35%;

    @media (max-width: 784px){
        top:-10%;
    }

    @media (max-width: 550px){
        top:-8%;
    }

    @media (max-width: 450px){
        top:-6%;
    }

    @media (max-width: 420px){
        top:-10%;
    }
    
    @media (max-width: 380px){
        top:-8%;
    }
    

`;  

const ImagenPrincipal = styled.div`

    width:100%;
    height: 55%;
    background-image:url(${imgPrincipal});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: 0% 50%;
    border-radius: 22px 22px 0px 0px;
    


     @media (max-width: 1200px){
    
       
        width: 100%;
    }
        @media (max-width: 784px){
    
        
        width: 100%;
    }

    @media (max-width: 420px){
        height:70%;
        width: 100%;
    }
    
    
`;

const TextContainer = styled.div`
    width: 100%;
    height:auto;
    border-radius: 0px 0px 22px 22px;
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items:center;
    padding-bottom: 25px;


`;


const TitleContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
   

`;

const Title =styled.h1`
    padding:0px 20px;
    font-size:32px;
    font-weight:bold;

   @media (max-width: 1200px){
        text-align:center;
        font-size:26px;
    }

    @media (max-width: 784px){
        text-align:center;
        font-size:24px;
    }
        
    @media (max-width: 550px){
        text-align:center;
        font-size:20px;
    }
        
    @media (max-width: 420px){
        text-align:center;
        font-size:16px;
    }

`;



const ParagraphContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Paragrahp = styled.p`
    
    padding: 0px 20px;
    font-size: 20px;

    @media (max-width: 1200px){
    
        font-size:18px;
    }

    @media (max-width: 784px){
    
        font-size:16px;
    }
         @media (max-width: 550px){
        font-size:14px;
    }

      @media (max-width: 420px){
        text-align:center;
        font-size:10px;
    }
`;

const StyledNavLink = styled(NavLink)`

    text-decoration:none;
    color:#ffffff;
    font-weight: bold;
`;