
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,

} from 'react-native';

class Botao extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        
        this.estilo = StyleSheet.create({ // Classe criada para usar em todo o app para botão com um estilo definido. 
            
            botao: {
                width: 250,
                heigth: 50,
                borderWidth: 2,
                borderColor: props.color,
                backgroundColor: 'transparent',
                borderRadius: 25,
            },

            botaoArea: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            },

            botaoText: {
                color: props.color,
                fontSize: 14,
                fontWeight: 'bold',
            },

        });
    }

    render() {
        return (
            
            <TouchableOpacity style = {this.estilo.botao} onPress = {this.props.onPress}>

                <View style = {this.estilo.botaoArea}>

                    <Text style = {this.estilo.botaoText}>this.props.text</Text>

                </View>

            </TouchableOpacity>
        );
    }
}

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {texto: ''};

        this.frases = ['Nem tudo é nada.', 'Deus ajuda quem cedo madruga.', 'A maior de todas as torres começa do solo.'];

        this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    }

    quebrarBiscoito() {
        let s = this.state;

        let r = Math.floor(Math.random() * this.frases.length);

        s.texto = this.frases[r];
        this.setState(s);

    }
  
    render() {
        return (

            <View style = {styles.body}>
                
                <Image sourse = {require('./images/cookie.png')} />
                <Text style = {styles.texto}>"{this.state.texto}"</Text>
                <Botao color = "#B59619" text = "Quebrar Biscoito" onPress = {this.quebrarBiscoito} />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    body: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        fontSize: 17,
        color: '#B59619',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center',
    }

});