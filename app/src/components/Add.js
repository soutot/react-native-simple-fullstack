import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import createQueryRenderer from '../../relay/createQueryRenderer';
import SessionAddMutation from '../mutations/SessionAddMutation';

class Add extends Component {
  static navigationOptions = {
    headerTitle: "Add",
  };
  state = {
    day: '',
    title: '',
    speakers: '',
    slot: '',
  }
  onAddPress() {
    const { day, title, speakers, slot } = this.state;

    if (!day || !title || !speakers || !slot) {
      alert('invalid');
      return null;
    }

    const onCompleted = () => {
      alert('Added');
      this.props.navigation.goBack();
    }

    const onError = (err) => {
      alert('Error');
    }

    const input = {
      day,
      title,
      speakers,
      slot,
    };

    SessionAddMutation.commit(input, onCompleted, onError);
  }

  render() {
    return (
      <View>
        <View>
          <View>
            <Text>Day</Text>
            <TextInput 
              placeholder='Day' 
              autoCorrect
              underlineColorAndroid='transparent'
              placeholderTextColor='#eaeded'
              value={this.state.day}
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
              value={this.state.speakers}
              onChangeText={(speakers) => this.setState({ speakers })}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => this.onAddPress()}>
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
};

export default Add;
