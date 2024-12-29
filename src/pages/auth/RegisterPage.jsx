import { Box } from "@mui/material"
import RegisterAuth from "../../components/auth/RegisterAuth"

const RegisterPage = () => {
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
        <RegisterAuth/>
    </Box>
  )
}

export default RegisterPage