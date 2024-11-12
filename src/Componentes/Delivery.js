import React from "react";
import styled from "styled-components";
import deliveryImagen from "../multimedia/entregas.png";
import { NavLink } from "react-router-dom";



const Delivery = () => {
    return ( 
        <ContenedorDelivery>
            <Image>
                <WrapContainerPrecio>
                    <ContenedorPrecio>
                        <Precio color="#19EFE5">$0,85</Precio>
                    </ContenedorPrecio>
                </WrapContainerPrecio>
                <ContainerText>
                    <ContenedorParagrahp>
                        <Paragrahp>Solicita tu servicio adomicilio a partir de 10kg de ropa y solo paga 0.85$ po kg.
                        </Paragrahp>
                    </ContenedorParagrahp>
                    <ContenedorBoton>
                        <Boton><StyledNavlink to="/instrucciones">¡Solicitar!</StyledNavlink></Boton>
                    </ContenedorBoton>
                </ContainerText>
            </Image>
        </ContenedorDelivery>
     );
}
 
export default Delivery;



const ContenedorDelivery = styled.div`
   
    width:50%;
    background-color:rgba(0,0,0,0.1);
    border-radius:22px;
    box-shadow: 4px 4px 10px rgba(0,0,0,.3);

    @media (max-width: 1200px){
        
        width:50%;
        height:100%;
        
    }
        @media ( max-width: 784px){
    
        width:100%;
        height:50%;
    }
`;

const Image = styled.div`
    widht:100%;
    height:100%;
    background-image:url(${deliveryImagen});
    background-size:75%;
    background-repeat:no-repeat;
    background-position:50% 30%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const ContainerText= styled.div`

    
    width: 100%;
    height: 45%;
    border-radius: 0px 0px 22px 22px;
    background-color: rgba(0,0,0,.55);
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    gap:10px;
    
`;

const ContenedorParagrahp = styled.div`
    width:100%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    Align-items:center;
`;

const Paragrahp = styled.p`
    color:#ffffff;
    font-size:24px;
    padding:10px;
    margin:0px;
    @media (max-width: 1150px){
        
        font-size:20px;
    }

    @media (max-width: 950px){
        
        font-size:18px;
    }
        @media (max-width: 850px){
        
        font-size:16px;
    }
        @media (max-width: 784px){
        
        font-size:18px;
    }
        @media (max-width: 500px){
        
        font-size:14px;
    }
`;


const WrapContainerPrecio = styled.div`

    widht:100%;
    height:auto;
    display:flex;
    justify-content:end;
    align-items:center;
    padding:10px;
`;
const ContenedorPrecio = styled.div`

    aspect-ratio: 1/1;
    border-radius:50%;
    width:20%;
    background-color: rgba(0,0,0,.3);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`;

const Precio = styled.h1`

    color:#FFFFFF;
    font-weight:bold;

    @media (max-width: 1100px){
        
        font-size:28px;
    }

    @media (max-width: 950px){
        
        font-size:24px;
    }
        @media (max-width: 850px){
        
        font-size:20px;
    }
        @media (max-width: 784px){
        
        font-size:28px;
    }
        @media (max-width: 500px){
        
        font-size:24px;
       
    }
        @media (max-width: 350px){
        
        font-size:18px;
       
    }
`;

const ContenedorBoton =styled.div`

    width:100%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media (max-width: 784px){
        
        padding-bottom:5px;
    }
`;

const Boton = styled.button`
    background-color:#19EFE5;
    color:#ffff;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-wight: bold;
    font-size: 22px;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgba(0,0,0,.2);
    transition: .3s easy all;
    width:230px;

    @media (max-width: 1100px){
        
        font-size:24px;
        width:200px;
    }

    @media (max-width: 950px){
        
        font-size:20px;
        width:170px;
    }
        @media (max-width: 850px){
        
        font-size:18px;
        width:140px;
    }
        @media (max-width: 500px){
        
        font-size:16px;
        width:140px;
    }

    &:hover { background-color: #17d2c1; }

    
`;

const StyledNavlink = styled(NavLink)`
    color:white;
    text-decoration:none;
`;

