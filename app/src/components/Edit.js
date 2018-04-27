import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import createQueryRenderer from '../../relay/createQueryRenderer';
import SessionEditMutation from '../mutations/SessionEditMutation';

class Edit extends Component {
  static navigationOptions = {
    headerTitle: "Edit",
  };

  state = {
    day: '',
    title: '',
    speakers: [''],
    slot: '',
  }
  
  componentDidMount() {
    this.setState({ ...this.props.session });
  }

  onSavePress() {
    const { day, title, speakers, slot } = this.state;

    if (!day || !title || !speakers || !slot) {
      alert('invalid');
      return null;
    }

    const onCompleted = () => {
      alert('Updated');
      this.props.navigation.goBack();
    }

    const onError = (err) => {
      alert('Error');
    }

    const input = {
      _id: this.props.navigation.state.params._id,
      day,
      title,
      speakers,
      slot,
    };

    SessionEditMutation.commit(input, onCompleted, onError);
  }
  
  render() {
    return (
      <View>
        <View>
          <View>
            <Text>Day</Text>
            <TextInput 
              placeholder='Title'
              underlineColorAndroid='transparent'
              placeholderTextColor='#eaeded'
              value={this.state.day.toString()}
              onChangeText={(day) => this.setState({ day })}
            />
          </View>
          <View>
            <Text>Title</Text>
            <TextInput 
              placeholder='Title' 
              autoCorrect
              underlineColorAndroid='transparent'
              placeholderTextColor='#eaeded'
              value={this.state.title}
              onChangeText={(title) => this.setState({ title })}
            />
          </View>
          <View>
            <Text>Slot</Text>
            <TextInput 
              placeholder='Slot' 
              autoCorrect
              underlineColorAndroid='transparent'
              placeholderTextColor='#eaeded'
              value={this.state.slot}
              onChangeText={(slot) => this.setState({ slot })}
            />
          </View>
          <View>
            <Text>Speaker</Text>
            <TextInput 
              placeholder='Speaker' 
              autoCorrect
              underlineColorAndroid='transparent'
              placeholderTextColor='#eaeded'
              value={this.state.speakers[0]}
              onChangeText={(speakers) => this.setState({ speakers: [speakers] })}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => this.onSavePress()}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
};

const EditFragmentContainer = createFragmentContainer(Edit, {
  session: graphql`
    fragment Edit_session on Session {
      _id
      title
      speakers
      slot
      day
    }
  `,
});

export default createQueryRenderer(EditFragmentContainer, Edit, {
  query: graphql`
    query EditQuery($id: String!) {
      session (_id: $id) {
        ...Edit_session
      }
    }
  `,
  queriesParams: props => {
    return ({ id: props.navigation.state.params._id || '' })
  }
})
