import { useParams } from 'react-router-dom'

const BoardPage = () => {
  const params = useParams()
  console.log(params)

  return (
    <h1 className='text-center mt-5'>
      보드 페이지 입니다.
      {params.id}번 글입니다
    </h1>
  )
}

export default BoardPage
