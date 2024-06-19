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
                    <div className="profile-photo"/>
                    <div className="profile-content">
                        <ul>
                            <p><strong>Wen-Ching Ruan(Schnee)</strong></p>
                            <p><strong><em>Senior Backend Engineer</em></strong></p>
                            <p>Fu Jen University</p>
                            {/*<p>Bachelor of Business Administration in Information Management</p>*/}
                        </ul>
                    </div>
                    <div className="link">
                        <div className="link-style">
                            <GitHubIcon/>
                            <a href="https://github.com/hhhhp52">
                                <div>Github</div>
                            </a>
                        </div>
                        <div className="link-style">
                            <LinkedInIcon/>
                            <a href="https://www.linkedin.com/in/schneeheart/">
                                <div>Linkedin</div>
                            </a>
                        </div>
                        <div className="link-style">
                            <EmailIcon/>
                            <a href="mailto:hhhhp52@gmail.com">
                                <div>Email</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
