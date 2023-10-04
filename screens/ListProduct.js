import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function ListProduct(props) {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.Boton} onPress={()=>props.navigation.navigate('Create')}>
        <Text style={styles.TextoBoton}>Agregar Productos</Text>
      </TouchableOpacity>

      <View>
        <Text style = {styles.TextoTitulo}>Lista de los Productos</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    Boton:{
        backgroundColor:'cyan',
         height:35,
         borderColor:'black',
        borderWidth:1     
      },
      TextoBoton:{
        fontSize:18,
        textAlign:'center'
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