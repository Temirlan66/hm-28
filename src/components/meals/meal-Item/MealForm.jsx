import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import { TextField } from '@mui/material'
import { Button } from '../../UI/Button'
import { addtoBasket } from '../../../store/basket/thunk'
import { withAuthModal } from '../../hoc/withAuthModal'

function MealForm({ id, title, price, showAuthModal }) {
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1)

    const amoutChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!isAuthorized) {
            showAuthModal()
        }

        const basketItem = {
            id,
            price,
            title,
            amount: +amount,
        }
        dispatch(addtoBasket(basketItem))
    }

    return (
        <StyledForm>
            <Container>
                <StyledLabel htmlFor={id}>Amount:</StyledLabel>

                <StyledText
                    id={id}
                    type="number"
                    value={+amount}
                    onChange={amoutChangeHandler}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    size="small"
                    inputProps={{ min: 1, max: 5 }}
                />
            </Container>

            <Button onClick={submitHandler} variant="outlined" styles="rounded">
                <AddIcon />
                Add
            </Button>
        </StyledForm>
    )
}

export default withAuthModal(MealForm)

const StyledText = styled(TextField)(() => ({
    marginRight: '10px',
    background: '#fff3f3',
}))

const Container = styled('div')(() => ({
    marginBottom: '12px',
}))
const StyledLabel = styled('label')(() => ({
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '27px',
    color: '#d1d0d0',
    marginRight: '10px',
}))
const StyledForm = styled('form')(() => ({
    display: 'flex',
    alignItems: ' flex-end',
    flexDirection: 'column',
}))
