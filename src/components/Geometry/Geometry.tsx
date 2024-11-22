import * as SC from "./GeometryStyled"

import { ReactComponent as Square } from "../../assets/images/tablet/Combined Shape 3.svg";
import {ReactComponent as SquareDesk} from "../../assets/images/desktop/bg-pattern-dots.svg"
import { useScreenSize } from "../../utils/hooks/useScreenSize";

const Geometry = () => {
const {isDesktop} = useScreenSize()

  return (
    <SC.GeometryCustom>
        {isDesktop ? <SquareDesk/> : <Square/>}
    </SC.GeometryCustom>
  );
};

export default Geometry;
