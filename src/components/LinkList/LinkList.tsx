import * as SC from "./LinkListStyled"

import { ReactComponent as ApplePicMob } from "../../assets/images/mobile/apple.svg";
import { ReactComponent as GooglePicMob } from "../../assets/images/mobile/google.svg";
import { ReactComponent as SpotifyPicMob } from "../../assets/images/mobile/spotify.svg";
import { ReactComponent as PocketPicMob } from "../../assets/images/mobile/pocket.svg";

import {ReactComponent as ApplePic} from "../../assets/images/tablet/appleTab.svg"
import { ReactComponent as GooglePic } from "../../assets/images/tablet/googleTab.svg";
import { ReactComponent as SpotifyPic } from "../../assets/images/tablet/Spotify_logo_with_text 2.svg";
import { ReactComponent as PocketPic } from "../../assets/images/tablet/pocket-casts.svg";
import { useScreenSize } from "../../utils/hooks/useScreenSize";

const LinkList:React.FC = () => {
const {isTablet} = useScreenSize()

    return (
      <SC.LinkListCustom>
        <SC.Link>
          <a href="https://portfolio-aleks-berd.netlify.app">
            {isTablet ? <SpotifyPic /> : <SpotifyPicMob />}
          </a>
        </SC.Link>
        <SC.Link>
          <a href="https://portfolio-aleks-berd.netlify.app">
            {isTablet ? <ApplePic /> : <ApplePicMob />}
          </a>
        </SC.Link>
        <SC.Link>
          <a href="https://portfolio-aleks-berd.netlify.app">
            {isTablet ? <GooglePic /> : <GooglePicMob />}
          </a>
        </SC.Link>
        <SC.Link>
          <a href="https://portfolio-aleks-berd.netlify.app">
            {isTablet ? <PocketPic /> : <PocketPicMob />}
          </a>
        </SC.Link>
      </SC.LinkListCustom>
    );
}
 
export default LinkList;