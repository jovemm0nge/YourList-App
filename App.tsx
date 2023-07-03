import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { Navbar } from './src/components/navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    marginLeft:25,
    marginRight:25,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
