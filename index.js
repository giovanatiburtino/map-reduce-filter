const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 5
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 5
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 1
    },
    {
        name: "pé de pano",
        type: "horse",
        age: 6,
        weight: 1
    }
]

console.log(pets)

// O filter cria um novo array com todos os elementos que passaram no teste ad função fornecida

const newPets = pets.filter((pet) => {
    return pet.age < 5 // Filtrar pets com menos de 5 anos
})

console.log(newPets)

// Map retorna um novo array com a mesma quantidade do array inicial

const petsName = pets.map((pet) => {
    return pet.name
})

console.log(petsName)

// Reduce retorna um novo array com menos elementos
// O reduce recebe no callback dois valores: acc e cur

const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0) // 0 = valor inicial do total

console.log(totalWeight)


const totalWeightDogs = pets.filter((pet) => {
    return pet.type === "dog"
}). reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeightDogs)