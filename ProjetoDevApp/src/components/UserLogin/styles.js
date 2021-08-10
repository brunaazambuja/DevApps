import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputField: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#bdbdbd',
    fontSize: 14,
    marginHorizontal: 25,
    paddingBottom: 4,
    marginVertical: 3,
    color: '#575756',
  },
  topBar: {
    backgroundColor: '#cfe9e5',
    height: 72,
    textAlignVertical: 'center',
    color: '#434343',
    fontSize: 20,
    paddingLeft: 50,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#bdbdbd',
    elevation: 5,
  },
  loginButton: {
    backgroundColor: '#88c9bf',
    alignSelf: 'center',
  },
  loginButtonText: {
    color: '#434343',
    fontSize: 16,
  },
  loginButtonContent: {
    textAlignVertical: 'center',
    height: 54,
    width: 280,
  },
  facebookButton: {
    backgroundColor: '#194f7c',
    alignSelf: 'center',
    marginVertical: 4,
  },
  googleButton: {
    backgroundColor: '#f15f5c',
    alignSelf: 'center',
    marginVertical: 4,
  },
});
