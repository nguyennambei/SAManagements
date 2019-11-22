import React from 'react';
import {View, ImageBackground} from 'react-native';
import {Icon, Text} from 'react-native-elements';


export default class PeriodSelecte extends React.Component{
    static navigationOptions = {
        title:'クロスメディア情報学科'
    }
    render(){
        return(
            <ImageBackground source={require('../assets/BG.png')} style={{width:'100%',height:'100%'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text h1 style={{fontWeight:'800'}}>2年生</Text>

            </View>
            <View style={{flex:2,backgroundColor:'blue'}}>

            </View>
            {/* <View style={{flex:2,backgroundColor:'red'}}>

            </View> */}
            </ImageBackground>
    );
    }
}