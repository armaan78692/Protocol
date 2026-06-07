import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Reviews from './pages/Reviews'
import About from './pages/About'
import Support from './pages/Support'
import ProductDetails from './components/ProductDetails'
import SearchPanel from './components/SearchPanel'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />} />
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path='/searchpanel'  element={<SearchPanel />} />
      </Routes>
  )
}

export default App
