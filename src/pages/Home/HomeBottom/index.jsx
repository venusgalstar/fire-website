import React, {useCallback} from "react";
import metaMask from '../../../assets/images/mm.png';

import './styles.scss';
import {Button} from "../../../components/Button";

export const HomeBottom = () => {
    const addTokenCallback = useCallback(async () => {
        const tokenAddress = '0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5';
        const tokenSymbol = 'FIRE';
        const tokenDecimals = 18;
        const tokenImage = 'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5/logo.png';

        try {
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            });

            if (wasAdded) {
                console.log('Thanks for your interest!');
            } else {
                console.log('FIRE token has been added to you wallet!');
            }
        } catch (error) {
            console.log(error);
        }
    }, [])
    return <section id="section-about" className={"section"}>
        <div className="section__inner" style={{ height: '200px', padding: '40px 100px' }}>
            <div className="section__token">
                <div className="contract">
                    <div className="contract__label">Contract:</div>
                    <a className="contract__address"
                       href={"https://snowtrace.io/address/0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5"}
                       target="_blank"
                       rel="noreferrer noopener"
                    >0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5</a>
                </div>
                <div className="token" style={{ marginTop: '20px', position: 'relative' }}>
                    <Button
                        type="primary"
                        style={{ padding: '15px 20px', marginRight: '70px' }}
                        onClick={addTokenCallback}
                    >ADD TOKEN TO METAMASK</Button>
                    <img src={metaMask} style={{ position: "absolute", right: 0, top: "-25px", width: '96px'  }}/>
                </div>
            </div>
            <div className="section__links">
                <ul className="links">
                    <li className="links__item">
                        <a href="/">HOME</a>
                    </li>
                    <li className="links__item">
                        <a href="mailto:help@thephoenix.finance">CONTACT</a>
                    </li>
                    <li className="links__item">
                        <a href="/#section-faq">FAQ</a>
                    </li>
                    <li className="links__item">
                        <a href="/#section-team">TEAM</a>
                    </li>
                    <li className="links__item">
                        <a href="/disclaimer">DISCLAIMER</a>
                    </li>
                    <li className="links__item">
                        <a href="/app">APP</a>
                    </li>
                    <li className="links__item">
                        <a href="/docs/Phoenix Community Capital White Paper.pdf" target="_blank">WHITEPAPER</a>
                    </li>
                </ul>
            </div>
            <div className="section__right bottomCopy">
               ©️2022 Phoenix Community Capital, Inc.
            </div>
        </div>
    </section>
}

export default HomeBottom;