import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';
import { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { validateEmail, validatePassword, validateBlankField } from './scripts/validations';

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

  onPressValidate = (email: string, password: string, passwordConfirmation: string, name: string): void => {
    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);
    const validatedBlankEmail = validateBlankField(email);
    const validatedBlankPassword = validateBlankField(password);
    const validatedBlankPasswordConfirmation = validateBlankField(passwordConfirmation);
    const validatedBlankName = validateBlankField(name);

    if (validatedBlankEmail || validatedBlankPassword || validatedBlankPasswordConfirmation || validatedBlankName) {
      Alert.alert('Campos vacíos', 'Favor de rellenar todos los campos', [
        { text: 'OK', onPress: () => console.log('OK Pressed Email') },
      ]);
      return
    } else {
      if (!validatedEmail) {
        Alert.alert(`${email}`, 'No es un correo válido', [
          { text: 'OK', onPress: () => console.log('OK Pressed Email') },
        ]);
        return
      }
      if (!validatedPassword) {
        Alert.alert('Contraseña inválida', 'La contraseña debe incluir al menos 8 caracteres, un número, una mayúscula y un caracter especial', [
          { text: 'OK', onPress: () => console.log('OK Pressed Password') },
        ]);
        return
      }
      if (this.state.password !== this.state.passwordConfirmation) {
        Alert.alert('Las contraseñas no coinciden', 'Las contraseñas ingresadas no son las mismas', [
          { text: 'OK', onPress: () => console.log('OK Pressed Password') },
        ]);
        return
      }
      if (validatedEmail && validatedPassword && password === passwordConfirmation && !validatedBlankName) {
        Alert.alert('Cuenta valida', 'Haz ingresado de manera correcta', [
          { text: 'OK', onPress: () => Actions.login() },
        ]);
        return
      }
    }
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

  onPasswordConfirmationChange = (value: string) => {
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
          onChangeText={(text) => this.onPasswordConfirmationChange(text)}
          secureTextEntry={true}
          placeholder="Repite tu contraseña"
          placeholderTextColor="#000"
          style={styles.TextInput}
        />

        <Pressable
          onPress={() => this.onPressValidate(this.state.email, this.state.password, this.state.passwordConfirmation, this.state.name)}
          accessibilityLabel="Registrarse"
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
    color: "white",
  },
  button: {
    backgroundColor: '#7676C2',
    padding: 15,
    borderRadius: 100,
    margin: 30,
  },
  TextInput: {
    textAlign: "center",
    width: 200,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
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
