import { useState } from 'react'
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import AboutPage from './pages/AboutPage'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<HomePage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App
