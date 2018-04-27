import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import createQueryRenderer from '../../relay/createQueryRenderer';

class Detail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('Edit', { _id: navigation.state.params._id})}}>
          <Text>Edit</Text>
        </TouchableOpacity>
      ),
    };
  };
  render() {
    const { title, speakers, slot, day } = this.props.session;
    return (
      <View>
        <View>
          <Text>title:</Text>
          <Text>{ title || ''}</Text>
        </View>
        <View>
          <Text>speakers:</Text>
          <Text>{ speakers || ''}</Text>
        </View>
        <View>
          <Text>slot:</Text>
          <Text>{ slot || ''}</Text>
        </View>
        <View>
          <Text>day:</Text>
          <Text>{ day || ''}</Text>
        </View>
      </View>
    );
  };
};

const DetailFragmentContainer = createFragmentContainer(Detail, {
  session: graphql`
    fragment Detail_session on Session {
      _id
      title
      speakers
      slot
      day
    }
  `,
});

export default createQueryRenderer(DetailFragmentContainer, Detail, {
  query: graphql`
    query DetailQuery($id: String!) {
      session (_id: $id) {
        ...Detail_session
      }
    }
  `,
  queriesParams: props => {
    return ({ id: props.navigation.state.params._id || '' })
  }
})
