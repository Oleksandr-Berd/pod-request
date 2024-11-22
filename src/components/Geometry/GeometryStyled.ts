import styled from "styled-components";

export const GeometryCustom = styled.div`
  padding-top: 153px;

  @media (min-width: 1280px) {
    position: relative;

    width: 100%;

    padding: 130px;

    & svg {
      position: absolute;
      right: 0;
      top: 0;

      transform: translate(125%, -100%);
    }
  }
`;
