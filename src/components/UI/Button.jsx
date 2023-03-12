import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Button = ({
    children,
    variant = 'contained',
    styles = 'rounded',
    ...restProps
}) => {
    return (
        <StyledButton variant={variant} styles={styles} {...restProps}>
            {children}
        </StyledButton>
    )
}

const getBackgroauntColor = (variant) => {
    return variant === 'contained' ? '#8a2b06' : 'white'
}

const getBorder = (variant) => {
    return variant === 'contained' ? 'none' : '1px solid #8a2b06'
}

const getColor = (variant) => {
    return variant === 'contained' ? 'white' : '#8a2b06'
}

const getRadius = (styles) => {
    return styles === 'rounded' ? '20px' : '6px'
}

const StyledButton = styled(MuiButton)(({ variant, styles }) => ({
    backgroundColor: getBackgroauntColor(variant),
    borderRadius: getRadius(styles),
    padding: '10px 32px',
    fontWeight: '600',
    color: getColor(variant),
    lineHeight: '24px',
    fontSize: '16px',
    border: getBorder(variant),
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#8a2b06',
        color: '#ffffff',
    },
    '&:active': {
        backgroundColor: '#993108',
    },
}))
