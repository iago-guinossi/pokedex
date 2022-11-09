async function getPokemon(pokeNumber: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
    const data = await response.json()
    
    return data
}

console.log(await getPokemon(2))
console.log(await getPokemon(3))