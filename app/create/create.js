import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  Platform,
  Dimensions,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Create() {
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  const getPermissions = async () => {
    if (hasPermission) {
      return;
      e;
    }
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert(
        'Permission to access the camera roll is required to upload images.'
      );
    } else {
      setHasPermission(true);
    }
  };
  getPermissions();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions['Images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      {image && (
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 2,
            resizeMode: 'contain',
          }}
        >
          <Image
            source={{ uri: image }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
      )}

      {/* {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )} */}

      {hasPermission ? (
        <View style={{ flexDirection: 'row', gap: 10, margin: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f0f0f0',
              padding: 15,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: '#87f8f8l',
            }}
            onPress={pickImage}
          >
            <Text style={{ fontSize: 16 }}>
              {image ? 'Upload different image' : 'Upload image'}
            </Text>
          </TouchableOpacity>
          {image && (
            <TouchableOpacity
              style={{
                backgroundColor: '#f0f0f0',
                padding: 15,
                borderRadius: 5,
                borderWidth: 2,
                borderColor: '#87f8f8l',
              }}
              onPress={() => console.log('Next clicked')}
            >
              <Text style={{ fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <Text
          style={{
            color: 'white',
            width: 230,
            textAlign: 'center',
          }}
        >
          Please go to Settings and grant permission to access gallery.
        </Text>
      )}
    </View>
  );
}
