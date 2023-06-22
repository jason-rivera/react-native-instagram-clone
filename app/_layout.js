import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          headerTitle: '',
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
  );
};

export default Layout;
