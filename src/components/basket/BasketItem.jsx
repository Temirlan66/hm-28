import React from 'react'
import styledComponents from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { styled } from '@mui/material/styles'
import { Button } from '../UI/Button'

export const BasketItem = ({
    title,
    price,
    amount,
    decrementAmount,
    incrementAmount,
}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Content>
                <PriceAndAmount>
                    <Price>{price}</Price>
                    <Amout>{amount}</Amout>
                </PriceAndAmount>
                <CounterContainer>
                    <Button
                        styles="squared"
                        variant="outlined"
                        onClick={decrementAmount}
                    >
                        <RemoveIcon />
                    </Button>
                    <Button
                        styles="squared"
                        variant="outlined"
                        onClick={incrementAmount}
                    >
                        <AddIcon />
                    </Button>
                </CounterContainer>
            </Content>
        </Container>
    )
}

const Container = styledComponents.div`
  padding: 24px 0;
  width: 100%;
`

const Title = styled('p')(({ theme }) => ({
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '30px',
    margin: '0 0 12px 0',
    color: theme.palette.primary.contrastText,
}))

const Price = styled('p')(({ theme }) => ({
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '27px',
    color: theme.palette.primary.contrastText,
    margin: '0',
}))
const Amout = styled('span')(({ theme }) => ({
    border: '1px solid #d6d6d6',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
    padding: '6px 14px',
    color: theme.palette.primary.contrastText,
    display: 'block',
}))
const PriceAndAmount = styledComponents.div`
  display: flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
`

const CounterContainer = styledComponents.div`
  /* &:first-child {
    margin-right: 14px;
  } */
  display: flex;
  gap: 14px;
`

const Content = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
