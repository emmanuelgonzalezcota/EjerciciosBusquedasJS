// 1 .- Crear una función que encuentre el número más repetido en un array
// 	Ej. Input - [3,6,1,8,2,3,6,3,2,5,6]
// 	Salida -> 6
console.log("Ejercicio 1 numero repetido")
function repeatNumber(array){
    mayor = [0,0]
    for(var i=0;i<array.length;i++){
        var counter =0
        for(var j=0;j<array.length;j++){
            if(array[i] === array[j]){
                counter++
            }
        }
        if(mayor[1]<counter){
            mayor[0]=array[i]
            mayor[1]=counter
        }
    }
    return mayor
}
const arrayRep = [3,6,6,6,1,8,2,3,6,3,2,5,6]
element = repeatNumber(arrayRep)
console.log(`Element ${element[0]} is ${element[1]} times repeated`)

// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
// 	Ej input -> [8,'e',7,2,'a','d','f',2,3,1,4,3]
// 	Salida → ['e','a','d','f']
// 3.- Crear una función que busque el numero más grande en un arreglo
// 	Ej [1,4,7,2,4,1,9,4,0,2,4,5,12]
// 	Salida -> 12
// 4.- Crear una función que busque el numero más pequeño en el arreglo
// 	Ej. [1,4,5,-1,-7,2,3,9]
// 	Salida -->  -7
// 5.- Crear una clase llamada  Contacto con los siguientes datos
// Nombre 
// Apellidos
// Telefono
//     Después crear una clase que sea ListaContactos la cual tendrá dos métodos
// Agregar un contacto
// Buscar un contacto por nombre