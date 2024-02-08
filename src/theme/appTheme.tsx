import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom:15,
  },
  resultSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    
  },

  stylesFiel: {
    flexDirection: 'row',
    justifyContent:'center',
    marginBottom:18,
    paddingHorizontal:10,
  },

  buttonView: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal:6,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
