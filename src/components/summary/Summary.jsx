import React from 'react'
import styled from 'styled-components'
import BaskeImages from '../../assets/images/1.jpg'
import SummaryInfoCard from './SummaryInfoCard'

export const Summary = () => {
    return (
        <Container>
            <StyledImg src={BaskeImages} />
            <SummaryInfoCard />
        </Container>
    )
}

const Container = styled.div`
    height: 527px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 150px;
`
const StyledImg = styled.img`
    height: 430px;
    width: 100%;
`
