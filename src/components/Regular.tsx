import { useState } from 'react'

//import './App.css'
import { Verb } from '../lib/verbs'
import { Flex, Input, Select, Text } from '@chakra-ui/react'
import { initialValue } from './Home'
import { Nav } from './Nav'
import { verbsRegular } from '../lib/verbsRegular'



export function Regular() {
    const [verb, setVerb] = useState<Verb>(verbsRegular[0])

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
                        setVerb(verbsRegular.find(v => v.id === e.target.value)!)
                        setValue(initialValue)
                    }}
                    bg="DarkSlateBlue"
                    borderColor="DarkSlateBlue"
                    borderRadius={10}
                    size='lg'
                    height={48}
                >
                    {verbsRegular.map(verb => (
                        <option key={verb.id} value={verb.id}>
                            {verb.id}
                        </option>
                    ))}
                </Select>
            </Flex>

            {verb.conjugation.map((c, i) => (
                <Flex
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
                            size='xs'
                            height={48}
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

