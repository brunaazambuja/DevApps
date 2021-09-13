import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
  },
  imageViewStyle: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 30,
  },
  textTittleStyle: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: '#f7a800',
  },
  textDataStyle: {
    color: '#757575',
    fontSize: 20,
    marginLeft: 40,
    marginBottom: 20,
  },
});
