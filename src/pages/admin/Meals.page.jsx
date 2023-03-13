import { Button, Grid, styled } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import {
    deleteMeal,
    getOneMeal,
    mealsAdmin,
    updateMeal,
} from '../../store/meals-admin/admin-thunk'
import ModalForm from './modal/ModalForm'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '15px',
        color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

const MealsAdmin = () => {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState(0)
    const [searchParams, setSearchparams] = useSearchParams()
    const [change, setChange] = useState(false)
    const [backdrop, setBackdrop] = useState(false)
    const { meals, newMeal, error, isLoading } = useSelector(
        (state) => state.mealsAdmin
    )

    const onBackdrop = (state) => {
        setBackdrop(state)
        setSearchparams(searchParams)
    }
    const openModalHandler = () => {
        searchParams.set('modal', 'addNewMeal')
        setSearchparams(searchParams)
        onBackdrop(true)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(mealsAdmin())
    }, [dispatch])

    const closeModalHAndler = () => {
        searchParams.delete('modal')
        setSearchparams(searchParams)
        setChange(false)
        onBackdrop(false)
    }
    const deleteMealHandler = (id) => {
        dispatch(deleteMeal(id))
    }

    const editMealHandler = (id) => {
        dispatch(getOneMeal(id))
        setChange(true)
        settitle(newMeal.title)
        setdescription(newMeal.description)
        setprice(newMeal.price)
        openModalHandler()
    }
    const saveUpdateMealHandler = () => {
        const data = {
            title,
            description,
            price: +price,
            // eslint-disable-next-line no-underscore-dangle
            id: newMeal._id,
        }
        dispatch(updateMeal(data))
        setChange(false)
        closeModalHAndler()
    }
    return (
        <div>
            <MealList
                style={
                    backdrop
                        ? { filter: 'blur(10px) grayscale(50)' }
                        : { filter: 'blur(0px)grayscale(0)' }
                }
            >
                <Container>
                    <Title>Meals:</Title>
                    <StyledButton onClick={openModalHandler}>
                        Add Meals
                    </StyledButton>
                </Container>
                <TableContainer
                    sx={{ boxShadow: '10px 19px 10px gray;' }}
                    component={Paper}
                >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>FOODS</StyledTableCell>
                                <StyledTableCell align="right">
                                    PRICE
                                </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {isLoading && (
                                <Grid>
                                    <h4>Loading ...</h4>
                                    <RotatingLines
                                        strokeColor="grey"
                                        strokeWidth="4"
                                        animationDuration="0.75"
                                        width="75"
                                    />
                                </Grid>
                            )}
                            {error && (
                                <h4 style={{ color: 'red' }}>
                                    Something went wrong
                                </h4>
                            )}
                            {meals.map((item) => {
                                return (
                                    <StyledTableRow
                                        // eslint-disable-next-line no-underscore-dangle
                                        key={item._id}
                                    >
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            $ {item.price}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <MealButtons
                                                onClick={() =>
                                                    editMealHandler(
                                                        // eslint-disable-next-line no-underscore-dangle
                                                        item._id
                                                    )
                                                }
                                            >
                                                Update
                                            </MealButtons>

                                            <MealButtons
                                                onClick={() =>
                                                    deleteMealHandler(
                                                        // eslint-disable-next-line no-underscore-dangle
                                                        item._id
                                                    )
                                                }
                                            >
                                                Delete
                                            </MealButtons>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </MealList>

            <ModalForm
                closeModalHAndler={closeModalHAndler}
                searchParams={searchParams}
                title={title}
                description={description}
                price={price}
                settitle={settitle}
                setdescription={setdescription}
                setprice={setprice}
                change={change}
                saveUpdateMealHandler={saveUpdateMealHandler}
            />
        </div>
    )
}

export default MealsAdmin

const Container = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
`

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: '10px 20px',
    color: 'white',
    fontSize: '15px',
    marginRight: '20px',
}))

const Title = styled('h1')`
    color: #e8e1e1;
`
const MealList = styled('ul')`
    margin-top: 100px;
    background-color: white;
    color: #ae7e24;
    padding: 40px;
    border-radius: 20px;
    list-style: none;
`

const MealButtons = styled(Button)(({ theme }) => ({
    width: '100px',
    height: '50px',
    backgroundColor: theme.palette.primary.main,
    color: ' white',
    marginLeft: '10px',
}))
