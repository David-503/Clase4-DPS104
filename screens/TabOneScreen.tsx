import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet,TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
const[text1,setText1]=useState('');
const[text2,setText2]=useState('');
const[resultado,setResultado]=useState('');

function sumar(var1:any, var2:any){
  if(!!var1 && !!var2){
    var1=parseFloat(var1);
    var2=parseFloat(var2);
  
  let result:string = "Resultado: "+ var1 + "+" + var2 +"=" +(var1+var2);
  setResultado( result);
  }else{
    setResultado("ERROR");
  }

}
function restar(var1:any, var2:any){
  if(!!var1 && !!var2){
    var1=parseFloat(var1);
    var2=parseFloat(var2);
  
  let result:string = "Resultado: "+ var1 + "-" + var2 +"=" +(var1-var2);
  setResultado( result);
  }else{
    setResultado("ERROR");
  }

}
function dividir(var1:any, var2:any){
  if(!!var1 && !!var2){
    var1=parseFloat(var1);
    var2=parseFloat(var2);
  
  let result:string = "Resultado: "+ var1 + "/" + var2 +"=" +(var1/var2);
  setResultado( result);
  }else{
    setResultado("ERROR");
  }

}
function multiplicar(var1:any, var2:any){
  if(!!var1 && !!var2){
    var1=parseFloat(var1);
    var2=parseFloat(var2);
  
  let result:string = "Resultado: "+ var1 + "*" + var2 +"=" +(var1*var2);
  setResultado( result);
  }else{
    setResultado("ERROR");
  }

}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Operaciones de dos numeros</Text>
      <TextInput style={styles.textInput} placeholder='Valor 1' keyboardType='numeric' onChangeText={(text1)=>setText1(text1)}></TextInput>
      <TextInput style={styles.textInput} placeholder='Valor 2' keyboardType='numeric' onChangeText={(text2)=>setText2(text2)}></TextInput>
   <TouchableOpacity  style={styles.touchableOpacity} onPress={()=>{sumar(text1,text2)}}>
    <Text style={styles.submmit} >Sumar</Text>
   </TouchableOpacity>
   <TouchableOpacity  style={styles.touchableOpacity} onPress={()=>{restar(text1,text2)}}>
    <Text style={styles.submmit} >Restar</Text>
   </TouchableOpacity>
   <TouchableOpacity  style={styles.touchableOpacity} onPress={()=>{dividir(text1,text2)}}>
    <Text style={styles.submmit} >Dividir</Text>
   </TouchableOpacity>
   <TouchableOpacity  style={styles.touchableOpacity} onPress={()=>{multiplicar(text1,text2)}}>
    <Text style={styles.submmit} >Multiplicar</Text>
   </TouchableOpacity>
   <Text style={{padding: 10, fontSize: 32}}>
      {resultado}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text:{
    width:'90%',
    padding:15,
    fontSize:24,
    backgroundColor:'orange',
    textAlign:'center',
    color:'white'
  },

  textInput:{
    height:60,
    padding:5,
    borderColor:'blue',
    borderWidth:2,
    marginTop:10,
    justifyContent:'center',
    width:'90%',

  },
  touchableOpacity:{
    width:'90%',
  },
  submmit:{
    marginTop:5,
    padding:5,
    fontSize:20,
    backgroundColor:'green',
    textAlign:'center',
    color:'white',
  },
});
