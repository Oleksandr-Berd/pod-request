import styled from "styled-components";

export const LogoCustom = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

&:first-child{
    margin-right: 13px;
}

@media (min-width: 768px){
    justify-content: start;

    
}
`