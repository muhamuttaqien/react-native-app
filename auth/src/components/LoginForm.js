import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state; // get access for email and password state variables within this function/ method

    this.setState({ error: '' , loading: true }); // (toggling) manage all error state so it runs properly along authentication flow, this one is what is challenging in mobile developments

    firebase.auth().signInWithEmailAndPassword(email, password) // will return a promise that is constructed for handling some amount of asynchronous code
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ // we always rerender component by changing state
      error: 'Authentication Failed',
      loading: false
    });
  }

  renderButton() { // to decide which one is wanted to be rendered, whether spinner or button at the same place
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}> // because this is a function that will be called some points in the future
        Log in
      </Button>
    );
  }

  render() {
    console.log("LoginForm component")

    return (
      <Card>
        <CardSection>
          <Input // using state for reusable component purpose
            placeholder="user@gmail.com" // placeholder, label, value is passing props
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })} // {text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry // the same as secureTextEntry={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error} // by default its value is empty string
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
