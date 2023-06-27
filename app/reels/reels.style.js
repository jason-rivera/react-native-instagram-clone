import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  username: {
    fontSize: 24,
    fontWeight: 'bold',

    color: 'white',
  },
  follow: {
    fontSize: 15,
    fontWeight: 'bold',

    color: 'white',
  },
  caption: {
    borderWidth: 5,
    borderColor: 'purple',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  sideIcons: {
    fontSize: 50,
    color: 'white',
  },
  leftSideContainer: {
    borderWidth: 5,
    borderColor: 'red',
    justifyContent: 'flex-end',
  },
  usernameFollowContainer: {
    borderWidth: 5,
    borderColor: 'yellow',
    flexDirection: 'row',
  },
  iconsContainer: {
    borderWidth: 5,
    borderColor: 'green',
  },
});

export default styles;
