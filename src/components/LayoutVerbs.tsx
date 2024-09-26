import { useState } from 'react'

//import './App.css'
import { Verb, verbs } from '../lib/verbs'
import { Flex, Input, Select, Text } from '@chakra-ui/react'

import { Nav } from './Nav'

export const initialValue = [
  {
    id: "eau",
    form: ""
  },
  {
    id: "tü",
    form: ""
  },
  {
    id: "el/alla",
    form: ""
  },
  {
    id: "nus",
    form: ""
  },
  {
    id: "vus",
    form: ""
  },
  {
    id: "els/ellas",
    form: ""
  }
]
type Props = {
  verbs: Verb[]
}

export function LayoutVerbs({ verbs }: Props) {
  const [verb, setVerb] = useState<Verb>(verbs[0])

  const [value, setValue] = useState(initialValue)

  return (

    <Flex
      flexDir="column"
      width="100vw"
      height="100vh"
      alignItems="center"
      paddingTop='20%'
    >
      <Flex>
        <Select
          value={verb.id}
          onChange={e => {
            setVerb(verbs.find(v => v.id === e.target.value)!)
            setValue(initialValue)
          }}
          bg='seagreen'
          borderColor='seagreen'
          borderRadius={10}
          size='lg'
        >
          {verbs.map((verb, i) => (
            <option key={verb.id + i} value={verb.id}>
              {verb.id}
            </option>
          ))}
        </Select>
      </Flex>

      {verb.conjugation.map((c, i) => (
        <Flex
          key={c.id + i}
          flexDir="row"
          //alignItems="center"
          marginTop={8}
        >
          <Flex
            width={100}
          >
            <Text >{c.id}</Text>
          </Flex>
          <Flex

          >
            <Input
              value={value[i].form}
              size='lg'
              borderRadius={10}
              bgColor={value[i].form === verb.conjugation[i].form ? 'lightgreen' : 'pink'}
              color="black"
              onChange={e => setValue(v => v.map((val, index) => index === i ? { ...val, form: e.target.value } : val))}
            />
          </Flex>
        </Flex>
      ))}
      <Nav />
    </Flex>


  )
}

