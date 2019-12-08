import React from 'react';
import {View, ImageBackground,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native-elements';


export default class PeriodSelecte extends React.Component{
    static navigationOptions = {
        title:'クロスメディア情報学科'
    }
    constructor(props){
        super(props);
        this.state={
            periods:[{stt:1},{stt:2},{stt:3},{stt:4}],
            date: 12,
        };
    }
    render(){
       
        return(
            <ImageBackground source={require('../assets/BG.png')} style={{width:'100%',height:'100%'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text h1 style={{fontWeight:'800',color:'#2E6392'}}>2年生</Text>
                <View style={{flexDirection:'row', alignItems:'center',marginTop:50}}>
                    <Icon name='calendar-check-o' size={30}/>
                    <Text h4 style={{marginRight:50}}>{this.state.date}</Text>
                    <Text h4>水曜日</Text>
                </View>
            </View>
            <View style={{flex:2}}>
                <View style={{alignItems:'center'}}>
                    <FlatList 
                        data={this.state.periods}
                        renderItem={({item})=>
                            <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                                this.props.navigation.navigate('StudentsList',{sttId: item.stt.toString(),otherParam:item.stt.toString()+'限目'})
                            }}>
                                <View style={(item.stt%2==0)?styles.ctmbutton2:styles.ctmbutton1}>
                                    <Text h3 style={{color:'#FFF'}}>{item.stt}限目</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item,index)=> {return index.toString()}}
                    />
                </View>
            </View>
            </ImageBackground>
    );
    }
    componentDidMount(){
        let date = new Date();
        let d = date.getDate();
        let m = date.getMonth()+1;
        let y = date.getFullYear()  ;
        date =  y + '-'+m+'-'+d;
        this.setState({date});
    }
}

const styles = StyleSheet.create({
    ctmbutton1:{
        backgroundColor:'#2E6392',
        borderRadius:20,
        height:100,
        width:410,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    ctmbutton2:{
        backgroundColor:'#5E86AB',
        borderRadius:20,
        height:100,
        width:410,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    
});