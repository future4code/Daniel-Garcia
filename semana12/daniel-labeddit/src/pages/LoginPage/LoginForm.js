import React, {useState} from "react"
import { InputsContainer, LoginFormContainer } from "./styledLoginPage"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { login } from "../../services/userRequests"
import { useGlobalSetters } from "../../global/GlobalState"
const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const { setRightButtonText} = useGlobalSetters()
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, setIsLoading, clear, history, setRightButtonText)
        
    }

    return (
        <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                </InputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}
                </Button>
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm