import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Details from './Pages/Details'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Service from './Pages/Service'
function App() {
  return (
    <>
     <div className=' '>
     
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
             <Route index element={<Home/>} />
             <Route path='/product/:id' element={<Products/>} />
             {/* <Route path="/products/:id" element={<ProductDetails />} /> */}

             <Route path='/details/:id' element={<Details/>} />
             <Route path='/contact' element={<Contact/>} />
             <Route path='/about' element={<About/>} />
             <Route path='/service' element={<Service/>} />
          </Route>
        </Routes>
     </BrowserRouter>
     </div>




     
    </>
  )
}

export default App
