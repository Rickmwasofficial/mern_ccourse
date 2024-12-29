import { Flex } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Create from './pages/Create'

const App = () => {
  return (
    <Flex w='80%' mx='auto' minH='100vh' flexDirection={'column'} >
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      <Footer />
    </Flex>
  )
}

export default App;