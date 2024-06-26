import React from 'react'
import {Main} from './main'
import {Header} from '../component/header'
import {Footer} from '../component/footer'


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