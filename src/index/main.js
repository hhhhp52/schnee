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
                                <div className="skill-info">Programming Language</div>
                                <div className="skill-content">
                                    <ul>
                                        <li>
                                            <span className="content">Python</span>
                                        </li>
                                        <li>
                                            <span className="content">Golang</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skill-object">
                                <div className="skill-info">
                                    <span>Database</span>
                                </div>
                                <div className="skill-content">
                                    <ul>
                                        <li>
                                            <span className="content">PostgreSQL</span>
                                        </li>
                                        <li>
                                            <span className="content">Redis</span>
                                        </li>
                                        <li>
                                            <span className="content">MySQL</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skill-object">
                                <div className="skill-info">
                                    <span>Other</span>
                                </div>
                                <div className="skill-content">
                                    <ul>
                                        <li>
                                            <span className="content">Kafka</span>
                                        </li>
                                        <li>
                                            <span className="content">Debezium</span>
                                        </li>
                                        <li>
                                            <span className="content">AWS</span>
                                        </li>
                                        <li>
                                            <span className="content">GRPC</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skill-object">
                                <div className="skill-info">
                                    <span>Personality</span>
                                </div>
                                <div className="skill-content">
                                    <ul>
                                        <li>
                                            <span className="content">Collaboration</span>
                                        </li>
                                        <li>
                                            <span className="content">Mediatory</span>
                                        </li>
                                        <li>
                                            <span className="content">Empathy</span>
                                        </li>
                                        <li>
                                            <span className="content">Flexibility</span>
                                        </li>
                                        <li>
                                            <span className="content">Creativity</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Experience</h2>
                    <div className="section">
                        <div className="work-object">
                            <div className="work-info">
                                <p><strong>Senior Backend Engineer</strong></p>
                                <p>H2 Inc.</p>
                                <p><em>Feb. 2023 – Mar. 2024</em></p>
                            </div>
                            <div className="work-content">
                                <ul>
                                    <li>
                                        <span className="content">Spearheaded the refactoring of long-time APIs, resulting in a 20% reduction in request time.</span>
                                    </li>
                                    <li>
                                        <span className="content">Revamped the data transfer tool to enhance product stability and ensure accurate information.</span>
                                    </li>
                                    <li>
                                        <span className="content">Contributed to early product design, providing feasibility planning and suggestions.</span>
                                    </li>
                                    <li>
                                        <span className="content">Offering ongoing support to team members, optimizing development efficiency.</span>
                                    </li>
                                    <li>
                                        <span className="content">Led product adjustments, development, and demand confirmation for back-end services.</span>
                                    </li>
                                    <li>
                                        <span className="content">Supported the timely market release of Egyptian and Korean products.</span>
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
                                    <li>
                                        <span className="content">Implemented projects such as ClinicPromotion, Telemedicine, and Self-Titration.</span>
                                    </li>
                                    <li>
                                        <span className="content">Designed and maintained the architecture for Health2sync, HealthPass, and SyncPoint.</span>
                                    </li>
                                    <li>
                                        <span className="content">Managed the development of Health2sync, boasting one million users and fifty thousand daily active users.</span>
                                    </li>
                                    <li>
                                        <span className="content">Assisted in structuring projects and provided technical support to new team members.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="work-object">
                            <div className="work-info">
                                <p><strong>Junior Golang Web Engineer</strong></p>
                                <p>AuroraTech
                                    Inc.</p>
                                <p><em>Jul. 2019 – Jan. 2020</em></p>
                            </div>
                            <div className="work-content">
                                <ul>
                                    <li>
                                        <span className="content">Developed the payment module, integrating third-party payment gateways for convenience store codes, bank virtual accounts, and credit cards.</span>
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
                                    <li>
                                        <span className="content">Developed and maintained the financial system for debit and credit.</span>
                                    </li>
                                    <li>
                                        <span className="content">Possessed domain knowledge in credit and debit card systems.</span>
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