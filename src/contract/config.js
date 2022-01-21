
var fireAbi = require('./abis/FireToken.json');
var nftAbi = require('./abis/FireNFT.json');
var rewardAbi = require('./abis/RewardManagement.json');
var bondAbi = require('./abis/FireBond.json');


var config = {

    mainNetUrl: "https://api.avax.network/ext/bc/C/rpc",
    FireToken: "0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5",
    FireAbi: fireAbi,
    FireNFT: "0x2DBaF27f72E82558Fc5dF6c1978f6aE9F2dF2B90",
    NFTAbi: nftAbi,
    Reward: "0xbAd32DeaD95Eb55Ae849c6309ecA1b3d1b03bf69",
    RewardAbi: rewardAbi,
    chainId: 0xa86a,

    treasuryAddr: "0x52Fd04AA057ba8Ca4bCc675B55De7366F607A677",

    coins: [
        { id: 0, token_name: "USDT.e", amount: 1, address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118" },
        { id: 1, token_name: "USDC.e", amount: 1, address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664" },
        { id: 2, token_name: "MIM", amount: 1, address: "0x130966628846BFd36ff31a822705796e8cb8C18D" },
        { id: 3, token_name: "USDC", amount: 1, address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E" }
    ],
    bondContract: "0xB5d6740A1349926DE9C84d37885beb4C2Cb50ee7",
    bondAbi: bondAbi,
}


export default config;