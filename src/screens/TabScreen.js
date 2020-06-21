import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Left,
  Title,
  Right,
  Body,
} from "native-base";
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ marginLeft: "35%" }}>
          <Left />
          <Body>
            <Title>NewsApp</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            heading={
              <TabHeading>
                <Icon name="camera" />
                <Text>Camera</Text>
              </TabHeading>
            }
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            heading={
              <TabHeading>
                <Text>No Icon</Text>
              </TabHeading>
            }
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            heading={
              <TabHeading>
                <Icon name="apps" />
              </TabHeading>
            }
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
