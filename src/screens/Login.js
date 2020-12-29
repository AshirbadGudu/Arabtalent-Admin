import React, {useState} from 'react';
import {View, Image, KeyboardAvoidingView, Text} from 'react-native';
import {Button, Card, TextInput, Title} from 'react-native-paper';
import {useAppContext} from '../config/AppContext';
import {COLORS} from '../config/Colors';
import {AuthStyle} from '../config/Style';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = (props) => {
  const {login} = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState({isOpen: false, msg: ''});
  const handelLogin = async () => {
    try {
      setLoader({isOpen: true, msg: 'Authenticating...'});
      await login(email, password);
      alert('Successfully logged in');
    } catch (error) {
      setLoader({isOpen: false, msg: ''});
      alert(error.message);
    }
  };
  return (
    <>
      <KeyboardAvoidingView style={AuthStyle.container}>
        <Spinner visible={loader.isOpen} textContent={loader.msg} />
        <Card style={{padding: 20}}>
          <Image
            source={require('../assets/logo.png')}
            style={{resizeMode: 'contain', width: '100%', height: '25%'}}
          />
          <Title style={{textAlign: 'center'}}>Login</Title>
          <Card.Content>
            <TextInput
              style={{marginBottom: 10}}
              keyboardType="email-address"
              mode="outlined"
              label="Enter Email ID"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={{marginBottom: 10}}
              secureTextEntry={true}
              mode="outlined"
              label="Enter Your Password"
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={AuthStyle.Right}>
              <Button
                onPress={() => props.navigation.navigate('ForgetPassword')}>
                Forget Password?
              </Button>
            </View>
            <Button
              onPress={handelLogin}
              color={COLORS.PRIMARY}
              style={{marginVertical: 5}}
              mode="contained">
              Sign In
            </Button>
          </Card.Content>
        </Card>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
