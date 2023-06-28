import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './home.style';
import images from '../../constants/images';

import HomeHeader from '../../components/home/HomeHeader';
import { FontAwesome5Icon, MaterialIcon } from '../../utils/utils';

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
    comments: 0,
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
    <FlatList
      ListHeaderComponent={
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: 'white',
          }}
        >
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
        </View>
      }
      data={posts}
      renderItem={({ item }) => (
        <View style={{ backgroundColor: 'white' }}>
          <Image
            style={{ width: '100%', height: 500 }}
            source={{
              uri: 'https://i.pinimg.com/originals/30/e7/cf/30e7cfb75da311ffd3a658ab798ec7ab.jpg',
            }}
          />
          <View style={{ padding: 10, gap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                }}
              >
                <MaterialIcon size={25} name={'fire'} color='black' />
                <MaterialIcon size={25} name={'chat-outline'} color='black' />
                <MaterialIcon size={23} name={'send'} color='black' />
              </View>
              <View style={{ paddingRight: 6 }}>
                <FontAwesome5Icon size={23} name={'save'} color='black' />
              </View>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.likes} likes</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>{item.username} </Text>
                <Text>{item.caption}</Text>
              </View>
              <Text style={{ color: 'grey' }}>
                {item.comments < 1
                  ? 'No comments'
                  : `View ${item.comments > 1 ? 'all' : ''} ${
                      item.comments
                    } comment${item.comments > 1 ? 's' : ''}`}
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default Home;
