/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Crashlytics } from 'react-native-fabric';

export default class App extends Component {

  componentDidMount(){
    Crashlytics.log('myView loaded');
  }

  onPress() {
    // just a string
    // Crashlytics.crash();
    Crashlytics.recordError("IT BROKED!");

    // a domain
    Crashlytics.recordError({
      domain: "somedomain",
      message: "something broke",
    });

    // a code
    Crashlytics.recordError({
      code: "123",
      message: "it broke again",
    });

    // a bunch of stuff
    Crashlytics.recordError({
      code: "123",
      domain: "somedomain",
      message: "help please",
      stack: `someMethod@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:82410:46
  anotherMethod@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:82451:34
wrappedResolvedCallback@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64615:32
resolve@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64553:33
wrappedResolvedCallback@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64630:22
resolve@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64553:33
wrappedResolvedCallback@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64630:22
resolve@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64553:33
http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64625:22
  wrappedResolvedCallback@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64615:32
http://localhost:8081/index.ios.bundle?platform=ios&dev=true:64681:30
  http://localhost:8081/index.ios.bundle?platform=ios&dev=true:4670:18
    callTimer@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:4292:9
forEach@[native code]
callTimers@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:4315:17
__callFunction@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:3702:28
http://localhost:8081/index.ios.bundle?platform=ios&dev=true:3606:22
  guard@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:3560:3
callFunctionReturnFlushedQueue@http://localhost:8081/index.ios.bundle?platform=ios&dev=true:3605:6
callFunctionReturnFlushedQueue@[native code]
apply@[native code]`,
    });
  }
  handlePress(){
    console.log('keepup madafaka');
    // Crashlytics.crash();
    Crashlytics.recordError ('IT BROKED SECOND!');
    Crashlytics.log("This is log waaw")

  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.onPress}>
        <Text style={styles.welcome} >
          Welcome to React Native!
        </Text>

      </TouchableOpacity>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>PressMe</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
