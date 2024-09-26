

import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Regular } from './components/Regular'
import { Verb2 } from './components/Verb2'
import { routes } from './routes'
import { Switch } from '@chakra-ui/react'

function App() {


  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" >
          <Home />
        </Route>
        <Route path={routes.regular}>
          <Regular />
        </Route>
        <Route path={routes.verb2} >
          <Verb2 />
        </Route>

      </Switch>
    </BrowserRouter>

  )
}

export default App