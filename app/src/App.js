import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';
import idx from 'idx';
import environment from '../relay/environment';
import createQueryRenderer from '../relay/createQueryRenderer';
import Home from './components/Home';
import Routes from './router/routes';

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
