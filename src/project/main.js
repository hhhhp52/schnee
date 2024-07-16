import {Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton} from "@mui/material";
import {red} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import './main.css'

const project_data = require('../file/project.json')


function ProjectDetail(props) {
    return (
        <div>
            <div className="info">
                <h2>
                    Category: {props.type}
                </h2>
            </div>
            <div className="description">
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

function ProjectCard(props) {

    return (
        <Card className="card">
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="project">
                        {props.name[0]}
                    </Avatar>
                }
                title={props.name}
                subheader={props.type}
                className="card-header"
            />
            <CardContent className="card-content">
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className="card-footer">
                <Button href={props.url}>
                    Link
                </Button>
                <Button onClick={props.click}>
                    Detail
                </Button>
            </CardActions>
        </Card>
    );
}

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: project_data.project,
            max_item: project_data.project.length - 1,
            left: project_data.project.length >= 1 ? project_data.project.length - 1 : 0,
            current: 0,
            right: project_data.project.length >= 1 ? 1 : 0,
            show_detail: false,
            detail_number: 0,
        };
    }

    handleDetailClick(i) {
        this.setState({
            show_detail: true,
            detail_number: i,
        })
    }

    renderCard(i) {
        return <ProjectCard
            name={this.state.data[i].name}
            url={this.state.data[i].url}
            type={this.state.data[i].type}
            description={this.state.data[i].description}
            click={() => this.handleDetailClick(i)}
        />;
    }

    renderDetail(i) {
        return <ProjectDetail
            name={this.state.data[i].name}
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
        const show_detail = this.state.show_detail;
        const detail_number = this.state.detail_number;
        return (
            <div className="main">
                <h1>{project_data.title.project}</h1>
                <div className="section">
                    <div className="panel">
                        <div className="way">
                            <IconButton
                                onClick={() => this.handleClick(left)}
                                size="large">
                                <ChevronLeftIcon fontSize="inherit"/>
                            </IconButton>
                        </div>
                        <div className="screen">
                            <div className="project-shower">
                                {this.renderCard(left)}
                                {this.renderCard(current)}
                                {this.renderCard(right)}
                            </div>
                        </div>
                        <div className="way">
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
                <div className={show_detail === true ? "detail-visible" : "detail-hidden"}>
                    <h1>{this.state.data[detail_number].name}</h1>
                    <div className="detail">
                        {this.renderDetail(detail_number)}
                    </div>
                </div>
            </div>
        )
    }
}