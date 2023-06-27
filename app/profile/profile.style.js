import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileIcon: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#f1f1f1',
  },
  profileUsername: {
    height: 40,
  },
  profileStatsNum: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  profileStatsText: {
    fontSize: 14,
    textAlign: 'center',
  },
  profileBtn: {
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileBtnText: {
    fontWeight: 'bold',
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
