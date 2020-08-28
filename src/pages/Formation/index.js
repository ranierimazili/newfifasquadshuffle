import React from 'react'
import { Link, useHistory  } from 'react-router-dom'
import Button from '../../components/Button'

import Formation from '../../components/Formation'

export default function FormationPage(props) {
    const history = useHistory();
    
    return (
        <>
            <Formation></Formation>
                <Button onClick={() => history.goBack()}>Voltar</Button>
            <Link to="/results">
                <Button>Avançar</Button>
            </Link>
        </>
    )
}