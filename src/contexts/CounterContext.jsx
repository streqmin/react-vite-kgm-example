import { createContext, useState } from 'react'

const CounterContext = createContext()

const CounterProvider = (props) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return <CounterContext.Provider value={{ count, increment, decrement }}>{props.children}</CounterContext.Provider>
}

export { CounterContext, CounterProvider }
