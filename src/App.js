import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Drivers from './pages/Drivers/Drivers'
import Error from './pages/Error/Error'
import Favorites from './pages/Favorites/Favorites'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Drivers />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
