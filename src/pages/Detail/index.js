import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Page } from '../Page'
import { CardDetail } from './components/CardDetail'
import { useParams } from 'react-router-dom'
import { EXPERIENCES_DATA } from './../../data/ExperiencesData'
import { Button } from '../../components/Button'

export const Detail = () => {

    //constructor / componet did mount
    const { id } = useParams()
    const [adventure, setAdventure] = useState(null)

    useEffect(() => {
        const experience = EXPERIENCES_DATA.find(el => el.id === Number(id))
        if (experience) setAdventure(experience)
        setAdventure(experience)

    },[])

    const clickButton = () => {

        alert('boton fue presionado...')


    }


    //retorna el jsx
    return (
    <Page>
        {
            adventure !== null
            ? <>
            <Header title={adventure.title}/>
            <CardDetail {...adventure} />
            <Button onPress={clickButton} label="¡Reserva tu Parche!" />
            </>
            : <p>Experiencia No Encontrada</p>
            

        }
        

    </Page>
    )
}