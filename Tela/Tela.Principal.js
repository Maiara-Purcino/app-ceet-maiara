import react from "react";
import { View,Text,Button } from "react-native-web";
 
const  TelaPrincipal =({navigaton}) =>{
    return(
        <View>
           
            <Text>...............................</Text>
            <Text>..........TelaPrincipal........</Text>
            <Text>..............................</Text>
           
            <Button
             title= "ir para tela 01"
             onPress={()=> navigaton.navigate('Tela01')}
             />
 
        </View>
    )
}
 
export default TelaPrincipal;
