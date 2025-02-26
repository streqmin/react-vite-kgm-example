import HomePage from '../pages/Homepage'
import ProfilePage from '../pages/ProfilePage'
import BoardPage from '../pages/BoardPage'
import HelloPage from '../pages/HelloPage'
import JSXPage from '../pages/JSXPage'
import ConditionalPage from '../pages/ConditionalPage'
import BootstrapPage from '../pages/BootstrapPage'
import PropsPage from '../pages/PropsPage'
import CounterPage from '../pages/CounterPage'
import UseEffectPage from '../pages/UseEffectPage'
import UseRef1Page from '../pages/UseRef1Page'
import UseRef2Page from '../pages/UseRef2Page'
import AxiosPage from '../pages/AxiosPage'
import AxiosClientPage from '../pages/AxiosClientPage'

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
  {
    path: '/jsx',
    element: <JSXPage />,
    title: 'jsx문법',
  },
  {
    path: '/conditional',
    element: <ConditionalPage />,
    title: '조건부렌더링',
  },
  {
    path: '/bootstrap',
    element: <BootstrapPage />,
    title: '부트스트랩 페이지',
  },
  {
    path: '/props',
    element: <PropsPage />,
    title: '프롭스 페이지',
  },
  {
    path: '/usestate',
    element: <CounterPage />,
    title: 'useState 연습 페이지',
  },
  {
    path: '/useffect',
    element: <UseEffectPage />,
    title: 'useEffect 연습 페이지',
  },
  {
    path: '/useref',
    element: <UseRef1Page />,
    title: 'useRef1 연습 페이지',
  },
  {
    path: '/useref2',
    element: <UseRef2Page />,
    title: 'useRef2 연습 페이지',
  },
  {
    path: '/axios',
    element: <AxiosPage />,
    title: 'axios-get',
  },
  {
    path: '/axiosclient',
    element: <AxiosClientPage />,
    title: 'axios-client',
  },
]

export default routes
