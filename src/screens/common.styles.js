import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 5,
    color: '#505050',
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: -10,
    marginBottom: 15,
    color: '#199333',
    borderColor: '#7f7f7f',
  },
  btn: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    marginTop: 20,
    elevation: 7,
    backgroundColor: '#199333',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  imgWrapper: {
    position: 'absolute',
    right: 0,
    bottom: -90,
    width: '100%',
  },
  img: {
    width: 450,
    height: 300,
    opacity: 0.9,
  },
  form: {
    marginTop: 40,
    marginHorizontal: 25,
  },
});

export default styles;
