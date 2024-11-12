import styled, {css} from "styled-components";


const Boton = styled.button`
    background-color:#19EFE5;
    color:#ffff;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-wight: bold;
    font-size: 32px;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgba(0,0,0,.2);
    transition: .3s easy all;

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

    ${props => props.grande && css `
        width: 100%;
        height: 50px;
        `}

    ${props => props.small && css `
        width: auto;
        height: 50px;
    `}
`;

export default Boton;