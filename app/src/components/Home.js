import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import createQueryRenderer from '../../relay/createQueryRenderer';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('Add')}}>
          <Text>+</Text>
        </TouchableOpacity>
      ),
    };
  };
  
  _keyExtractor = (item, index) => item._id;

  _renderItem = ({ item }) => {
    const { _id, title } = item;
    
    if (!_id || !title) return null;

    return (
      <TouchableOpacity key={_id} onPress={() => {this.props.navigation.navigate('Detail', { _id })}}>
        <Text>{title}</Text>
      </TouchableOpacity>
    )
  };
  
  render() {
    return (
      <ScrollView>
        <View>
          <Text>Home</Text>
        </View>
        <View>
          <FlatList
            data={this.props.sessions || []}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
      </ScrollView>
    );
  };
};

const HomeFragmentContainer = createFragmentContainer(Home, {
  sessions: graphql`
    fragment Home_sessions on Session @relay(plural: true) {
      _id
      title
    }
  `,
});

export default createQueryRenderer(HomeFragmentContainer, Home, {
  query: graphql`
    query HomeQuery {
      sessions @relay(plural: true) {
        ...Home_sessions
      }
    }
  `
})
