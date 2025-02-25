import { useState } from 'react'

const Counter = () => {
  const [num, setNum] = useState(0)

  const onIncrease = () => {
    setNum(num + 2)
  }

  const onDecrease = () => {
    setNum(num - 2)
  }

  return (
    <>
      <div>
        <h1>숫자2</h1>
        <div>{num}</div>
        <button onClick={onIncrease}>+2</button>
        <button onClick={onDecrease}>-2</button>
      </div>
    </>
  )
}

export default Counter
