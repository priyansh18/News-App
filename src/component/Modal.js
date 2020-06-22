//import liraries
import React, { Component } from "react";
import { Dimensions, Modal, Share, Text, View } from "react-native";
import {WebView} from "react-native-webview";
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
} from "native-base";

const webViewHeight = Dimensions.get("screen").height;
const webViewWidth = Dimensions.get("screen").width - 40;

// create a component
class ModalComponent extends Component {
  handleShare = () => {
    const { url, title } = this.props.articleData;
    const message = `${title}\n\nRead More @${url}\n\nShared via News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };

  handleClose = () => {
    return this.props.onClose();
  };

  render() {
    const { showModal, articleData } = this.props;
    const articles_url = articleData.url;
    console.log("Url", articles_url);
    console.log("ShowModal", showModal);
    console.log("Article ", articleData);
    if (articles_url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container
            style={{
              margin: 0,
              marginBottom: 0,
            }}
          >
            <Header>
              <Left>
                <Button transparent onPress={this.handleClose}>
                  <Icon name="close" style={{ color: "white", fontSize: 12 }} />
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{ color: "white" }}
                />
              </Body>
              <Right>
                <Button transparent onPress={this.handleShare}>
                  <Icon name="share" style={{ color: "white", fontSize: 12 }} />
                </Button>
              </Right>
            </Header>
            <Content style={{ flex: 1 }}>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <WebView
                  source={{ uri: articles_url }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  startInLoadingState={true}
                  scalesPageToFit={true}
                />
              </View>
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;
