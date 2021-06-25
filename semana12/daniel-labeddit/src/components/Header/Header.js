import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import {StyledToolbar } from "./styledHeader"
import Button from '@material-ui/core/Button'
import {useHistory} from "react-router-dom"
import { goToFeed, goToLogin } from '../../routes/coordinator'
import { useGlobalStates, useGlobalSetters } from '../../global/GlobalState'

const Header = () => {
    const history = useHistory()
    const {rightButtonText} = useGlobalStates()
    const {setRightButtonText} = useGlobalSetters()
    const logout = () => {
        localStorage.removeItem("token")
    }
    const rightButtonAction = () => {
        if (rightButtonText==="Logout"){
            logout()
            setRightButtonText("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }


    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={()=>goToFeed(history)} color="inherit">LabEddit</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header
