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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTopBarStyle: {
    color: 'black',
    alignSelf: 'baseline',
    paddingHorizontal: 10,
    fontSize: 20,
    borderColor: '#fee29b',
    borderRadius: 5,
    borderWidth: 3
  },
  textNoNotifications: {
    color: 'black',
    backgroundColor: '#fee29b',
    textAlign: 'center',
    paddingVertical: 30,
    fontSize: 25,
  },
});
