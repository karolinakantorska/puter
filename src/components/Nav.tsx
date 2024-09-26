
import { Button } from '@chakra-ui/react'
import { routes } from '../routes'
import { Link } from 'react-router-dom'


export function Nav() {


  return (

    <ul>
      <li>
        <Link to={routes.home} >
          <Button colorScheme='teal' variant='ghost'>
            Home
          </Button>
        </Link>

      </li>
      <li>
        <Link to={routes.regular} >
          <Button colorScheme='teal' variant='ghost'>
            Regular
          </Button>
        </Link>

      </li>
      <li>
        <Link to={routes.verb2} >
          <Button colorScheme='teal' variant='ghost'>
            Verb2
          </Button>
        </Link>

      </li>
    </ul>



  )
}

