import * as SC from "./LogoStyled";

import { ReactComponent as LogoSvg } from "../../assets/images/desktop/logo.svg";

const Logo: React.FC = () => {
  return (
    <SC.LogoCustom>
      <LogoSvg />
    </SC.LogoCustom>
  );
};

export default Logo;
