import styled from "styled-components";

import backImage from "./assets/images/mobile/image-host.jpg";

export const AppCustom = styled.div`
  height: 100vh;

  background-color: rgba(18, 23, 37, 0.7);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backImage});
    background-size: cover;
    background-position: center; 
    backdrop-filter: blur(10px);
    z-index: -1; 
    }
`;