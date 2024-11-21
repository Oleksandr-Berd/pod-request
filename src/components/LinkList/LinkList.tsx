import * as SC from "./LinkListStyled"

import { ReactComponent as ApplePicMob } from "../../assets/images/mobile/apple.svg";
import { ReactComponent as GooglePicMob } from "../../assets/images/mobile/google.svg";
import { ReactComponent as SpotifyPicMob } from "../../assets/images/mobile/spotify.svg";
import { ReactComponent as PocketPicMob } from "../../assets/images/mobile/pocket.svg";

// import {ReactComponent as ApplePic} from "../../assets/images/desktop/apple-podcast.svg"
// import { ReactComponent as GooglePic } from "../../assets/images/desktop/google-podcasts.svg";
// import { ReactComponent as SpotifyPic } from "../../assets/images/desktop/spotify.svg";
// import { ReactComponent as PocketPic } from "../../assets/images/desktop/pocket-casts.svg";

const LinkList:React.FC = () => {
    return (
      <SC.LinkListCustom>
        <SC.Link>
          <a href="https://portfolio-aleks-berd.netlify.app">
            <SpotifyPicMob />
          </a>
        </SC.Link>
        <SC.Link>
          <a href="https://portfolio-aleks-berd.netlify.app">
            <ApplePicMob />
          </a>
        </SC.Link>
        <SC.Link>
          <a href="https://portfolio-aleks-berd.netlify.app">
            <GooglePicMob />
          </a>
        </SC.Link>
        <SC.Link>
          <a href="https://portfolio-aleks-berd.netlify.app">
            <PocketPicMob />
          </a>
        </SC.Link>
      </SC.LinkListCustom>
    );
}
 
export default LinkList;