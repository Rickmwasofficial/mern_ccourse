import { Box } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Create from './pages/Create'

const App = () => {
  return (
    <Box w='80%' mx='auto' h='100vh' >
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      <Footer />
    </Box>
  )
}

export default App;