

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Regular } from './components/Regular'
import { Verb2 } from './components/Verb2'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regular" element={<Regular />} />
        <Route path="/verbs-2" element={< Verb2 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App