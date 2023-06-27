import { Text, View, Image } from 'react-native';

import styles from './HomeHeader.style';

const HomeHeader = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
      >
        <View style={{ height: 40, width: 100 }}>
          <Image
            style={{ flex: 1 }}
            source={{
              uri: 'https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1-500x281.png',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            fontSize: 20,
          }}
        >
          <Text>♥</Text>
          <Text>📧</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
