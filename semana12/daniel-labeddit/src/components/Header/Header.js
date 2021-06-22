import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import {StyledToolbar} from "./styledHeader"
import Button from '@material-ui/core/Button'
import {useHistory} from "react-router-dom"

const Header = () => {
    const token = localStorage.getItem("token")
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
    }

    // const rightButtonAction = () => {
    //     if (token){
    //         logout()
    //         setRightButtonText("Login")
    //         goToLogin(history)
    //     } else {
    //         goToLogin(history)
    //     }
    // }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={null} color="inherit">LabEddit</Button>
                <Button onClick={null} color="inherit">Login/Logout</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header
