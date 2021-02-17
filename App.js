import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Sound1Button extends Component {
  displayAlert=()=>{
    alert('Sound1 is playing ')
  }
  
  render() {
    return <Button color="red" title="sound1" onPress={this.displayAlert} />;
  }
}
class Sound2Button extends Component {
  displayAlert=()=>{
    alert('Sound2 is playing ')
  }
  
  render() {
    return <Button color="green" title="sound2" onPress={this.displayAlert} />;
  }
}
class Sound3Button extends Component {
  displayAlert=()=>{
    alert('Sound3 is playing ')
  }
  
  render() {
    return <Button color="blue" title="sound3" onPress={this.displayAlert} />;
  }
}
class Sound4Button extends Component {
  displayAlert=()=>{
    alert('Sound4 is playing ')
  }
  
  render() {
    return <Button color="black" title="sound4" onPress={this.displayAlert} />;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Text>My DJ MIXER</Text>
        <Sound1Button />
        <Sound2Button />
        <Sound3Button />
        <Sound4Button />
      </View>
    );
  }
}
