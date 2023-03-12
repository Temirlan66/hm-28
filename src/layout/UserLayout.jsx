// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom'

import React, { useState } from 'react'
import styled from 'styled-components'
import Basket from '../components/basket/Basket'
import { Header } from '../components/header/Header'

const UserLayout = () => {
    const [isBasketVisible, setBasketVisible] = useState(false)
    const showBasketHandler = () => {
        setBasketVisible((prevState) => !prevState)
    }
    return (
        <>
            <Header onShowBasket={showBasketHandler} />
            {isBasketVisible && (
                <Basket open={isBasketVisible} onClose={showBasketHandler} />
            )}
            <Content>
                <Outlet />
            </Content>
        </>
    )
}

export default UserLayout

const Content = styled.div`
    margin-top: 101px;
`
