import React from "react";
import { connect } from "react-redux";
import { Counter } from "../../../components/Counter";
import Counters from "../../../components/Counters";

import './styles.scss';

export const HomeCounters = (props) => {
    return <section id="section-counters" className="section section_narrow section_centered">
        <div className="section__content">
            <Counters>
                <Counter
                    title="Treasury Balance"
                    count={`$${props.treasury_balance ? String(props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 0}`}
                />
                <Counter title="Current Total investment" count="$84,556"/>
                <Counter title="Number of nests" count={String(props.all_nodes).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}/>
            </Counters>
        </div>
    </section>
}

const mapStateToProps = state => {
    return {
        all_nodes: state.all_nodes,
        treasury_balance: state.treasury_balance
    };
}

export default connect(mapStateToProps)(HomeCounters);