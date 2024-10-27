
import { View, Text, Button, ScrollView, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { useEstudiante } from '../Provider/ProviderEstudiantes'

export default function ConsumerEstudiantes() {

  const { estudiantes, agregarEstudiante } = useEstudiante();

  return (
    <View style={styles.principalView}>
       <ScrollView style={styles.scrollView}>
       {estudiantes.map((estudiante) => (
       
        <Text key={estudiante.id}> {estudiante.id + " " + estudiante.nombre}</Text>
        
      ))}
      </ScrollView>
      <View style={styles.secundaryView}>
      <Button title='Agregar nuevo estudiante' onPress={() => agregarEstudiante({ id: 11, nombre: "Juan Jose" }) }/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  principalView: {
  paddingLeft: 0,
  paddingRight: 0,

  width: "100%",
  height: "100%",

  },

  secundaryView: {
    width: "100%",
    height: "12%",
    },

  scrollView: {
   width: "100%",
   height: "100%",

   borderColor: "black",
   borderWidth: 1,
   borderStyle: "dashed",
   marginBottom: "5%"
  }
});