import * as SC from "./HeaderStyled"

import Logo from "../../components/Logo/Logo";

const Header:React.FC = () => {
    return ( 
    <SC.HeaderCustom>
        <Logo/>
    </SC.HeaderCustom>
 );
}
 
export default Header;