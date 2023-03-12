// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, Grid, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../../store/auth/auth.thunk'

const SignIn = () => {
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = ({ email, password }) => {
        const data = {
            email,
            password,
        }

        dispatch(signIn(data))
            .unwrap()
            .then(() => {
                navigate('/admin/meals')
            })
            .catch((e) => setError(e.response.data.message))
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: submitHandler,
    })
    const { values, handleChange, handleSubmit } = formik

    const isEmailValid = () => {
        return (
            values.email.length === 0 ||
            (values.email.length > 0 && values.email.includes('@'))
        )
    }

    const isPasswordValid = () => {
        return (
            values.password.length === 0 ||
            (values.password >= 0 && values.length >= 6)
        )
    }
    return (
        <MainGrid>
            <GridContainer>
                <form onSubmit={handleSubmit}>
                    <FormGrid>
                        <Input
                            error={!isEmailValid()}
                            value={values.email}
                            onChange={handleChange}
                            label="Email"
                            name="email"
                        />
                        <Input
                            error={!isPasswordValid()}
                            value={values.password}
                            onChange={handleChange}
                            label="Password"
                            name="password"
                        />
                        <Typography
                            textAlign="center"
                            sx={{ color: (theme) => theme.palette.error.main }}
                            variant="danger"
                        >
                            {error}
                        </Typography>

                        <Button type="submit">Sign In</Button>
                        <Link to="/signup">{`Don't have account`}</Link>
                    </FormGrid>
                </form>
            </GridContainer>
        </MainGrid>
    )
}

export default SignIn

const MainGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '200px',
}))

const GridContainer = styled(Grid)(() => ({
    background: '#fff',
    width: '500px',
    padding: '20px',
}))

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}))

const Input = styled(TextField)`
    margin-top: 20px;
`
