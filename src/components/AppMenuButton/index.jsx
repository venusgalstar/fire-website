import React from "react";

export const AppMenuButton = () => {
    return <ul className="menu">
        <li className="menu__item certik"><a href="https://www.certik.com/projects/thephoenix" target="_blank"><img src="/img/audit.png" alt="Certik Audit"/></a></li>
        <li className="menu__item menu__item_active"><a href="/app">LAUNCH APP</a></li>
    </ul>
}

export default AppMenuButton;