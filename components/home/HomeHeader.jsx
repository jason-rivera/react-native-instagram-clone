import { Text, View, Image } from 'react-native';

import { MaterialIcon } from '../../utils/utils';
import styles from './HomeHeader.style';

const HomeHeader = () => {
  return (
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
          gap: 20,
        }}
      >
        <MaterialIcon size={25} name={'tag-heart'} color='black' />
        <MaterialIcon size={25} name={'message-text-outline'} color='black' />
      </View>
    </View>
  );
};

export default HomeHeader;
