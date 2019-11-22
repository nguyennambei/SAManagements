import React from 'react';
import {View, ImageBackground, Text} from 'react-native';

export default class StudentsList extends React.Component{
    static navigationOptions = ({navigation})=>{
        return{
            title: navigation.getParam('otherParam'),
        };
    }
    render(){
    return(
            <ImageBackground source={require('../assets/BG.png')} style={{width:'100%',height:'100%'}}>
            <Text>Inside</Text>
        </ImageBackground>
    );
    }
} 