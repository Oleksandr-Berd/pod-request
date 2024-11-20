import * as SC from "./SharedLayoutStyled"

import Content from "../../components/Content/Content";

const SharedLayout:React.FC = () => {
    return ( 
        <SC.SharedLayoutCustom>
            <Content/>
        </SC.SharedLayoutCustom>
     );
}
 
export default SharedLayout;