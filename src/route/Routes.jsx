import HomePage from '../pages/Homepage'
import ProfilePage from '../pages/ProfilePage'
import BoardPage from '../pages/BoardPage'
import HelloPage from '../pages/HelloPage'

// React Routes, Route 사용 시 배열로 관리하기
const routes = [
  {
    path: '/',
    element: <HomePage />,
    title: 'home',
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    title: 'profile',
  },
  {
    path: '/board',
    element: <BoardPage />,
    title: 'board',
  },
  {
    path: '/hello',
    element: <HelloPage />,
    title: 'hello',
  },
]

export default routes
