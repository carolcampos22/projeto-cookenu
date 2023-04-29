import {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
    Button

} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const PasswordInput = ({isValid, value, onChange}) => {
    const [showPassword, setShowPassword] = useState(false)

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <FormControl inInvalid={!isValid}>
            <FormLabel>Senha</FormLabel>
            <InputGroup size='md'>
                <Input
                    name="password"
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {!isValid ? (
                <FormErrorMessage as="p">
                    Senha deve conter no mínimo 6 caracteres
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}