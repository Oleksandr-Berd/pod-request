import styled from "styled-components";

export const ContentCon = styled.div`
  margin-bottom: 32px;

  text-align: center;

  @media (min-width: 768px) {
    width: 635px;

    margin-bottom: 40px;

    text-align: left;
  }

  @media (min-width: 1280px){
    width: 723px;

  }

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

    @media (min-width: 768px) {
      margin-bottom: 32px;

      font-size: 48px;
      line-height: 1.67;
    }

    @media (min-width: 1280px){
        margin-bottom: 24px;

        font-size: 52px;
        line-height: 1.19;
    }
  }

  & > p {
    font-size: 15px;
    line-height: 1.67;
    color: #c2cbe5;

    @media (min-width: 768px) {
      width: 445px;

      font-size: 18px;
      line-height: 1.56;
    }
  }
`;
