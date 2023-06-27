import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';

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
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          disableIntervalMomentum={true}
          pagingEnabled={Platform.OS === 'android'}
          snapToAlignment={'center'}
          snapToInterval={windowHeight}
        />

        {/* <View style={{ height: '100%', width: '100%' }}>
        <ScrollView>
          <View>
            <Image
              style={{ height: '30%' }}
              source={{
                uri: 'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
              }}
            />

            <Image
              style={{ height: '30%' }}
              source={{
                uri: 'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
              }}
            />
            <Image
              style={{ height: '30%' }}
              source={{
                uri: 'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
              }}
            />

            <Image
              style={{ height: '30%' }}
              source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
              }}
            />
          </View>
        </ScrollView>
      </View> */}
      </View>
    </>
  );
};

const Reels2 = () => {
  return (
    <>
      <Text>hello world</Text>
    </>
  );
};

export default Reels;
