import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';
import { Component } from 'react';
import { Actions } from 'react-native-router-flux';

interface State {
  email: string,
  name: string,
  password: string,
  passwordConfirmation: string
}

export default class LoginView extends Component<State> {
  state: State = {
    email: "",
    name: "",
    password: "",
    passwordConfirmation: ""
  }

  onPressValidate = (): void => {
    Actions.register
  }

  onEmailChange = (value: string) => {
    this.setState({ email: value })
  }

  onNameChange = (value: string) => {
    this.setState({ name: value })
  }

  onPasswordChange = (value: string) => {
    this.setState({ password: value })
  }

  onPassword2Change = (value: string) => {
    this.setState({ passwordConfirmation: value })
  }

  render() {

    return (
      <View style={styles.container}>


        <TextInput
          value={this.state.email}
          onChangeText={(text) => this.onEmailChange(text)}
          inputMode='email'
          placeholder="Escribe tu correo"
          placeholderTextColor="#000"
          style={styles.TextInput}
        />

        <TextInput
          value={this.state.name}
          onChangeText={(text) => this.onNameChange(text)}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#000"
          style={styles.TextInput}
        />

        <TextInput
          value={this.state.password}
          onChangeText={(text) => this.onPasswordChange(text)}
          secureTextEntry={true}
          placeholder="Escribe tu contraseña"
          placeholderTextColor="#000"
          style={styles.TextInput}
        />

        <TextInput
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.onPassword2Change(text)}
          secureTextEntry={true}
          placeholder="Repite tu contraseña"
          placeholderTextColor="#000"
          style={styles.TextInput}
        />

        <Pressable
          onPress={() => this.onPressValidate()}
          accessibilityLabel="Iniciar Sesión"
          style={styles.button}
        >
          <Text style={styles.textButton}>Registrarse</Text>
        </Pressable>



      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 17,
  },
  button: {
    backgroundColor: '#7676C2',
    borderColor: 'red',
    padding: 15,
    borderRadius: 100,
    margin: 30,
  },
  TextInput: {
    textAlign: "center",
    width: 200,
    margin: 10,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 30,
    paddingLeft: 5,
    paddingRight: 5,
  },
  Img: {
    width: 200,
    height: 200,
    margin: 30,
  },
});
