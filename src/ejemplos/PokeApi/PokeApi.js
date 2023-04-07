import { useEffect, useState } from "react"



const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)
    console.log(id)

    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json() )
            .then((data) => {
                setPokemon(data)
            })

    }, [id])

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon?offset=1000&limit=50`)
    //         .then((resp) => resp.json() )
    //         .then((data) => {
    //             console.log(data)
    //         })
    // }, [])

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr/>

            {
                pokemon &&
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            }

            <button onClick={handleAnterior} className="btn btn-outline-primary mx-3">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>
        </div>
    )
}

export default PokeApi