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
import ModalComponent from './../../component/Modal';

export default class Tab2 extends Component {
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
    getArticles('sports').then((data) => {
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
      <List
        dataArray={this.state.data}
        renderRow={(item) => (
          <DataItem onPress={this.handleItemDataonPress} data={item} />
        )}
      />
    );
    return (
        <Container>
          <Content>
            {view}
            <ModalComponent
              showModal={this.state.setModalVisible}
              articleData={this.state.modalArticleData}
              onClose={this.handleModalClose}
            />
          </Content>
        </Container>
    );
  }
}
