import { styled } from '@mui/material/styles'
import React from 'react'
import styledComponent from 'styled-components'

function SummaryInfoCard() {
    return (
        <Card>
            <StyleTitle>Delicious Food, Delivered To You</StyleTitle>
            <p>
                Choose your favorite meal from our broad selection of available
                meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients,
                just-in-time and of course by experienced chefs!
            </p>
        </Card>
    )
}

export default SummaryInfoCard

const Card = styled('div')(({ theme }) => ({
    maxWidth: '53.375rem',
    background: theme.palette.primary.main,
    padding: '36px 54px',
    boxShadow: '0px 6px 16px rgb(0, 0, 0, 0.3)',
    borderRadius: '16px',
    position: 'relative',
    margin: '-12rem auto',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '1rem:-khtml-any-link',
    lineHeight: '24px',
}))

const StyleTitle = styledComponent.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`
