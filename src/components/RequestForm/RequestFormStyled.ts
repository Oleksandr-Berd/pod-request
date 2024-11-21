import styled from "styled-components";

export const FormContent = styled.div`
  position: relative;
`;

export const RequestFormCustom = styled.div`
  margin-bottom: 16px;

  @media (min-width: 768px) {

    width: 427px;

    margin-bottom: 64px;
  }

  & > input {
    width: 100%;

    padding-left: 32px;
    padding-top: 9px;
    padding-bottom: 9px;

    background-color: #2c344b;
    color: #979797;

    font-size: 14px;
    line-height: 2;
    font-weight: 800;

    border: none;
    border-radius: 28px;

    @media (min-width: 768px){
        padding-top: 14px;
        padding-bottom: 14px;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;

  padding-top: 9px;
  padding-bottom: 9px;

  font-size: 14px;
  line-height: 2;
  font-weight: 800;
  background-color: #54e6af;
  color: #121725;

  border-radius: 28px;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;

    width: 162px;

    transform: translate(260px, 5px);
  }
`;
