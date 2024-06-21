import React from 'react'
import './index.css'
import './main.css'
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Introduction/>
                <Skills/>
                <Experience/>
                <Project/>
            </div>
        )
    }
}

class Introduction extends React.Component {
    render() {
        return (
            <div>
                <h1>Introduction</h1>
                <div className="section"></div>
            </div>
        )
    }
}

class Skills extends React.Component {
    render() {
        return (
            <div>
                <h1>Skills</h1>
                <div className="section">
                    <div className="skill-panel">
                        <div className="skill-object">
                            <div className="skill-info"><strong>Programming</strong></div>
                            <div className="skill-content">
                                <ul>
                                    <li>Python</li>
                                    <li>Golang</li>
                                </ul>
                            </div>
                        </div>
                        <div className="skill-object">
                            <div className="skill-info"><strong>Database</strong></div>
                            <div className="skill-content">
                                <ul>
                                    <li>PostgreSQL</li>
                                    <li>Redis</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="skill-object">
                            <div className="skill-info"><strong>Other</strong></div>
                            <div className="skill-content">
                                <ul>
                                    <li>Kafka</li>
                                    <li>Debezium</li>
                                    <li>AWS</li>
                                    <li>GRPC</li>
                                </ul>
                            </div>
                        </div>
                        <div className="skill-object">
                            <div className="skill-info"><strong>Personality</strong></div>
                            <div className="skill-content">
                                <ul>
                                    <li>Collaboration</li>
                                    <li>Mediatory</li>
                                    <li>Empathy</li>
                                    <li>Flexibility</li>
                                    <li>Creativity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Experience extends React.Component {
    render() {
        return (
            <div>
                <h1>Experience</h1>
                <div className="section">
                    <div className="work-panel">
                        <div className="work-object">
                            <div className="work-info">
                                <p><strong>Senior Backend Engineer</strong></p>
                                <p>H2 Inc.</p>
                                <p><em>Feb. 2023 – Mar. 2024</em></p>
                            </div>
                            <div className="work-content">
                                <ul>
                                    <li>Spearheaded the refactoring of long-time APIs, resulting in a 20% reduction
                                        in
                                        request time.
                                    </li>
                                    <li>Revamped the data transfer tool to enhance product stability and ensure
                                        accurate
                                        information.
                                    </li>
                                    <li>Contributed to early product design, providing feasibility planning and
                                        suggestions.
                                    </li>
                                    <li>Offering ongoing support to team members, optimizing development efficiency.
                                    </li>
                                    <li>Led product adjustments, development, and demand confirmation for back-end
                                        services.
                                    </li>
                                    <li>Supported the timely market release of Egyptian and Korean products.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="work-object">
                            <div className="work-info">
                                <p><strong>Backend Engineer</strong></p>
                                <p>H2 Inc.</p>
                                <p><em>Jan. 2020 – Feb. 2023</em></p>
                            </div>
                            <div className="work-content">
                                <ul>
                                    <li>Implemented projects such as ClinicPromotion, Telemedicine, and
                                        Self-Titration.
                                    </li>
                                    <li>Designed and maintained the architecture for Health2sync, HealthPass, and
                                        SyncPoint.
                                    </li>
                                    <li>Managed the development of Health2sync, boasting one million users and fifty
                                        thousand daily active users.
                                    </li>
                                    <li>Assisted in structuring projects and provided technical support to new team
                                        members.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="work-object">
                            <div className="work-info">
                                <p><strong>Junior Golang Web Engineer</strong></p>
                                <p>AuroraTech Inc.</p>
                                <p><em>Jul. 2019 – Jan. 2020</em></p>
                            </div>
                            <div className="work-content">
                                <ul>
                                    <li>Developed the payment module, integrating third-party payment gateways for
                                        convenience store codes, bank virtual accounts, and credit cards.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="work-object">
                            <div className="work-info">
                                <p><strong>IT Specialist</strong></p>
                                <p>Cathay United Bank 國泰世華商業銀行</p>
                                <p><em>Aug. 2017 – Mar. 2019</em></p>
                            </div>
                            <div className="work-content">
                                <ul>
                                    <li>Developed and maintained the financial system for debit and credit.</li>
                                    <li>Possessed domain knowledge in credit and debit card systems.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            left: 6,
            current: 0,
            right: 1,
        };
    }

    handleClick(i) {
        const current = this.state.current;
        const left = this.state.left;
        const right = this.state.right;
        if (i == left) {
            this.setState({
                left: left - 1 >= 0 ? left - 1 : 6,
                current: i,
                right: right - 1 >= 0 ? right - 1 : 6,
            });
        } else if (i == right) {
            this.setState({
                left: left + 1 <= 6 ? left + 1 : 0,
                current: i,
                right: right + 1 <= 6 ? right + 1 : 0,
            });
        }
    }

    render() {
        const left = this.state.left;
        const right = this.state.right;
        return (
            <div>
                <h1>Project</h1>
                <div className="section">
                    <div className="project-panel">
                        <div className="project-way">
                            <div>
                                <IconButton
                                    href={"#project-" + left}
                                    onClick={() => this.handleClick(left)}>
                                    <ChevronLeftIcon/>
                                </IconButton>
                            </div>
                            <div>{left}</div>
                        </div>
                        <div className="project-screen">
                            <div className="project-shower">
                                <div className="project-card" id="project-0">
                                    <Card variant="outlined">Card1</Card>
                                </div>
                                <div className="project-card" id="project-1">
                                    <Card variant="outlined">Card2</Card>
                                </div>
                                <div className="project-card" id="project-2">
                                    <Card variant="outlined">Card3</Card>
                                </div>
                                <div className="project-card" id="project-3">
                                    <Card variant="outlined">Card4</Card>
                                </div>
                                <div className="project-card" id="project-4">
                                    <Card variant="outlined">Card5</Card>
                                </div>
                                <div className="project-card" id="project-5">
                                    <Card variant="outlined">Card6</Card>
                                </div>
                                <div className="project-card" id="project-6">
                                    <Card variant="outlined">Card7</Card>
                                </div>
                            </div>
                        </div>
                        <div className="project-way">
                            <div>
                                <IconButton
                                    href={"#project-" + right}
                                    onClick={() => this.handleClick(right)}>
                                    <ChevronRightIcon/>
                                </IconButton>
                            </div>
                            <div>{right}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}