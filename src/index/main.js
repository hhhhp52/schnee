import React from 'react'
import './index.css'
import './main.css'


export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div>
                    <h2>Skills</h2>
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
                <div>
                    <h2>Experience</h2>
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
            </div>
        )
    }
}