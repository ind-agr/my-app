import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';
import appFirebase from '../credenciales';



import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'

const db = getFirestore(appFirebase)

export default function CreateProduct(props) {


    const initialState ={
        nombre:'',
        color:'',
        stock:''
    }

    const [state, setState] = useState(initialState)

    const handleChangeText = (value, name)=> {
        setState({...state, [name]:value})
    }

    const saveProduct = async()=>{
        //console.log(state)
        try {
            await addDoc(collection(db, 'producto'), {
                ...state
            })

            //da mensaje
            Alert.alert('Alerta', 'guardado con éxito')
            props.navigation.navigate('List')
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.titulo}> Create Product</Text>

        <View style={styles.inputgroup}>
            <TextInput placeholder='nombre' onChangeText={(value)=>handleChangeText(value, 'nombre')} 
            value = {state.nombre} />
        </View>

        <View style={styles.inputgroup}>
            <TextInput placeholder='color' onChangeText={(value)=>handleChangeText(value, 'color')} 
            value = {state.color}/>
        </View>

        <View style={styles.inputgroup}>
            <TextInput placeholder='stock' onChangeText={(value)=>handleChangeText(value, 'stock')} 
            value = {state.stock} />
        </View>

        <View>
            <Button title = 'Guardar Producto' onPress={saveProduct}/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    titulo:{
        textAlign:'center',
        fontSize:18,
        marginTop:12,
        marginBottom:20
      },  
      container:{
        flex:1,
        padding:35
      },  
      inputgroup:{
        flex:1,
        padding:0,
        marginBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
      },  
});