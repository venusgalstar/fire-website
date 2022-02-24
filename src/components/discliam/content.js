import React from "react";

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current_users: 0,
        }
        
        this.getUsersCount = this.getUsersCount.bind(this);
        this.getUsersCount();
    }

    getUsersCount = () => {
        const requestOptions = {
            method: 'POST'
        };
        fetch('https://fetchphoenixdata.herokuapp.com/get_count', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ current_users: data.count }));
    }

    render() {
        return (
            <>
                <section className="c-w flex flex-col align-center pheonixPage">
                    <div className="disclaim-title ">
                    <h1>Disclaimer</h1>
                    </div>
                    <div className="disclaim-content">
                        <p>The information shared on The Phoenix Community Capital social media channels (Facebook, Twitter, and Discord) and thephoenix.finance are not to be considered financial investment advice.</p>
                        <p>Any purchase in crypto currency has inherent risks. The purchase of $FIRE tokens constitutes an investment and provides a level of risk.</p>
                        <p>There is no $FIRE price guarantee, from the Founders or the extended management team. All discussion of price is purely speculatory.</p>
                        <p>There is no guarantee that the Founders or the extended management team will use $FIRE funds to maintain a minimum price of the token.</p>
                        <p>The current token reward system is 0.225 $FIRE per NEST per day. The Founders and extended management reserve the right to amend the rate should the need of the protocol require.</p>
                        <p>Finally, please be aware that the following factors may hinder the development of $FIRE: the evolution of the crypto market and the beginning of a lasting bear market, instability, congestion, any possible bugs on the Avalanche Network, a security breach that allows someone to manipulate (part or all) of the protocol funds despite the protocol’s security efforts, legal obstacles and changing regulations that prevent the Phoenix Community Capital team from completing the project, and finally technical, human, or financial failures of the DeFi yield protocols which Phoenix Community Capital aims to invest. There is no guarantee that these situations cannot happen in the future, as they are beyond the control of the Phoenix Community Capital team. </p>
                    </div>
                </section>
                <section className="c-w flex flex-col align-center" style={{ marginTop: "60px", marginBottom: "60px"}}>
                    
                        <span className="discHolders">Current Nest Holders : {this.state.current_users}</span>
                    
                </section>
            </>
        );
    }
}

export default Content;