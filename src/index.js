import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Index extends React.Component {
    render() {
        return (
            <div className="full">
                <div className="main">
                    <div className="profile">
                        <div className="profile-photo"/>
                        <div className="profile-content">
                            <span>Schnee</span>
                            <br/>
                            <span>Backend Engineer</span>
                        </div>
                        <div className="link">
                            <a className="github" href="https://github.com/hhhhp52"/>
                            <a className="linkedin" href="https://www.linkedin.com/in/schneeheart/"/>
                        </div>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>Skills</li>
                            <li>Experience</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="skills">skills</div>
                    </div>
                    <div className="section">
                        <div className="experience">experience</div>
                    </div>
                    <div className="section">
                        <div className="projects">projects</div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)

