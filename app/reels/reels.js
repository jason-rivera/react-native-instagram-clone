import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';

import styles from './reels.style';
import { MaterialIcon, FontAwesome5Icon } from '../../utils/utils';

const reels = [
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
];

const windowHeight = Dimensions.get('window').height;

const Reels = () => {
  return (
    <>
      <View>
        <FlatList
          data={reels}
          renderItem={({ item }) => (
            <View style={{ height: windowHeight, width: '100%' }}>
              <Image
                style={{ flex: 1, width: '100%' }}
                source={{ uri: item }}
                resizeMode='cover'
              />
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'flex-end',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 50,
                  }}
                >
                  <View style={styles.leftSideContainer}>
                    <View style={styles.usernameFollowContainer}>
                      <Text style={styles.username}>jvsonrivera</Text>
                      <Text style={styles.follow}>FOLLOW</Text>
                    </View>
                    <View>
                      <Text style={styles.caption}>
                        Caption Caption Caption
                      </Text>
                    </View>
                  </View>
                  <View style={styles.iconsContainer}>
                    <MaterialIcon size={25} name={'heart'} color='black' />
                    <MaterialIcon size={25} name={'comment'} color='black' />
                  </View>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          disableIntervalMomentum={true}
          pagingEnabled={Platform.OS === 'android'}
          snapToAlignment={'center'}
          snapToInterval={windowHeight}
        />
        <View style={{ position: 'absolute' }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              padding: 10,
              color: 'white',
            }}
          >
            Reels
          </Text>
        </View>
      </View>
    </>
  );
};

export default Reels;
