import { useState } from "react"

export const CounterBotton = () => {
    console.log('render!')
    const [count, setCount] = useState<number>(0)
    
    let myCount = 0;
    let incMyCount = () => myCount++;

    return <>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button
          type="button"
          className="counter"
          onClick={incMyCount}
        >
          (my code) Count is {myCount}
        </button>
    </>
}
