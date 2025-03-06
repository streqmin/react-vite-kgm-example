import { useRef, useState } from 'react'

// 첫 번째 용도
// useRef 변화는 감지해야 하지만, 렌더링은 하고 싶지 않을 때

// 화면 갱신은 해당 컴포넌트를 실행하는 것이다

const UseRef1Page = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  console.log(countRef)
  console.log('호출되고 있음')

  const increaseCountState = () => {
    setCount(count + 1)
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1
  }

  return (
    <div className='text-center mt-5'>
      <p>State :{count}</p>
      <p>Ref :{countRef.current}</p>
      <button onClick={increaseCountState}>State 값 올리라</button>
      <button onClick={increaseCountRef}>Ref 값 올리라</button>
    </div>
  )
}

export default UseRef1Page
