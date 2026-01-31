const numbersList = [1,10,14,2,4,5,43,34]
const sortedNuberlis = [...numbersList]
sortedNuberlis.sort((a,b) => a-b)

console.log('Original array:',numbersList, 'Sorted array:', sortedNuberlis)