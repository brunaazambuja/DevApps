import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollViewStyle: {
    alignContent: 'center',
    flexGrow: 1,
  },
  textNoNotifications: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  viewNoNotifications: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  notificationCardView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ebc052',
    backgroundColor: '#f7ecd0',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
  buttonText: {
    color: '#434343',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'normal',
  },
  acceptButton: {
    backgroundColor: '#5ced83',
    margin: 5,
    height: 34,
    width: 100,
    elevation: 5,
  },
  rejectButton: {
    backgroundColor: '#fa6969',
    margin: 5,
    height: 34,
    width: 100,
    elevation: 5,
  },
  okButton: {
    backgroundColor: '#4ea3f2',
    margin: 5,
    height: 34,
    width: 100,
    elevation: 5,
  },
});
