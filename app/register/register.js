import { Text, TextInput, Button, View } from 'react-native';
import { FIREBASE_DB } from '../../firebaseConfig';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);

  const registerUser = async () => {
    setUserExists(false);
    console.log('add user');

    try {
      // Check if a user with the same username already exists
      const userQuery = query(
        collection(FIREBASE_DB, 'users'),
        where('username', '==', username)
      );
      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {
        // User with the same username already exists
        console.log('User already exists');
        setUserExists(true);
        return;
      }

      const user = await addDoc(collection(FIREBASE_DB, 'users'), {
        username: username,
        password: password,
      });
      console.log('adding user:', user);
      router.push('home/home');
    } catch (error) {
      console.log('error adding user:', error);
    }
  };

  return (
    <View style={{ gap: 20, margin: 20 }}>
      <Text>Create New Account</Text>
      <TextInput
        placeholder='Username'
        style={{ height: 30, backgroundColor: 'white', padding: 5 }}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder='Password'
        secureTextEntry={true}
        style={{ height: 30, backgroundColor: 'white', padding: 5 }}
        onChangeText={(text) => setPassword(text)}
      />
      {userExists && (
        <Text style={{ color: 'red' }}>Username already exists!</Text>
      )}
      <Button onPress={registerUser} title='Register' />
    </View>
  );
};

export default Register;
