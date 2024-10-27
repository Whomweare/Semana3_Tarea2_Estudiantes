
import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { ContextEstudiantes } from '../Context/ContextApi';

interface ViewReact {
children: ReactNode
};

export default function ProviderEstudiantes(props: ViewReact) {
const [counter, setCounter] = useState(0);

const [estudiantes, setEstudiantes] = useState([
{id: 1, nombre: "Douglas Espinoza"},
{id: 2, nombre: "Ivan Epinoza"}, 
{id: 2, nombre: "Erick Rapalo"},
{id: 4, nombre: "Damaris Ortiz"},
{id: 5, nombre: "Rosalinda Baca"}
]);

const agregarEstudiante = (nuevaCadena: {id: number, nombre: string}) => {
setEstudiantes(estudiantes => [...estudiantes, nuevaCadena])
};

const funcionPorIntervalos = () => {
  const nuevosUsuarios = [
    {id: 6, nombre: "Pedro"},
    {id: 7, nombre: "Rodrigo"},
    {id: 8, nombre: "Any"},
    {id: 9, nombre: "Dara"},
    {id: 10, nombre: "Ana"}]
  ; 
    setEstudiantes(estudiantes => [...estudiantes, nuevosUsuarios[counter]]);
  };

useEffect(() => {
  setTimeout(() => {
   funcionPorIntervalos()
  }, 500);
});

return (
    <View>
      <ContextEstudiantes.Provider value={{counter, estudiantes, agregarEstudiante}}>
       {props.children}
    </ContextEstudiantes.Provider>
    </View>
  )
}

export const useEstudiante = () => {
    return useContext(ContextEstudiantes)
};


