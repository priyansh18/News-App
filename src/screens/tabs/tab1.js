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
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  style={{ marginRight: "10%" }}
                  square
                  source={{
                    uri: "https://picsum.photos/200/300",
                  }}
                />
              </Left>
              <Body style={{ marginLeft: 70 }}>
                <Text>Sankhadeep</Text>
                <Text numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri: "https://picsum.photos/200/300",
                  }}
                />
              </Left>
              <Body style={{ marginLeft: 70 }}>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri: "https://picsum.photos/200/300",
                  }}
                />
              </Left>
              <Body style={{ marginLeft: 70 }}>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri: "https://picsum.photos/200/300",
                  }}
                />
              </Left>
              <Body style={{ marginLeft: 70 }}>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri: "https://picsum.photos/200/300",
                  }}
                />
              </Left>
              <Body style={{ marginLeft: 70 }}>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
