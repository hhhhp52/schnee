import React from 'react'
import ReactDOM from 'react-dom'
import {Main} from './index/main'
import {Header} from './index/header'
import {Footer} from './index/footer'


class Index extends React.Component {
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

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)

