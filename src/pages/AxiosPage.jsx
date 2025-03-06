import axios from 'axios'
import { useEffect, useState } from 'react'
import UserService from '../services/UserService'

const AxiosPage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    UserService.getUsers().then((data) => {
      setData(data)
    })
  }, [])

  // const getUsers = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       console.log(response)
  //       setData(response.data)
  //     })
  //     .catch(function (error) {
  //       //에러가 났을때
  //       console.log(error)
  //     })
  //     .then(() => {
  //       console.log('에러가 나든 안나든 finally 처럼 부조건 실행')
  //     })
  // }

  const postClick = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: 12345,
        id: 101,
        body: 'lorem ipsum',
        title: 'test title',
      })
      .then((response) => {
        console.log(response)
        setData(response.data)
      })
      .catch(function (error) {
        //에러가 났을때
        console.log(error)
      })
      .then(() => {
        console.log('에러가 나든 안나든 finally 처럼 부조건 실행')
      })
  }

  return (
    <>
      <div className='text-center mt-5'>
        <h2>Axios get 연습</h2>
        <button onClick={postClick}>axios post</button>
        <hr />
        {data &&
          data.map((post, index) => (
            <div key={index}>
              <h3>타이틀: {post.title}</h3>
              <h3>
                유저 아이디: {post.userId}, 아이디: {post.id}
              </h3>
              <h3>바디: {post.body}</h3>
            </div>
          ))}
      </div>
    </>
  )
}

export default AxiosPage
