import { View, Text, SafeAreaView, Button } from 'react-native';
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '926112082982-ca9kn5uov21o0gm4itjvhap8j8g4ol4d.apps.googleusercontent.com',
    androidClientId:
      '926112082982-mrsdc0332dl9q0mjv0ubo9s6nh59j1ha.apps.googleusercontent.com',
    iosClientId:
      '926112082982-nkhhh6h2oknpndk372h3gbnk4npietnb.apps.googleusercontent.com',
    webClientId:
      '926112082982-j6tsb4cohuo65getdfc7qrhb4beuuj4o.apps.googleusercontent.com',
  });

  return (
    // <SafeAreaView>
    <View>
      <Text>Login</Text>
      <Button title='Sign in with Google' onPress={promptAsync} />
    </View>
    // </SafeAreaView>
  );
};

export default Login;
