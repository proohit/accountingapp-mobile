import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  Title,
  Container,
  Tab,
  Tabs,
  Header,
  Body,
  Left,
  Right
} from 'native-base'
import * as Font from 'expo-font'
import { Platform } from '@unimodules/core';

export default class App extends React.Component {
  render() {
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
        <Tabs>
          <Tab heading='Tab1'>

          </Tab>
          <Tab heading='Tab2'>

          </Tab>
        </Tabs>

      </Container>
    );
  }
}

