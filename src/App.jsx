import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './route/Routes'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route, index) => {
            return <Route key={route.path || index} path={route.path} element={route.element}></Route>
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

// function App() {
//   return (
//     <>
//       <h1>App Header</h1>
//       <Outlet />
//     </>
//   )
// }

export default App
