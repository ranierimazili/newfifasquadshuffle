import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

import Competitors from '../../components/Competitors'

export default function CompetitorsPage(props) {
    return (
        <>
            <Competitors></Competitors>
            <Link to="/formation">
                <Button>Avançar</Button>
            </Link>
        </>
    )
}