import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import David from './assets/david.jpg'
import Hector from './assets/hector.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Select Your Preferred House !!</Text>
      <View style={styles.containerRow}>
      <TouchableOpacity>
      <Text>A</Text>
      <Image style={{height:100, width:200}} source={David} />
      </TouchableOpacity>
      <View style={styles.oR}>
      <Text>OR</Text>
      </View>
      <TouchableOpacity>
      <Text>B</Text>
      <Image style={{height:100, width:200}} source={Hector} />
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
// align self
// justifyContent flex end

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '60%',
    color: 'rgb(79, 81, 174)',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '10%',
  },
  oR: {
    alignItems: 'center', 
    justifyContents:'flex-end',
    marginRight: 60,
  },
});


// const justifyContents = [
//   'flex-start',
//   'flex-end',
//   'center',
//   'space-between',
//   'space-around',
//   'space-evenly',
// ];

// { layout: { width: 520, height: 70.5, x: 0, y: 42.5 }, target: 1127 }00111111111012.333333333333333333333333333333333333333333333333333333333333333333440