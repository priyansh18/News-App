//import liraries
import React, { Component } from "react";
import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
  Button,
} from "native-base";
import { View } from "react-native";
import Time from './Time';

// create a component
class DataItem extends Component {
  render() {
    const value = this.props.data;
    console.log("Value", value);
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            style={{ marginRight: "10%" }}
            square
            source={{
              uri:
                value.urlToImage != null
                  ? value.urlToImage
                  : "https://picsum.photos/200/300",
            }}
          />
        </Left>
        <Body style={{ marginLeft: 70, marginRight: 70 }}>
          <Text numberOfLines={2}>{value.title}</Text>
          <Text note numberOfLines={2}>
            {value.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 8,
              marginLeft: 0,
            }}
          >
            <Text>{value.source.name}</Text>
            <Time time={value.publishedAt}/>
          </View>
        </Body>
        <Right>
          <Button>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default DataItem;
