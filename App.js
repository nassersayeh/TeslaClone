import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarItem from './Components/CarList';
import Header  from './Components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarItem/>
      <StatusBar style='auto'/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
