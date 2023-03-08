import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NavBar from './Component/NavBar'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/cart' element = {<Cart/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App