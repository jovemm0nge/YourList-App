import {StyleSheet, Text, View, Image, Button, ScrollView} from "react-native";
import { GenericButton } from "../../components/buttons/index";
import { Tasks } from "../../util/tasks";
import { ListCard } from "../../components/card";
import { Navbar } from "../../components/navbar";

export const Home = () => {
    
    const Logo = require("../../assets/imgs/lgrm01.png");
    const UserIcon = require("../../assets/icons/userIcon.png")
    

   return (
        <View>
            <Navbar/>
        <ScrollView>
            <View style={styles.container}>
        {Tasks.map((task) => (
            <ListCard
            key={task.id}
            title={task.title}
            description={task.description}
            category={task.category}
            difficulty={task.difficulty}
            />
        ))}
        </View>
        </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
   container:{
marginTop:100,
paddingRight:20,
paddingLeft:20
   }
});                               