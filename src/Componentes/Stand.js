import React from "react";
import styled from "styled-components";
import standImagen from "../multimedia/stands.png";



const Stand = () => {
    return ( 
        <ContenedorStand>
            <Image>
                <WrapContainerPrecio>
                    <ContenedorPrecio>
                        <Precio color="#19EFE5">$0,65</Precio>
                    </ContenedorPrecio>
                </WrapContainerPrecio>
                <ContainerText>
                    <ContenedorParagrahp>
                    <Paragrahp>LLeva tu ropa a nuestros stands y paga 0.65$ por kg.
                    </Paragrahp>
                    </ContenedorParagrahp>
                    <ContenedorBoton>
                    <Boton>
                        <LinkEnvio href="https://www.google.com/maps/place/Farmatodo+La+Victoria/@10.2261028,-67.3333749,17.75z/data=!4m14!1m7!3m6!1s0x8c2a9f0a83ffe763:0x19851a7050fdda38!2sSuper+mercado+la+Florida+2010!8m2!3d10.2284227!4d-67.3313534!16s%2Fg%2F11rqqzzdvv!3m5!1s0x8c2a9e7d1431e47b:0xb56305589739a4a6!8m2!3d10.2259729!4d-67.3342061!16s%2Fg%2F1whdkdc8?hl=es&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                        ¡Ubicar stand!
                        </LinkEnvio>
                    </Boton>
                    </ContenedorBoton>
                </ContainerText>
            </Image>
        </ContenedorStand>
     );
}
 
export default Stand;



const ContenedorStand = styled.div`
    aspect-ratio: 2/1.2;
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
    background-image:url(${standImagen});
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
    gap:5px;
    
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
        
        font-size:18px;
    }

    @media (max-width: 950px){
        
        font-size:16px;
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

    @media (max-width: 400px){
        
        font-size:18px;
       
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
    padding-bottom:5px;
`;

const Boton = styled.button`
    width: 230px;
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
    
      @media (max-width: 1100px){
        
        font-size:18px;
        width:180px;
    }

    @media (max-width: 950px){
        
        font-size:16px;
        width:160px;
    }
     @media (max-width: 850px){
        
        font-size:14px;
        width:120px;
    }
    @media (max-width: 784px){
        
        font-size:18px;
        width:200px;
    }

    @media (max-width: 500px){
        
        font-size:16px;
        width:140px;
    }
    @media (max-width: 420px){
        
        font-size:12px;
        width:120px;
        
    }

    &:hover { background-color: #17d2c1; }

    
`;

const LinkEnvio = styled.a`
    text-decoration: none;
    color:#ffffff;
`;