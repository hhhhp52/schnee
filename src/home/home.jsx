import React, { useEffect, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import HubIcon from '@mui/icons-material/Hub'
import GroupsIcon from '@mui/icons-material/Groups'
import portrait from './images/schnee.jpeg'
import './home.css'

const socialIcons = { github: GitHubIcon, linkedin: LinkedInIcon, email: EmailIcon }
const skillIcons = { code: CodeIcon, storage: StorageIcon, systems: HubIcon, people: GroupsIcon }

function ExternalLink({ href, label, children, className }) {
    if (!href) return <div className={className} aria-label={label}>{children}</div>
    const external = href.startsWith('http')
    return <a className={className} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={label}>{children}</a>
}

function SectionHeading({ label, headline, accent }) {
    return <div className="section-heading"><p>{label}</p><h2>{headline}<br /><em>{accent}</em></h2></div>
}

function Portfolio({ data }) {
    const { profile, navigation, socials, hero, about, skillsSection, skills, experienceSection, experience, projectsSection, projects, contact, footer } = data
    const emailUrl = `mailto:${profile.email}`
    const [activeSection, setActiveSection] = useState(navigation[0].target)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
            if (visible) setActiveSection(visible.target.id)
        }, { rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.5] })
        navigation.forEach(item => {
            const section = document.getElementById(item.target)
            if (section) observer.observe(section)
        })
        return () => observer.disconnect()
    }, [navigation])

    return <div className="site-shell">
        <header className="topbar">
            <a className="wordmark" href="#top" aria-label="Back to top"><span>{profile.initials}</span> {profile.name}</a>
            <nav aria-label="Section index">{navigation.map((item, index) => <a className={activeSection === item.target ? 'active' : ''} href={`#${item.target}`} aria-current={activeSection === item.target ? 'location' : undefined} key={item.target}><span>{String(index + 1).padStart(2, '0')}</span>{item.label}</a>)}</nav>
            <a className="nav-contact" href={emailUrl}>Let's talk</a>
        </header>
        <main id="top">
            <section className="hero" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow"><span /> {profile.role} · {profile.location}</p>
                    <h1 id="hero-title">{hero.headline}<br /><em>{hero.accent}</em></h1>
                    <p className="hero-intro">{hero.summary}</p>
                    <div className="hero-actions">
                        <a className="primary-button" href="#experience">{hero.primaryAction} <KeyboardArrowDownIcon /></a>
                        <div className="socials">{socials.map(item => { const Icon = socialIcons[item.icon]; return <ExternalLink className="social-link" href={item.url} label={item.label} key={item.label}><Icon /><span>{item.label}</span></ExternalLink> })}</div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="portrait-frame"><img src={portrait} alt={profile.portraitAlt} /></div>
                    <div className="status-card"><span className="status-dot" /><div><small>{profile.statusLabel}</small><strong>{profile.statusText}</strong></div></div>
                    <span className="visual-label">{profile.focus}</span>
                </div>
            </section>
            <section className="about section-wrap" id="about">
                <SectionHeading label={about.label} headline={about.headline} accent={about.accent} />
                <div className="about-content">{about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="stats">{about.stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div>
            </section>
            <section className="skills section-wrap" id="skills">
                <SectionHeading {...skillsSection} />
                <div className="skill-grid">{skills.map((skill, index) => { const Icon = skillIcons[skill.icon] || CodeIcon; return <article className="skill-card" key={skill.name}><Icon /><span>{String(index + 1).padStart(2, '0')}</span><h3>{skill.name}</h3><div>{skill.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article> })}</div>
            </section>
            <section className="experience section-wrap" id="experience">
                <SectionHeading {...experienceSection} />
                <div className="timeline">{experience.map((job, index) => <article className="job" key={`${job.company}-${job.period}`}><div className="job-meta"><span>{String(experience.length - index).padStart(2, '0')}</span><time>{job.period}</time></div><div className="job-summary"><h3>{job.title}</h3><p>{job.company}</p></div><ul>{job.highlights.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
            </section>
            <section className="projects section-wrap" id="projects">
                <SectionHeading {...projectsSection} />
                <div className="project-grid">{projects.map((project, index) => <ExternalLink className="project-card" href={project.url} label={project.name} key={project.name}><span className="project-number">{String(index + 1).padStart(2, '0')}</span>{project.url && <ArrowOutwardIcon />}<span className="project-tag">{project.category}</span><div><h3>{project.name}</h3><span>{project.description}</span></div></ExternalLink>)}</div>
            </section>
            <section className="contact section-wrap"><p className="eyebrow"><span /> {contact.eyebrow}</p><h2>{contact.headline}<br /><em>{contact.accent}</em></h2><a href={emailUrl}>{contact.linkLabel} <ArrowOutwardIcon /></a></section>
        </main>
        <footer><span>© {new Date().getFullYear()} {profile.name}</span><span>{footer.note}</span><a href="#top">{footer.backToTop} ↑</a></footer>
    </div>
}

export default function HomePage() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        fetch(`${import.meta.env.BASE_URL}data/resume.json`, {
            signal: controller.signal,
            cache: 'no-store',
        })
            .then(response => {
                if (!response.ok) throw new Error(`Resume data request failed: ${response.status}`)
                return response.json()
            })
            .then(setData)
            .catch(requestError => {
                if (requestError.name !== 'AbortError') setError(true)
            })
        return () => controller.abort()
    }, [])

    if (error) return <main className="load-state"><p>Resume content is temporarily unavailable.</p><button onClick={() => window.location.reload()}>Try again</button></main>
    if (!data) return <main className="load-state" aria-live="polite"><span className="loader" /><p>Loading portfolio…</p></main>
    return <Portfolio data={data} />
}
