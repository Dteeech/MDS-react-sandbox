import { useState } from "react"

export default function Button() {

    let [count, setCount] = useState(0)

   
    const handleCount = () => {
        setCount(count +1)
    }

   

    return (
        <>
        <p>{ count }</p>
            <button
                //on peut se contenter de mettre juste le nom de la fonction quand on a pas de paramètres
                onClick={ handleCount }
            >
            Click Me !
            </button>
            <button
                // on met une fonction anonyme si on a un paramètre dans la fonction
                onClick={ () => setCount(0)}
            >
                Reset
            </button>
        </>
    
    )
}
