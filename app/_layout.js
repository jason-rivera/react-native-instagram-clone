import { Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import SafeViewAndroid from '../styles/SafeViewAndroid.style';

const Layout = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Tabs
        screenOptions={{
          headerShown: false,
          // tabBarActiveTintColor: 'red',
          // tabBarInactiveTintColor: 'pink',
          tabBarStyle: {
            backgroundColor: 'white',
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: () => <Icon name='home' size={30} />,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            tabBarIcon: () => <Icon name='search' size={30} />,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            tabBarIcon: () => <Icon name='plus' size={30} />,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name='reels'
          options={{
            tabBarIcon: () => <Icon name='film' size={30} />,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: () => <Icon name='user' size={30} />,
            tabBarShowLabel: false,
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
          name='index.style'
          options={{
            // headerShown: true,
            href: null,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default Layout;
