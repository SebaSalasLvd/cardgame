import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {MainDisplay} from './components/MainDisplay'
import CardSection from './components/CardSection'
import { CardDetail } from './components/CardDetail'
import { About } from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDisplay />} />
        <Route path="/card-section" element={<CardSection />} />
        <Route path="/card-detail" element={<CardDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
