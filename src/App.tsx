

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Regular } from './components/Regular'
import { Verb2 } from './components/Verb2'
import { routes } from './routes'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.regular} element={<Regular />} />
        <Route path={routes.verb2} element={< Verb2 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App