import React from 'react'
import './home.css'
import './main.css'
import {Button, IconButton, Card, CardContent, CardHeader, Avatar, CardActions} from '@mui/material';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {red} from "@mui/material/colors";


const home_data = require('../file/home.json')

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
                <h1>{home_data.title.introduction}</h1>
                <div className="section">
                    <div className="introduction-panel">
                        <div className="introduction-object">
                            <strong>5+</strong> years of backend engineer. Proficient in <strong>Python and the Flask framework</strong> to quickly set up servers.
                        </div>
                        <div className="introduction-object">
                            Strong ability to collaborate with multiple teams, at least <strong>four teams</strong>, including Product, Design, App and Business, and often <strong>as the key man</strong> in the project.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function SkillObject(props) {
    const contentList = [];
    for (let i = 0; i < props.contents.length; i++) {
        contentList.push(<li>{props.contents[i]}</li>)
    }
    return (
        <div className="skill-object">
            <div className="skill-info"><strong>{props.info}</strong></div>
            <div className="skill-content">
                <ul>
                    {contentList}
                </ul>
            </div>
        </div>
    );
}

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: home_data.skill,
            max_item: home_data.skill.length - 1,
        };
    }

    renderSkill() {
        const objects = [];
        for (let i = 0; i <= this.state.max_item; i++) {
            objects.push(<SkillObject
                info={this.state.data[i].info}
                contents={this.state.data[i].contents}
            />);
        }
        return <div className="skill-panel">{objects}</div>
    }

    render() {
        return (
            <div>
                <h1>{home_data.title.skill}</h1>
                <div className="section">
                    {this.renderSkill()}
                </div>
            </div>
        )
    }
}


function ExperienceObject(props) {
    const historyList = props.history.map((item, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
    ));
    return (
        <div className="work-object">
            <div className="work-info">
                <p><strong>{props.title}</strong></p>
                <p>{props.company}</p>
                <p><em>{props.timeline}</em></p>
            </div>
            <div className="work-content">
                <ul>
                    {historyList}
                </ul>
            </div>
        </div>
    );
}


class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: home_data.experience,
            max_item: home_data.experience.length - 1,
        };
    }

    renderExperience() {
        const objects = [];
        for (let i = 0; i <= this.state.max_item; i++) {
            objects.push(<ExperienceObject
                company={this.state.data[i].company}
                title={this.state.data[i].title}
                timeline={this.state.data[i].timeline}
                history={this.state.data[i].history}
            />);
        }
        return <div className="work-panel">{objects}</div>
    }

    render() {
        return (
            <div>
                <h1>{home_data.title.experience}</h1>
                <div className="section">
                    {this.renderExperience()}
                </div>
            </div>
        )
    }
}

function ProjectCard(props) {
    return (
        <Card className="project-card">
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="project">
                        {props.name[0]}
                    </Avatar>
                }
                title={props.name}
                subheader={props.type}
                className="project-card-header"
            />
            <CardContent className="project-card-content">
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className="project-card-footer">
                <Button href={props.url}>
                    Link
                </Button>
            </CardActions>
        </Card>
    );
}

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: home_data.project,
            max_item: home_data.project.length - 1,
            left: home_data.project.length >= 1 ? home_data.project.length - 1 : 0,
            current: 0,
            right: home_data.project.length >= 1 ? 1 : 0,
        };
    }

    renderCard(i) {
        return <ProjectCard
            name={this.state.data[i].name}
            url={this.state.data[i].url}
            type={this.state.data[i].type}
            description={this.state.data[i].description}
        />;
    }

    handleClick(i: number) {
        const left: number = this.state.left;
        const right: number = this.state.right;
        const max_item: number = this.state.max_item;
        if (i === left) {
            this.setState({
                left: left - 1 >= 0 ? left - 1 : max_item,
                current: i,
                right: right - 1 >= 0 ? right - 1 : max_item,
            });
        } else if (i === right) {
            this.setState({
                left: left + 1 <= max_item ? left + 1 : 0,
                current: i,
                right: right + 1 <= max_item ? right + 1 : 0,
            });
        } else {
            console.log("Something Wrong")
        }
    }

    render() {
        const left = this.state.left;
        const right = this.state.right;
        const current = this.state.current;
        return (
            <div>
                <h1>{home_data.title.project}</h1>
                <div className="section">
                    <div className="project-panel">
                        <div className="project-way">
                            <IconButton
                                onClick={() => this.handleClick(left)}
                                size="large">
                                <ChevronLeftIcon fontSize="inherit"/>
                            </IconButton>
                        </div>
                        <div className="project-screen">
                            <div className="project-shower">
                                {this.renderCard(left)}
                                {this.renderCard(current)}
                                {this.renderCard(right)}
                            </div>
                        </div>
                        <div className="project-way">
                            <div>
                                <IconButton
                                    onClick={() => this.handleClick(right)}
                                    size="large">
                                    <ChevronRightIcon fontSize="inherit"/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}