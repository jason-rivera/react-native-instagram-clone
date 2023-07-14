import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useRouter } from 'expo-router';

import { useState } from 'react';
import * as React from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

// import 'expo-dev-client';

// WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  // const [userInfo, setUserInfo] = React.useState(null);
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   expoClientId:
  //     '926112082982-ca9kn5uov21o0gm4itjvhap8j8g4ol4d.apps.googleusercontent.com',
  //   androidClientId:
  //     '926112082982-mrsdc0332dl9q0mjv0ubo9s6nh59j1ha.apps.googleusercontent.com',
  //   iosClientId:
  //     '926112082982-nkhhh6h2oknpndk372h3gbnk4npietnb.apps.googleusercontent.com',
  //   webClientId:
  //     '926112082982-j6tsb4cohuo65getdfc7qrhb4beuuj4o.apps.googleusercontent.com',
  // });

  // GoogleSignin.configure();

  // GoogleSignin.configure({
  //   webClientId:
  //     '104527285258-q1rsp6uuh9gnk29j8db6cgrsdktlqgmp.apps.googleusercontent.com',
  // });

  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  //   // const user_sign_in = auth().signInWithCredential(googleCredential);
  //   // user_sign_in.then((user) => {
  //   //   console.log(user);
  //   // });
  // }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const login = () => {
    console.log(email, password);
    router.push('home/home');
  };

  return (
    // <SafeAreaView>
    <View style={{ gap: 20, margin: 20 }}>
      {/* <Button title='Sign in with Google' onPress={promptAsync} /> */}
      <Text>Login</Text>
      <TextInput
        placeholder='Email'
        style={{ height: 30, backgroundColor: 'white', padding: 5 }}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder='Password'
        style={{ height: 30, backgroundColor: 'white', padding: 5 }}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>

      {/* <Link href='home/home'>
        <Text>Go Home</Text>
      </Link> */}
    </View>
    // </SafeAreaView>
  );
};

export default Login;
