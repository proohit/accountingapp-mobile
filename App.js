import React, { Component } from 'react';
import {
  Title,
  Container,
  Header,
  Body,
  Left,
  Right,
} from 'native-base'
import { AppLoading } from 'expo'
import TabSection from './src/TabSection'

export default class App extends Component {


  state = {
    fontLoaded: false
  };


  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />
    }
    return (

      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>AccountingApp</Title>
          </Body>
          <Right>

          </Right>
        </Header>

        <TabSection>
        </TabSection>

      </Container>
    );
  }
}

