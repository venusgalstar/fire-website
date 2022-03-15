import React from "react";

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
                            <img src="/img/eric-marshall.png"/>
                            <a
                                href="https://www.linkedin.com/in/ericcmarshall/"
                                className="member__link"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin"/>
                            </a>
                        </div>
                        <p>Co-Founder</p>
                        <div className="member_name">
                            <Button type="primary" isStatic>Eric Marshall</Button>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member__photo">
                            <img src="/img/luke-sullivan.png"/>
                            <a
                                href="https://www.linkedin.com/in/luke-sullivan-0750b7aa/"
                                className="member__link"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin"/>
                            </a>
                        </div>
                        <p>Co-Founder</p>
                        <div className="member_name">
                            <Button type="primary" isStatic>Luke Sullivan</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default HomeTeam;