import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    margin: 30,
    elevation: 5,
  },
  statusBarStyle: {
    color: '#fee29b',
  },
  scrollViewStyle: {
    alignContent: 'center',
  },
  topBarStyle: {
    alignSelf: 'stretch',
    height: 30,
    flexDirection: 'row', // row
    backgroundColor: '#fee29b',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
  },
  textTopBarStyle: {
    color: 'black',
    alignSelf: 'baseline',
    paddingHorizontal: 10,
    fontSize: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});
