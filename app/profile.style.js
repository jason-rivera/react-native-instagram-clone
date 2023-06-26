import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileIcon: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 100,
  },
  profileUsername: {
    height: 40,
  },
  profileStatsNum: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  profileBtn: {
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // test
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: (itemWidth) => ({
    width: itemWidth,
    padding: 1,
  }),
  item: {
    height: 140,
    width: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
