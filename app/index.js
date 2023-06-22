import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import styles from './index.style';
import images from '../constants/images';

import HomeHeader from '../components/home/HomeHeader';

const profiles = ['vc_f', 'jaiden_r', 'm3lpac'];
const posts = [
  {
    username: 'vc_f',
    image: images.goku_god,
    likes: 98,
    comments: 4,
    caption: 'This is a caption',
  },
  {
    username: 'jaiden_r',
    image: images.goku_god,
    likes: 10,
    comments: 2,
    caption: 'Another caption',
  },
  {
    username: 'm3lpac',
    image: images.goku_god,
    likes: 52,
    comments: 3,
    caption: 'Some cool caption',
  },
];

const Home = () => {
  return (
    <ScrollView>
      <HomeHeader />
      <FlatList
        data={profiles}
        renderItem={({ item }) => (
          <View>
            <Image
              style={styles.userIcon}
              source={images.goku_god}
              resizeMode='contain'
            />
            <Text style={styles.userName}>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
        horizontal
      />

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width: '100%', height: 500 }}
              source={{
                uri: 'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text>👍</Text>
                <Text>💬</Text>
                <Text>✈</Text>
              </View>
              <Text>🏴</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>{item.likes} likes</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>{item.username} </Text>
                <Text>{item.caption}</Text>
              </View>
              <Text style={{ color: 'grey' }}>{item.comments} comments</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Home;
