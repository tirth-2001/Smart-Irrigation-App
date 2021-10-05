import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 5,
    color: '#505050',
  },
  input: {
    borderBottomWidth: 1.5,
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: -10,
    marginBottom: 15,
    color: '#202020',
  },
  btn: {
    borderWidth: 2,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#000',
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
    bottom: 0,
  },
  img: {
    width: 300,
    height: 300,
    opacity: 0.8,
  },
  form: {
    marginTop: 20,
    marginHorizontal: 25,
  },
});

export default styles;
