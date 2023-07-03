import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { Navbar } from './src/components/navbar';

export default function App() {
  return (
    <View>
    <Navbar/>
    <View style={styles.container}>
      <Home/>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:75,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
