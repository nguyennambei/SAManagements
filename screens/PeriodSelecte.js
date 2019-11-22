import React from 'react';
import {View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native-elements';


export default class PeriodSelecte extends React.Component{
    static navigationOptions = {
        title:'クロスメディア情報学科'
    }
    render(){
        return(
            <ImageBackground source={require('../assets/BG.png')} style={{width:'100%',height:'100%'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text h1 style={{fontWeight:'800',color:'#2E6392'}}>2年生</Text>
                <View style={{flexDirection:'row', alignItems:'center',marginTop:50}}>
                    <Icon name='calendar-check-o' size={30}/>
                    <Text h4 style={{marginRight:50}}>2019-11-20</Text>
                    <Text h4>水曜日</Text>
                </View>
            </View>
            <View style={{flex:2}}>

            </View>
            </ImageBackground>
    );
    }
}