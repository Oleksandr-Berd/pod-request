import styled from "styled-components";

export const LinkListCustom = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 48px;

  @media (min-width: 768px) {
    justify-content: start;

    margin-bottom: 0;
  }
`;

export const Link = styled.li`
  &:not(:last-child) {
    margin-right: 24px;

    @media (min-width: 768px){
        margin-right: 27px;
    }
  }
`;
