import React from "react";
import { Link } from 'react-router-dom';
import './styles.scss';
import {Button} from "../../../components/Button";

const HomeTeam = () => {
    return <section id="section-team" className="section-team section">
        <div className="section-team__inner">
            <h2 className="section-team__title">
                Our Team
            </h2>
            <div className="section-team__content">
                <div className="members">
                    <div className="member">
                        <div className="member__photo">
                            <img src="/img/eric-marshall.png" alt="Eric Marshall"/>
                            <a
                                href="https://www.linkedin.com/in/ericcmarshall/"
                                className="member__link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-linkedin"/>
                            </a>
                        </div>
                        <p>Co-Founder</p>
                        <div className="member_name">
                        <a href="https://www.linkedin.com/in/ericcmarshall/" target="_blank" type="primary" rel="noreferrer" isStatic>Eric Marshall</a>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member__photo">
                            <img src="/img/luke-sullivan.png" alt="Luke Sullivan"/>
                            <a
                                href="https://www.linkedin.com/in/luke-sullivan-0750b7aa/"
                                className="member__link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-linkedin"/>
                            </a>
                        </div>
                        <p>Co-Founder</p>
                        <div className="member_name">
                            <a href="https://www.linkedin.com/in/luke-sullivan-0750b7aa/" rel="noreferrer" target="_blank" type="primary" isStatic>Luke Sullivan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default HomeTeam;