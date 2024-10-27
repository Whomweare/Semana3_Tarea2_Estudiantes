import { createContext } from "react";

export const ContextEstudiantes = createContext({
counter: 0,
estudiantes: [{id: 0, nombre: ""}],
agregarEstudiante: (nuevaCadena: {id: number, nombre: string}) => {},
});