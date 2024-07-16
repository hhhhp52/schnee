import React from 'react'
import './project.css'
import {Header} from "../component/header";
import {Footer} from "../component/footer";
import {Main} from "./main";



class Project extends React.Component {

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

export default function ProjectPage() {
    return(
        <Project/>
    )
}