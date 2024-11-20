import * as SC from "./ContentStyled"

const Content:React.FC = () => {
    return (
      <SC.ContentCon>
        <h3>
          {" "}
          <span>Publish your podcasts </span>everywhere.
        </h3>
        <p>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </SC.ContentCon>
    );
}
 
export default Content;