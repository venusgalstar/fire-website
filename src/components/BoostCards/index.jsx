import React from "react";
import { Card } from "../Card";
import Cards from "../Cards";
import MasterCard from "./MasterCard";
import GrandMasterCard from "./GrandMasterCard";

const BoostCards = () => {
    return <Cards>
        <MasterCard />
        <GrandMasterCard />
    </Cards>
};

export default BoostCards;