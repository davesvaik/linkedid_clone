import styled from "styled-components";
import { useState } from "react";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");

  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };

  return (
    <>
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
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAsset>
                <AssetButton>
                  <img
                    src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-picture-photography-dreamstale-lineal-dreamstale.png"
                    alt=""
                  />
                </AssetButton>
                <AssetButton>
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
              <PostButton>Post</PostButton>
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
  background: #0a66c2;
  color: white;
  &:hover {
    background: #004182;
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

export default PostModal;
