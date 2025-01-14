import { useState } from 'react'
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DefaultLayout from './layouts/DefaultLayout'
import IndexMoviePage from "./pages/IndexMoviePage"
import DetailMoviePage from './pages/DetailMoviePage'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
     <Route element={<DefaultLayout/>}path='/'> 
     <Route index element={<HomePage/>}></Route>
     <Route path='/about' element={<AboutPage/>}></Route>

     <Route path='Movies'>
      <Route index element={<IndexMoviePage/>}></Route>
      <Route path='/Movies/detail' element={<DetailMoviePage/>}></Route>
     </Route>
     
   </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App
