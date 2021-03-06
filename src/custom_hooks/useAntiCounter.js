import { useState } from "react";

export default function useAntiCounter(initValue = 5) {
    const [count, setCount] = useState(initValue)

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return {count, decrement}
}