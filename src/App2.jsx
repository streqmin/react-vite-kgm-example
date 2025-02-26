import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/Homepage'
import HelloPage from './pages/HelloPage'
import ProfilePage from './pages/ProfilePage'
import BoardPage from './pages/BoardPage'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// function App2() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route path='/hello' element={<HelloPage />} />
//           <Route path='/profile' element={<ProfilePage />} />
//           <Route path='/board' element={<BoardPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <h2>여기는 About 페이지입니다.</h2>
        <p>대충 쇼핑몰 페이지라는 뜻</p>
      </div>
      <button
        onClick={() => {
          navigate('/profile')
        }}
      >
        프로필 페이지로 이동하기
      </button>
      <Routes>
        <Route path='location' element={<Location />}></Route>
      </Routes>
    </>
  )
}

const Location = () => {
  return (
    <>
      <div>
        <h2>여기는 Location 페이지입니다.</h2>
        <p>대충 쇼핑몰 페이지라는 뜻</p>
      </div>
    </>
  )
}

function App2() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />}>
            <Route path='location' element={<Location />}></Route>
          </Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App2
