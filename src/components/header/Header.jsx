import { AppBar, Button, Grid, styled } from '@mui/material'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'
import { signOut } from '../../store/auth/auth.thunk'
import { getBasket } from '../../store/basket/getBasket'
import { uiActions } from '../../store/UI/ui.slice'
// import BasketButton from './BasketButton'
import BasketButton from './BasketButton'
export const Header = ({ onShowBasket }) => {
    const navigate = useNavigate()
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)
    const items = useSelector((state) => state.basket.items)
    const themeMode = useSelector((state) => state.ui.themeMode)
    const [animationClass, setAnimationClass] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBasket())
    }, [dispatch])
    const calculateTotalAmount = () => {
        const sum = items.reduce((s, item) => s + item.amount, 0)
        return sum
    }
    const themeHandler = () => {
        const theme = themeMode === 'light' ? 'dark' : 'light'
        dispatch(uiActions.changeTheme(theme))
    }

    useEffect(() => {
        setAnimationClass('bump')

        const id = setTimeout(() => {
            setAnimationClass('')
        }, 300)

        return () => {
            clearTimeout(id)
        }
    }, [items])
    const signOutHandler = () => {
        dispatch(signOut())
        navigate('/')
    }

    const signinHandler = () => {
        navigate('/signin')
    }
    return (
        <Container>
            <Link to="/">
                <Logo>ReactMeals</Logo>
            </Link>
            <BasketButton
                onClick={onShowBasket}
                className={animationClass}
                count={calculateTotalAmount()}
            />
            {isAuthorized ? (
                <Link to="/userorders">
                    <Order>My orders</Order>
                </Link>
            ) : null}

            <Grid sx={{ width: '350px' }}>
                <Grid style={{ gap: '120px' }}>
                    <MuiButton
                        onClick={themeHandler}
                        className={animationClass}
                        count={calculateTotalAmount()}
                    >
                        {themeMode === 'light'
                            ? 'turn light mode'
                            : 'turn durk mode'}
                    </MuiButton>
                    {isAuthorized ? (
                        <BtnStyle onClick={signOutHandler}>Sign Out</BtnStyle>
                    ) : (
                        <BtnStyle onClick={signinHandler}>Sign In</BtnStyle>
                    )}
                </Grid>
            </Grid>
        </Container>
    )
}
const Container = styled(AppBar)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    height: '101px',
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '120px',
    paddingRight: '120px',
}))

const MuiButton = styled(Button)(() => ({
    background: 'white',
    color: 'black',
    padding: '10px',
    '&:hover': {
        background: 'white',
        color: 'orange',
    },
}))
const Logo = styledComponents.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;

`
const BtnStyle = styled(Button)`
    color: #dc9130;
    padding: 10px 20px;
`
const Order = styled('span')`
    color: white;
    font-size: 25px;
    font-weight: 700;
    padding: 10px;
    border-radius: 5px;
`
