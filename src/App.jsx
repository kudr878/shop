import Navbar from './comp/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './assets/font/font.css'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'
import Item from './pages/Item'
import ItemsCatalog from './pages/ItemsCatalog'
import CostCalculation from './pages/CostCalculation'
import Information from './pages/Information'
import Favorite from './pages/Favorite'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import AppContextProvider from './context/AppContext'

function App() {

  return (
    <AppContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog/:section' element={<ItemsCatalog />} />
          <Route path='/catalog/:section/:link' element={<Item />} />
          <Route path='/cost-calculation' element={<CostCalculation />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/information' element={<Information />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AppContextProvider>
  )
}

export default App
