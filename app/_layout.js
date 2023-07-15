import { Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from 'react-native';

import { FontAwesome5Icon, MaterialIcon } from '../utils/utils';

import SafeViewAndroid from '../styles/SafeViewAndroid.style';

const Layout = () => {
  const iconColor = (focused) => {
    return focused ? 'red' : 'black';
  };
  return (
    <>
      <SafeAreaView
        style={SafeViewAndroid.AndroidSafeArea}
        edges={['top', 'left', 'right']}
      >
        {/* <SafeAreaView style={{ flex: 1 }}> */}
        <Tabs
          screenOptions={{
            headerShown: false,
            // tabBarActiveTintColor: 'red',
            // tabBarInactiveTintColor: 'pink',
            tabBarStyle: {
              backgroundColor: 'white',
              height: 70,
              paddingBottom: Platform.OS === 'android' ? 0 : 0, // removes iOS padding
            },
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: 'bold',
            },
            tabBarShowLabel: false,
          }}
        >
          <Tabs.Screen
            name='home/home'
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome5Icon
                  size={20}
                  name={focused ? 'house-damage' : 'home'}
                  color={iconColor(focused)}
                  focused={focused}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='search/search'
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome5Icon
                  size={22}
                  name={focused ? 'search-plus' : 'search'}
                  color={iconColor(focused)}
                  focused={focused}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='create/create'
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcon
                  size={25}
                  name={focused ? 'tooltip-plus' : 'tooltip-plus-outline'}
                  color={iconColor(focused)}
                  focused={focused}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='reels/reels'
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcon
                  size={25}
                  name={focused ? 'movie-open' : 'movie-play'}
                  color={iconColor(focused)}
                  focused={focused}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='profile/profile'
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome5Icon
                  size={20}
                  name={focused ? 'user-astronaut' : 'user'}
                  color={iconColor(focused)}
                  focused={focused}
                />
              ),
            }}
          />
          {/** You can hide tabs like so: */}
          <Tabs.Screen
            name='hidden'
            options={{
              // headerShown: true,
              href: null,
            }}
          />
          <Tabs.Screen
            name='home/home.style'
            options={{
              // headerShown: true,
              href: null,
            }}
          />
          <Tabs.Screen
            name='profile/profile.style'
            options={{
              // headerShown: true,
              href: null,
            }}
          />
          <Tabs.Screen
            name='reels/reels.style'
            options={{
              // headerShown: true,
              href: null,
            }}
          />
          <Tabs.Screen
            name='index'
            options={{
              // headerShown: true,
              href: null,
            }}
          />
          <Tabs.Screen
            name='register/register'
            options={{
              // headerShown: true,
              href: null,
            }}
          />
        </Tabs>
      </SafeAreaView>
    </>
  );
};

export default Layout;
