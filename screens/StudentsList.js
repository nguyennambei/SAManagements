import React from 'react';
import {View, ImageBackground, Text, FlatList} from 'react-native';
import {firebaseApp} from '../components/FirebaseConfig';
import StudentItem from '../components/StudentItem';

export default class StudentsList extends React.Component{
    static navigationOptions = ({navigation})=>{
        return{
            title: navigation.getParam('otherParam'),
        };
    }
    constructor(props){
        super(props);
        this.state={
            student_list:[],
            attendance:[]
        }
        this.itemRef = firebaseApp.database();
        
    }
    render(){
        console.log('object');
        const {student_list}=this.state;
    return(
        <ImageBackground source={require('../assets/BG.png')} style={{width:'100%',height:'100%'}}>
            <StudentItem student_list={student_list} />
        </ImageBackground>
    );
    }

    componentDidMount(){
        console.log('did');
        this.itemRef.ref('student_data').child('2018').on('value', data=>{
                this.setState({student_list:data.val().student_list})
            })
    }
} 