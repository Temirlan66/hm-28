import React from 'react'
import styledComponents from 'styled-components'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import { useSelector } from 'react-redux'
import { withAuthModal } from '../hoc/withAuthModal'

const BasketButton = ({ count, onClick, showAuthModal, ...restProps }) => {
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)

    const showBasketModal = () => {
        if (!isAuthorized) {
            return showAuthModal()
        }
        return onClick()
    }
    return (
        <StyledButton {...restProps} onClick={showBasketModal}>
            <LocalGroceryStoreIcon />
            <StyledTitle>Your Cart</StyledTitle>
            <StyledCount id="counter">{count || 0}</StyledCount>
        </StyledButton>
    )
}
export default withAuthModal(BasketButton)
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '30px',
    padding: '12px 32px',
    fontWeight: '600',
    color: theme.palette.primary.contrastText,
    lineHeight: '24px',
    fontSize: '16px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },

    '&.bump': {
        animation: 'bump 300ms ease-out',
    },

    ' @keyframes bump': {
        ' 0%': {
            transform: 'scale(1)',
        },
        '10%': {
            transform: 'scale(0.9)',
        },
        '30%': {
            transform: 'scale(1.1)',
        },
        '50%': {
            transform: 'scale(1.15)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    },
}))

const StyledTitle = styledComponents.span`
    margin-left: 12px;
    margin-right: 24px;


`

const StyledCount = styledComponents.span`
  background-color: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  color: white;
  font-size: 20px;
  line-height: 27px;
  padding: 4px 20px;
  
`
