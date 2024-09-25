
import { Link } from '@chakra-ui/react'
import { routes } from '../routes'


export function Nav() {


  return (

    <ul>
      <li>
        <Link href={routes.home}>Home</Link>
      </li>
      <li>
        <Link href={routes.regular}>Regular</Link>
      </li>
      <li>
        <Link href={routes.verb2}>Verb2</Link>
      </li>
    </ul>



  )
}

