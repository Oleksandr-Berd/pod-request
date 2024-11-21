import * as SC from "./SharedLayoutStyled"

import Content from "../../components/Content/Content";
import LinkList from "../../components/LinkList/LinkList";

const SharedLayout:React.FC = () => {
    return ( 
        <SC.SharedLayoutCustom>
            <Content/>
            <LinkList/>
        </SC.SharedLayoutCustom>
     );
}
 
export default SharedLayout;