import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar,Text,Button} from 'react-native-elements';


export default class StudentItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            student_num:0
        }
        this.heandChangeStudent = this.heandChangeStudent.bind(this);
    }
    heandChangeStudent = ()=>{
        let student_num = this.state.student_num+1;
        console.log('btn' , student_num);
        this.setState({student_num})
    }

    render(){
        const {student_list}=this.props;
        let {student_num}=this.state;
        console.log('student',student_list[student_num]);
        let name = '';let stuNum=181000;
        try {
            name = student_list[student_num].name;
            stuNum = student_list[student_num].id;
        } catch (error) {
            name = '';
        }
        return(
            <View style={styles.container}>
                <Avatar 
                    size = {300}
                    rounded
                    source={{
                        uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />

                <Text h2>
                    {stuNum}
                </Text>
                <Text h1>
                    {name}
                </Text>
                <View style={styles.containerRow}>
                    <Button buttonStyle={styles.btn} titleStyle={styles.btnTitleStyle} title='出席' onPress={this.heandChangeStudent}></Button>
                    <Button buttonStyle={styles.btn} titleStyle={styles.btnTitleStyle} type='outline' title='欠席'></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    containerRow:{
        width:'100%',
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    btn:{
        padding:100,
        borderRadius:20,
    },
    btnTitleStyle:{
        fontSize:50,
    }
})