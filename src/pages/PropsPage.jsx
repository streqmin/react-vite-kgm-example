import Hello from '../components/Hello'

const PropsPage = () => {
  const name = '홍길동'
  const age = 3
  return (
    <>
      <Hello name={name} age={age} color='red' />
      <Hello />
    </>
  )
}

export default PropsPage
