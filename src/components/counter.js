import { useState } from "react"

function Counter() {
    const [state, setState] = useState(1)


    function add() {
        setState(state + 1)
    }
    function remove() {
        setState(state - 1)
    }
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
        </div>
    )
}

export default Counter