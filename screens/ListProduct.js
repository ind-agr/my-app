import React, { useState, useEffect } from 'react'
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'

import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'
const db = getFirestore(appFirebase)

export default function ListProduct(props) {
    const [lista, setLista] = useState([])


    // logica para llamara la lista de documentos de la coleccion 
  useEffect(() => {
    const getLista = async()=>{
        try {
            const querySnapshot = await getDocs(collection(db, 'producto'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                const {nombre, color, stock} = doc.data()
                docs.push({
                    id:doc.id,
                    nombre,
                    color,
                    stock,
                })
            })
            setLista(docs);
        } catch (error) {
            console.log(error);
        }
    }
    getLista()
}, [lista])

  return (
    <ScrollView>
      <TouchableOpacity style={styles.Boton} onPress={()=>props.navigation.navigate('Create')}>
        <Text style={styles.TextoBoton}>Agregar Productos</Text>
      </TouchableOpacity>

      <View>
        <Text style = {styles.TextoTitulo}>Lista de los Productos</Text>
      </View>

      <View>
        {
          lista.map((list)=>(
            <TouchableOpacity key={list.id} style={styles.BotonLista} 
            onPress={()=>props.navigation.navigate('Show',{productoId:list.id})}>
                <Text style={styles.TextoNombre}> - {list.nombre}</Text>
            </TouchableOpacity>
          ))
        }
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
    Boton:{
        backgroundColor:'#ff8400',
        height:35,
        borderColor:'gray',
        borderRadius:8 
      },
      TextoBoton:{
        fontSize:18,
        textAlign:'center',
        color: 'white',
        marginTop: 5
      },
      TextoTitulo:{
        textAlign:'center',
        marginTop:20,
        marginBottom:10
      },  
      TextoNombre:{
        fontSize:16
      },
      BotonLista:{
        backgroundColor:'#DDDDDD',
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        marginBottom:3,
        padding:5
      }
});