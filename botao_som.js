
//Importando o que será usado
  //React
  import React from "react"; 
    //Componentes (botão, texto, view, touchableopacity, image)
    import {Button} from "react-native";
      import {Text} from "react-native";
    import {View} from "react-native";  
      import {TouchableOpacity} from "react-native";
    import {Image} from "react-native";
      //Component
      import {Component} from "react";
        //Header
        import {Header, TabView} from "react-native-elements";
          //Stylesheet
          import {StyleSheet} from "react-native";
            //SafeAreaProvider
            import {SafeAreaProvider} from "react-native-safe-area-context"
              //TextInpunt
              import {TextInput} from "react-native"
                //Banco de dados
                import db from "./database.js"
                    //Som
                    import {Audio} from "expo-av"    
                    
//Classe botao
export default class BotaoSom extends Component{

    tocar_som = async(som)=>{
        var link_som = 'https://s3-whitehatjrcontent.whjr.online/phones/' + som + '.mp3'
            await Audio.Sound.createAsync(
                {uri: link_som},{shouldPlay: true}
            )




    }
        render(){
            return(
                <View>
                    <TouchableOpacity style={styles.botao_fonema} onPress={() => {this.tocar_som(this.props.som)}}>
                        <Text style={styles.texto_botao}>{this.props.silaba}</Text>
                    </TouchableOpacity>
                </View>
            )
        }




}


const styles = StyleSheet.create({

    imagem: {
      width: 150,
      height: 150,
      marginLeft: 20,
      marginTop: 20
    },
  
    caixa_de_texto: {
      width: "50%",
      alignSelf: "center",
      height: 40,
      textAlign: "center",
      borderWidth: 4,
      marginTop: 30
    },
  
    botao: {
      width: "15%",
      justifyContent: "center",
      height: 50,
      allignItems: "center",
      allignSelf: "center",
      borderRadius: 10,
      backgroundColor: "#470048",
      marginTop: 20,
      marginLeft: 305,
    },
  
    texto_botao: {
      textAlign: "center",
      color: "white",
      fontSize: 20
    },
  
    botao_fonema: {
      width: "10%",
      height: 50,
      justifyContent: "center",
      allignItems: "center",
      allignSelf: "center",
      borderRadius: 10,
      backgroundColor: "#b18f00",
      marginTop: 30,
      marginLeft: 320
    },
  })