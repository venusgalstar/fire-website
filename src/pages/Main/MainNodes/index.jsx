import React, {useContext} from 'react'
import {ContractNumbers} from '../../../context/ContractContext'
import Nodes from "../../../components/main/Nodes";

import "./styles.scss";

const MainNodes = () => {
    const contractNumbers = useContext(ContractNumbers)
    return <Nodes contractNumbers={contractNumbers}/>
}

export default MainNodes;