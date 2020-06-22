import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { getArticles } from "../../service/news";
import DataItem from "./../../component/DataItem";
import { ActivityIndicator, View } from "react-native";
// import Modal from "../../component/Modal";
import ModalComponent from "./../../component/Modal";

export default class Tab1 extends Component {
  state = {
    isLoading: true,
    data: null,
    setModalVisible: false,
    modalArticleData: {},
  };

  handleItemDataonPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  componentDidMount() {
    getArticles().then((data) => {
      this.setState({
        isLoading: false,
        data,
      });
    });
  }
  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{ marginLeft: "35%" }}>Please Wait.....</Text>
      </View>
    ) : (
      <View style={{ position: "relative" }}>
        <List
          dataArray={this.state.data}
          renderRow={(item) => (
            <DataItem
              onPress={this.handleItemDataonPress}
              data={item}
              style={{ position: "absolute", left: 0, right: 0 }}
            />
          )}
        />
        <ModalComponent
          style={{ position: "relative", left: 0, right: 0 }}
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </View>
    );
    return (
      <Container>
        <Content>{view}</Content>
      </Container>
    );
  }
}
