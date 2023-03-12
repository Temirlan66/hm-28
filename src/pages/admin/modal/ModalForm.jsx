import { Button, TextField, styled } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import styledComponents from 'styled-components'
import { addMeals } from '../../../store/meals/meals-thunk'

const ModalForm = ({
    searchParams,
    closeModalHAndler,
    title,
    description,
    price,
    settitle,
    setdescription,
    setprice,
    change,
    saveUpdateMealHandler,
}) => {
    const dispatch = useDispatch()
    const titleChangeHandler = (e) => {
        settitle(e.target.value)
    }
    const descriptionChangeHandler = (e) => {
        setdescription(e.target.value)
    }
    const pricenChangeHandler = (e) => {
        setprice(e.target.value)
    }
    const submitHandler = () => {
        const newMeal = {
            title,
            description,
            price: +price,
        }
        dispatch(addMeals(newMeal))
        settitle('')
        setdescription('')
        setprice(0)
        closeModalHAndler()
    }
    return (
        <div style={{ zIndex: '1', color: 'white', fontSize: '2rem' }}>
            {searchParams.has('modal') ? (
                <StyledModal>
                    <Form>
                        <TextStyle
                            value={title}
                            type="text"
                            label="Title:"
                            placeholder="Meal title"
                            onChange={titleChangeHandler}
                        />
                        <TextStyle
                            value={description}
                            type="text"
                            label="Description"
                            placeholder="Meal description"
                            onChange={descriptionChangeHandler}
                        />
                        <TextStyle
                            value={price}
                            type="number"
                            label="Price: $"
                            placeholder="Meal price"
                            onChange={pricenChangeHandler}
                            inputProps={{ min: 0, max: 5000 }}
                            min={0}
                            max={5000}
                        />
                    </Form>
                    <Container>
                        <CancelButon onClick={closeModalHAndler}>
                            Cancel
                        </CancelButon>
                        {change ? (
                            <AddButton onClick={saveUpdateMealHandler}>
                                Save Meal
                            </AddButton>
                        ) : (
                            <AddButton onClick={submitHandler}>
                                ADD Meal
                            </AddButton>
                        )}
                    </Container>
                </StyledModal>
            ) : null}
        </div>
    )
}

export default ModalForm

const Container = styledComponents('div')`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
`
const TextStyle = styled(TextField)(({ theme }) => ({
    color: 'white',
    fontSize: '30px',
    background: theme.palette.primary.contrastText,
}))

const StyledModal = styled('div')(({ theme }) => ({
    position: 'fixed',
    padding: '30px',
    top: '30%',
    left: '33%',
    width: '500px',
    height: 'auto',
    backgroundColor: 'white',
    background: theme.palette.primary,
    borderRadius: '5px',
    color: 'white',
}))

const Form = styledComponents('form')`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`
const CancelButon = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: '15px',
    marginRight: '20px',
    ':hover': {
        backgroundColor: theme.palette.primary.light,
        color: '#000000',
    },
}))

const AddButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: '15px',
    marginRight: '20px',
    ':hover': {
        backgroundColor: theme.palette.primary.light,
        color: '#000000',
    },
}))
