import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Speech from 'expo-speech';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
     
    };
  }

speak =()=>{
var tosay = this.state.text;

Speech.speak(tosay);

}


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/12ef7fe7-c828-4378-a499-016fb971bc78.png',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={this.speak}>
          <Text style={styles.buttonText}>Speak</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor:"blue",
    borderRadius:40.
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
