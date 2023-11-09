import { validateBlankField, validateEmail, validatePassword } from './scripts/validations';
import { StyleSheet, Text, View, Pressable, TextInput, Alert, Image } from 'react-native';
import { Component } from 'react';
import { Actions } from 'react-native-router-flux';

interface State {
  email: string,
  password: string
}

export default class LoginView extends Component<State> {
  state: State = {
    email: "",
    password: "",
  }

  onPressValidate = (email: string, password: string) => {
    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);
    const validatedBlankEmail = validateBlankField(email);
    const validatedBlankPassword = validateBlankField(password);

    if (validatedBlankEmail || validatedBlankPassword) {
      Alert.alert('Correo o contraseña vacíos', 'Introduzca una contraseña o correo.', [
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
      if (validatedEmail && validatedPassword) {
        Alert.alert('Cuenta valida', 'Haz ingresado de manera correcta', [
          { text: 'OK', onPress: () => console.log('OK Pressed Password') },
        ]);
        return
      }
    }
    return true;
  }

  onEmailChange = (value: string) => {
    this.setState({ email: value })
  }

  onPasswordChange = (value: string) => {
    this.setState({ password: value })
  }

  render() {

    return (
      <View style={styles.container}>

        <Image source={require('./assets/luffy.png')} style={styles.Img} />

        <TextInput
          value={this.state.email}
          onChangeText={(text) => this.onEmailChange(text)}
          inputMode='email'
          placeholder="Escribe tu correo"
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

        <Pressable
          onPress={() => this.onPressValidate(this.state.email, this.state.password)}
          accessibilityLabel="Iniciar Sesión"
          style={styles.buttonLogin}
        >
          <Text style={styles.textButton}>Iniciar sesión</Text>
        </Pressable>
        <Pressable
          onPress={() => Actions.register()}
          accessibilityLabel="Registrarse"
          style={styles.buttonRegister}
        >
          <Text style={styles.textButton}>Registarse</Text>
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
  buttonLogin: {
    backgroundColor: '#7676C2',
    borderColor: 'red',
    padding: 15,
    borderRadius: 100,
    margin: 30,
  },
  buttonRegister: {
    backgroundColor: '#7676C2',
    borderColor: 'red',
    padding: 15,
    borderRadius: 100,
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
