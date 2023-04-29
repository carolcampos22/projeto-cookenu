import { extendTheme } from "@chakra-ui/react"
import { color } from "framer-motion"

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                header: {
                    bg: "laranja.500"
                },
                form: {
                    width: "100%",
                    bg: "laranja.500",
                    color: "white",
                    _hover: {
                        bg: "white",
                        color: "laranja.500",
                        border: "3px solid #FE7E02"
                    }
                },
                formSignUp: {
                    width: "100%",
                    bg: "white",
                    color: "laranja.500",
                    _hover: {
                        fontWeight: "normal",
                        color: "black",
                        textDecoration: "underline",
                        border: "1px solid grey" 
                    }
                }
            }
        }
    },
    colors: {
        laranja: {
            500: "#FE7E02"
        }
    }
     
})