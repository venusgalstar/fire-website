import React, { useContext } from 'react'
import Cards from "../../../components/Cards";
import {Card} from "../../../components/Card";
import { ContractNumbers } from '../../../context/ContractContext';

import './styles.scss';

const HomeStartEarning = () => {
    const contractValues = useContext(ContractNumbers)
    return <section
        id="section-cards"
        className="section section_wide"
        style={{ marginTop: '-100px' }}
    >
        <div className="section__cards">
            <Cards>
                <Card
                    title={<span>EARN<br/>REWARDS<br/>IN 3 STEPS</span>}
                    backgroundUrl={'/v2/assets/0.png'}/>
                <Card
                    title="Buy $FIRE"
                    content={
                        <span>
                            $FIRE is available on<br/>
                            the Avalanche Network.<br/>
                            You can swap AVAX<br/>
                            for $FIRE on
                            {/* Pangolin<br/>
                            and  */}
                            Trader Joe.
                        </span>
                    }
                    backgroundUrl={'/v2/assets/1.png'}
                />
                <Card
                    title="Build NEST"
                    content={
                        <span>
                            A Phoenix Nest<br/>
                            costs only 10 $FIRE<br/>
                            plus {contractValues.nestMaintenance} AVAX, <br/>
                            then a {contractValues.nestMaintenance} AVAX <br/>
                            maintenence fee every {contractValues.nestMaintInt} days.<br/>
                        </span>
                    }
                    backgroundUrl={'/v2/assets/2.png'}
                />
                <Card
                    title="Enjoy REWARDS"
                    content={
                        <span>
                            You can create up to<br/>
                            100 Phoenix Nests<br/>
                            per wallet. Claim<br/>
                            accrued rewards<br/>
                            at your convenience.<br/>
                        </span>
                    }
                    backgroundUrl={'/v2/assets/3.png'}
                />
            </Cards>
        </div>
    </section>
}

export default HomeStartEarning;