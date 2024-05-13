import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Route , Router, Routes } from 'react-router-dom'
import Update from './Update'
import Read from './Read'
import Create from './Create'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './App/Movies'
import NavigationBar from './App/NavigationBar'
import NotFound from './App/NotFound'
import MovieDetails from './App/MovieDetails'
import WhishList from './App/WishList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<NavigationBar />}></Route>
      <Route path='/moviess' element={<Movies />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>
      <Route path='/wishList' element={<WhishList />}></Route>
      <Route path="/DetailsMovies/:id" element={<MovieDetails />}></Route>
  
      <Route path='*' element={<NotFound  />}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
