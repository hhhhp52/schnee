import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import HubIcon from '@mui/icons-material/Hub'
import GroupsIcon from '@mui/icons-material/Groups'
import homeData from '../file/home.json'
import portrait from './images/schnee.jpeg'
import './home.css'

const skillIcons = [CodeIcon, StorageIcon, HubIcon, GroupsIcon]

function AppLink({ href, label, children }) {
    const external = href.startsWith('http')
    return <a className="social-link" href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={label}>{children}<span>{label}</span></a>
}

export default function HomePage() {
    return <div className="site-shell">
        <header className="topbar">
            <a className="wordmark" href="#top" aria-label="Back to top"><span>SR</span> Schnee Ruan</a>
            <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#projects">Projects</a></nav>
            <a className="nav-contact" href="mailto:hhhhp52@gmail.com">Let's talk</a>
        </header>

        <main id="top">
            <section className="hero" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow"><span /> Senior Backend Engineer · Taiwan</p>
                    <h1 id="hero-title">I build reliable systems<br />that <em>move ideas forward.</em></h1>
                    <p className="hero-intro">Backend engineer experienced in designing scalable services, improving performance, and turning complex product needs into dependable solutions.</p>
                    <div className="hero-actions">
                        <a className="primary-button" href="#experience">Explore my work <KeyboardArrowDownIcon /></a>
                        <div className="socials"><AppLink href="https://github.com/hhhhp52" label="GitHub"><GitHubIcon /></AppLink><AppLink href="https://www.linkedin.com/in/schneeheart/" label="LinkedIn"><LinkedInIcon /></AppLink><AppLink href="mailto:hhhhp52@gmail.com" label="Email"><EmailIcon /></AppLink></div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="portrait-frame"><img src={portrait} alt="Schnee Ruan" /></div>
                    <div className="status-card"><span className="status-dot" /><div><small>Currently</small><strong>Open to meaningful connections</strong></div></div>
                    <span className="visual-label">BACKEND · SYSTEMS · PRODUCT</span>
                </div>
            </section>

            <section className="about section-wrap" id="about">
                <div className="section-heading"><p>01 / About</p><h2>Engineering with<br /><em>clarity and empathy.</em></h2></div>
                <div className="about-content">
                    <p>I have 5+ years of backend engineering experience, specializing in <strong>Python, Golang, and service architecture</strong>. I care equally about resilient systems and the people who build and use them.</p>
                    <p>Having collaborated across Product, Design, App, Web, and Business teams, I often serve as the bridge between technical constraints and product outcomes.</p>
                    <div className="stats"><div><strong>5+</strong><span>Years in backend<br />engineering</span></div><div><strong>1M+</strong><span>Users served by<br />products I built</span></div><div><strong>4+</strong><span>Cross-functional<br />teams partnered</span></div></div>
                </div>
            </section>

            <section className="skills section-wrap" id="skills">
                <div className="section-heading"><p>02 / Capabilities</p><h2>Tools I use to<br /><em>make things work.</em></h2></div>
                <div className="skill-grid">{homeData.skill.map((skill, index) => { const Icon = skillIcons[index]; return <article className="skill-card" key={skill.info}><Icon /><span>0{index + 1}</span><h3>{skill.info}</h3><div>{skill.contents.map(item => <span className="tag" key={item}>{item}</span>)}</div></article> })}</div>
            </section>

            <section className="experience section-wrap" id="experience">
                <div className="section-heading"><p>03 / Experience</p><h2>A track record of<br /><em>building impact.</em></h2></div>
                <div className="timeline">{homeData.experience.map((job, index) => <article className="job" key={`${job.company}-${job.timeline}`}><div className="job-meta"><span>0{homeData.experience.length - index}</span><time>{job.timeline}</time></div><div className="job-summary"><h3>{job.title}</h3><p>{job.company}</p></div><ul>{job.history.map((item, itemIndex) => <li key={itemIndex} dangerouslySetInnerHTML={{__html: item}} />)}</ul></article>)}</div>
            </section>

            <section className="projects section-wrap" id="projects">
                <div className="section-heading"><p>04 / Selected work</p><h2>Projects shaped by<br /><em>curiosity and craft.</em></h2></div>
                <div className="project-grid">{homeData.project.map((project, index) => <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}><span className="project-number">0{index + 1}</span><ArrowOutwardIcon /><div><p>{project.type === 'self' ? 'Personal project' : 'Professional work'}</p><h3>{project.name}</h3><span>{project.description}</span></div></a>)}</div>
            </section>

            <section className="contact section-wrap"><p className="eyebrow"><span /> Have a project or opportunity?</p><h2>Let's build something<br /><em>worth using.</em></h2><a href="mailto:hhhhp52@gmail.com">hhhhp52@gmail.com <ArrowOutwardIcon /></a></section>
        </main>
        <footer><span>© {new Date().getFullYear()} Schnee Ruan</span><span>Designed & built with intention.</span><a href="#top">Back to top ↑</a></footer>
    </div>
}
