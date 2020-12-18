import React from 'react'

import { Navigation } from  './../../components/Navigation'
import { Search } from './components/Search'
import { Experiences } from './components/Experiences'
import { Header } from './../../components/Header'
import { Ranking } from './components/Ranking'
import {Topbar} from './../../components/Topbar'
import { Page } from '../Page'

const headerStyle = {
    fontWeight: '700',
    color: '#484848',
    fontSiz: '1.2em'
}


export const Home = () => (
    <Page>           
        <Search />
        <Header styles={headerStyle}title="Top de Aventuras" />
        <Ranking />
        <Header styles={headerStyle}title="Lista de Aventuras" />
        <Experiences />
    </Page>
           
    
)