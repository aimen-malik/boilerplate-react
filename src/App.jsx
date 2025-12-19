import MainLayout from './layouts/MainLayout'
import Home from './views/pages/Home'
import { Route, Routes } from 'react-router'

function App() {

  return (
  <Routes>
       <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>About</div>} />
       </Route>
    </Routes>
  )
}

export default App
