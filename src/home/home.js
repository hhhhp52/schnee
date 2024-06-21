import React from 'react'
import {Main} from './main'
import {Header} from './header'
import {Footer} from './footer'


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}


export default function HomePage() {
    return(
    <Home/>
)
}