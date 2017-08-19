import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    // initialize Firebase
    var config = {
      apiKey: "AIzaSyAUuxEAOGgAMXewFFROVTXNQ--81o-WI28",
      authDomain: "authentication-2529d.firebaseapp.com",
      databaseURL: "https://authentication-2529d.firebaseio.com",
      projectId: "authentication-2529d",
      storageBucket: "authentication-2529d.appspot.com",
      messagingSenderId: "456211694746"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
    });
  }


  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return(
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
