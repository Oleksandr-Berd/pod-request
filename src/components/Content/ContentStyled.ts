import styled from "styled-components";

export const ContentCon = styled.div`
  margin-bottom: 32px;

  text-align: center;

  & > h3 {
    margin-bottom: 16px;

    text-transform: uppercase;

    font-size: 26px;
    line-height: 1.46;
    font-weight: 300;

    color: #fff;
    & > span {
      color: #54e6af;
    }
  }

  & > p {
    font-size: 15px;
    line-height: 1.67;
    color: #c2cbe5;
  }
`;
