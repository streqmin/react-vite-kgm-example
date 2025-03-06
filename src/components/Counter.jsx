import { useState } from 'react'

const Counter = () => {
  const [num, setNum] = useState(0)

  const onIncrease = () => {
    setNum(num + 1)
  }

  const onDecrease = () => {
    setNum(num - 1)
  }

  return (
    <>
      <div>
        <h1>숫자</h1>
        <div>{num}</div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  )
}

export default Counter
