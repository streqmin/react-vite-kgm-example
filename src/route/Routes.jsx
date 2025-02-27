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
import InputPage from '../pages/InputPage'
import GradeInputPage from '../pages/GradeInputPage'
import GradeInputPage2 from '../pages/GradeInputPage2'
import InlineStylePage from '../pages/cssPage/InlineStylePage'
import ClassnameUsePage from '../pages/cssPage/ClassnameUsePage'
import StyledComponentPage from '../pages/cssPage/StyledComponentPage'

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
  {
    path: '/input',
    element: <InputPage />,
    title: 'input ex',
  },
  {
    path: '/grade',
    element: <GradeInputPage />,
    title: '성적표 입력 페이지',
  },
  {
    path: '/grade2',
    element: <GradeInputPage2 />,
    title: '성적표 입력 페이지(다중입력)',
  },
  {
    path: '/styled-css',
    element: <InlineStylePage />,
    title: '인라인 스타일',
  },
  {
    path: '/classname-css',
    element: <ClassnameUsePage />,
    title: 'classname 스타일',
  },
  {
    path: '/styledcomponent-css',
    element: <StyledComponentPage />,
    title: 'styled component',
  },
]

export default routes
