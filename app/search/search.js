import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from 'react-native';

const Search = () => {
  const handleTouchOutside = () => {
    Keyboard.dismiss();
  };

  return (
    // <SafeAreaView>
    <TouchableWithoutFeedback onPress={handleTouchOutside}>
      <View
        style={{ backgroundColor: 'white', flex: 1 }}
        onPress={handleTouchOutside}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#f0f0f0',
            backgroundColor: '#f0f0f0',
            margin: 10,
            height: 40,
            borderRadius: 5,
            paddingHorizontal: 10,
            fontSize: 16,
          }}
          placeholder='Search'
        />
      </View>
    </TouchableWithoutFeedback>
    // </SafeAreaView>
  );
};

export default Search;
