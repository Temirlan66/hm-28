import * as React from 'react'
import { format } from 'date-fns'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RotatingLines } from 'react-loader-spinner'
import { Grid, styled } from '@mui/material'
import styledComponent from 'styled-components'
import { getAllOrders } from '../../store/orders/order.thunk'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    fontWeight: 'bold',
    fontSize: '30px',
}))

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    const { meals, isLoading, error } = useSelector((state) => state.orders)
    console.log(meals)

    const date = (day) => {
        const formatDate = format(new Date(day), 'dd.MMM H:mma')
        return formatDate
    }

    const handleChangePage = (newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper
            sx={{
                marginLeft: '4.5rem',
                marginTop: '9rem',
                width: '90%',
                overflow: 'hidden',
            }}
        >
            <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell paddinLeft="3rem" align="center">
                                Meals
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Total Price
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Date
                            </StyledTableCell>
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
                        {meals
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((meal) => (
                                <TableRow
                                    // eslint-disable-next-line no-underscore-dangle
                                    key={meal._id}
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                >
                                    <TableCell component="th" scope="row">
                                        {meal.user.name}
                                    </TableCell>

                                    <TableCell align="right" scope="row">
                                        <ul>
                                            {meal.items.map((item) => (
                                                <ListStyle
                                                    style={{ display: 'flex' }}
                                                >
                                                    <h4
                                                        style={{
                                                            marginRight: '1rem',
                                                        }}
                                                    >
                                                        {item.title}{' '}
                                                    </h4>
                                                    <h4
                                                        style={{
                                                            marginRight: '1rem',
                                                        }}
                                                    >
                                                        {' '}
                                                        price : {item.price}
                                                    </h4>
                                                    <h4>
                                                        count : {item.amount}
                                                    </h4>
                                                </ListStyle>
                                            ))}
                                        </ul>
                                    </TableCell>

                                    <TableCell> $ {meal.totalPrice} </TableCell>
                                    <TableCell align="right" scope="row">
                                        {date(meal.createdAt)}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={meals.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

const ListStyle = styledComponent.div`
display:flex;
width:90%;
justify-content:space-between
  
`
