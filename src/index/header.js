import React from 'react'
import './index.css'
import './header.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="profile">
                    <div className="profile-photo-section">
                        <div className="profile-photo"/>
                    </div>
                    <div className="profile-content">
                        <p><strong>Wen-Ching Ruan(Schnee)</strong></p>
                        <p><strong><em>Senior Backend Engineer</em></strong></p>
                        <p>Fu Jen University</p>
                    </div>
                    <div className="link">
                        <a className="link-style" href="https://github.com/hhhhp52">
                            <GitHubIcon/>
                            <span className="link-name">Github</span>
                        </a>
                        <a className="link-style" href="https://www.linkedin.com/in/schneeheart/">
                            <LinkedInIcon/>
                            <span className="link-name">Linkedin</span>
                        </a>
                        <a className="link-style" href="mailto:hhhhp52@gmail.com">
                            <EmailIcon/>
                            <span className="link-name">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
