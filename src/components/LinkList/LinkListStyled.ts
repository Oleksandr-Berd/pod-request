import styled from "styled-components";

export const LinkListCustom = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: c;
`

export const Link = styled.li`


  &:not(:last-child) {
    margin-right: 24px;
  }
`;