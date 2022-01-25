import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  //   define state for the text editor
  const [shareImage, setShareImage] = useState("");
  // define state for the image sharing function
  const [videoLink, setVideoLink] = useState("");
  //   define state for the video player
  const [assetArea, setAssetArea] = useState("");
  //   define state to change between uploaded image and video player

  const handleChange = (e) => {
    let image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`Not an image, The file is: ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
    //   define states
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
    // resetting the states
  };

  return (
    <>
      {/* JSX fragment, no keys/attributes */}
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create post</h2>
              <button onClick={(event) => reset(event)}>
                <img
                  src="https://img.icons8.com/material-sharp/24/000000/delete-sign.png"
                  alt=""
                />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                  //   texteditor is empty and has a placeholder. then on event, change to user input
                />
                {assetArea === "image" ? (
                  // if asset is an image, open up to upload an image
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                      // takes in files of type gif, jpeg and png
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                    {/* show the selected image as a preview */}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    //   if asset is a video, open up to add video link
                    <>
                      <input
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        //defone the placeholder, and on event, change to user input
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                        //   show the selected video as a preview
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAsset>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  {/* added function to button for switchting to adding image  */}
                  <img
                    src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-picture-photography-dreamstale-lineal-dreamstale.png"
                    alt=""
                  />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  {/* added function to button for switching to adding video  */}
                  <img
                    src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-film-photography-dreamstale-lineal-dreamstale.png"
                    alt=""
                  />
                </AssetButton>
              </AttachAsset>
              <ShareComment>
                <AssetButton>
                  <img
                    src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-comment-social-media-basic-1-sbts2018-outline-sbts2018.png"
                    alt=""
                  />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton
                disabled={!editorText ? true : false}
                onClick={(event) => postArticle(event)}
              >
                {/* post button in the modal. it is disabled if there is no text */}
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    border: none;
    background-color: transparent;
    img {
      pointer-events: none;
      width: 20px;
      height: 20px;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  background: transparent;
  border-radius: 5px;
  border: none;
  img {
    width: 24px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const AttachAsset = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    img {
      margin-right: 5px;
      width: 26px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding: 0 16px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  /* if the button is disabled, make it grey and enabled make it blue */
  color: white;
  border: none;
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#004182")};
    /* on hover, if button is disabled keep it grey, but if enabled make it a little more blue */
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
