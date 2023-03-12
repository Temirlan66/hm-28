// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, useNavigate } from 'react-router-dom'
import { Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

import { useDispatch } from 'react-redux'
import { signUp } from '../../store/auth/auth.thunk'
import { UserRoles } from '../../lib/constans/common'

const SigUpPage = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const emailChandeHandler = (e) => {
        setEmail(e.target.value)
    }
    const nameChandeHandler = (e) => {
        setName(e.target.value)
    }
    const passwordChandeHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmChandeHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            name,
            email,
            password,
            role: UserRoles.USER,
        }

        dispatch(signUp(data))
            .unwrap()
            .then(() => navigate('/'))
            .catch((err) => setError(err.response.data.message))
    }
    return (
        <Grid display="flex" justifyContent="center" marginTop={20}>
            <Grid sx={{ background: '#fff', width: '500px', padding: '20px' }}>
                <form onSubmit={submitHandler}>
                    <Grid display="flex" flexDirection="column">
                        <StyledIputs
                            value={name}
                            onChange={nameChandeHandler}
                            label="Name"
                        />
                        <StyledIputs
                            value={email}
                            onChange={emailChandeHandler}
                            label="Email"
                        />
                        <StyledIputs
                            value={password}
                            onChange={passwordChandeHandler}
                            label="Password"
                        />
                        <StyledIputs
                            value={confirmPassword}
                            onChange={confirmChandeHandler}
                            label="ConfirmPassword"
                        />
                        <Button type="submit">Sign Up</Button>
                        {error && <h4 style={{ color: 'red' }}>{error}</h4>}
                        <Link to="/signin"> Have an account</Link>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default SigUpPage

const StyledIputs = styled(TextField)`
    margin-top: 20px;
`
