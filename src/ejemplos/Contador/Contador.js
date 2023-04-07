import { useState, useEffect } from "react"


const Contador = () => {
 
    const [counter, setCounter] = useState(1)
    const [hola, setHola] = useState(true)

    const handleClick = () => {
        setCounter( counter + 1 )
    }

    const handleHola = () => {
        setHola(!hola)
    }

    useEffect(() => {
        // efecto de montaje
        console.log("Componente montado")

        return () => {
            // efecto de desmontaje
            console.log("Componente desmontado")
        }
    }, [])
    
    useEffect(() => {
        // efecto con dependencias
        if (counter % 10 === 0) {
            console.log("Múltiplo de 10")
        }

        return () => {
            console.log("Counter")
        }
    }, [counter])


    return (
        <div className="container my-5">
            <button onClick={handleClick} className="btn btn-primary">Click me!</button>
            <p>Clicks: {counter} </p>
            <hr />

            <p>FyH: {new Date().toLocaleTimeString()}</p>

            <hr/>
            <button onClick={handleHola} className="btn btn-success">
                { hola ? "Hola mundo!" : "Chau mundo" }
            </button>
        </div>
    )
}

export default Contador