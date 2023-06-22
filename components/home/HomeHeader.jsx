import { Text, View } from 'react-native';

import styles from './HomeHeader.style';

const HomeHeader = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Instagram</Text>
        <View
          style={{
            flexDirection: 'row',
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
