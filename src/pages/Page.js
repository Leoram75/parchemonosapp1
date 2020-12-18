import React, { Fragment } from 'react'
import { Navigation } from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'
import { Topbar } from '../components/Topbar'

export const Page = (props) => (
    <Fragment>
        <NavigationWeb />
        <section className="mainpage">
            <Topbar />
         <Navigation />
            <div className="page">
            { props.children}
             </div>
        </section>
    </Fragment>
)