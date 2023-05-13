import { Input } from '@chakra-ui/react'
import { useState } from 'react'

export const Filter = ({query, setQuery}) => {

    

    const handleQuery = (e) => setQuery(e.target.value)
    console.log(query)

    return (
        <Input
            value={query}
            onChange={handleQuery}
            placeholder='O que você quer cozinhar hoje?' />
    )
}