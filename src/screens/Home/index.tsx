import {StyleSheet, Text, View} from "react-native";

export const Home = () => {
   return (
    <View style={styles.container}>
        <View>
        <Text>Home</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});