import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import images from '../../constants/images';
import * as React from 'react';
import { MaterialIcon, FontAwesome5Icon } from '../../utils/utils';

import styles from './profile.style';

const posts = [
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
  'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
];

const reels = [
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
];

const taggedPosts = [
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
];

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

const FirstRoute = () => {
  const renderItem = ({ item }) => (
    <View style={styles.column(itemWidth)}>
      <Image style={styles.item} source={{ uri: item }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
};

const SecondRoute = () => {
  const renderItem = ({ item }) => (
    <View style={styles.column(itemWidth)}>
      <Image style={styles.item} source={{ uri: item }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
};
const ThirdRoute = () => {
  const renderItem = ({ item }) => (
    <View style={styles.column(itemWidth)}>
      <Image style={styles.item} source={{ uri: item }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={taggedPosts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const Profile = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '🔳' },
    { key: 'second', title: '🎥' },
    { key: 'third', title: '🧑' },
  ]);

  return (
    <>
      <View style={{ paddingHorizontal: 15, backgroundColor: 'white' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 23 }}>
              jvsonrivera
            </Text>
            <MaterialIcon size={15} name={'lock'} color='black' />
            <MaterialIcon
              size={15}
              name={'lock-open-variant-outline'}
              color='black'
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <MaterialIcon size={28} name={'menu'} color='black' />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              style={styles.profileIcon}
              source={images.goku_god}
              resizeMode='contain'
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={styles.profileStatsNum}>168</Text>
              <Text style={styles.profileStatsText}>Posts</Text>
            </View>
            <View>
              <Text style={styles.profileStatsNum}>1,033</Text>
              <Text style={styles.profileStatsText}>Followers</Text>
            </View>
            <View>
              <Text style={styles.profileStatsNum}>1,845</Text>
              <Text style={styles.profileStatsText}>Following</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.profileUsername}>Jason ✌</Text>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <TouchableOpacity style={[styles.profileBtn, { flexGrow: 1 }]}>
              <Text style={styles.profileBtnText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.profileBtn, { flexGrow: 1 }]}>
              <Text style={styles.profileBtnText}>Share profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: 'white' }}
            indicatorStyle={{ backgroundColor: 'black', height: 1 }}
          />
        )} // <-- add this line
      />
    </>
  );
};

export default Profile;
