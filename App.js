
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
                  //Classes
                    //Botão Som
                    import BotaoSom from "./botao_som.js";

//Classe padão do aplicativo
export default class App extends Component{

   //Constructor
   constructor(){

    //{super()} é usado no constructor para herdar as propriedades da classe de componente.
    super()
    this.state = {text: "", displayText: "", chunks: [], phones: []}
    
    } 


  //Renderização
  render(){

    return(
      <SafeAreaProvider>
        <View>
          <Header
            backgroundColor = {"#b18f00"}
              centerComponent = {{
                text:"Fonemas Legais",
                  style: {color:"#470048", fontSize: 30, fontWeight: 'bold'}
            }}
          >
          </Header>
           
              <TextInput placeholder = "Digite a palavra"
            style={styles.caixa_de_texto}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              this.setState({chunks: db[this.state.text].chunks});
                this.setState({phones: db[this.state.text].phones});
            }}>
            <Text style={styles.texto_botao}> START </Text>
          </TouchableOpacity>
            
            <View>
              {this.state.chunks.map((item)=>{
                return(
                  <BotaoSom silaba = {this.state.chunks[item]}
                  som = {this.state.phones[item]}></BotaoSom>
                )
              })}
            </View>
          
              
        </View>
      </SafeAreaProvider>
     
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