
var fireAbi = require('./abis/FireToken.json');
var nftAbi = require('./abis/FireNFT.json');
var rewardAbi = require('./abis/RewardManagement.json');


var config = {
    
    mainNetUrl: "https://api.avax.network/ext/bc/C/rpc",
    FireToken : "0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5",
    FireAbi: fireAbi,
    FireNFT : "0x2DBaF27f72E82558Fc5dF6c1978f6aE9F2dF2B90",
    NFTAbi:  nftAbi,
    Reward : "0xbAd32DeaD95Eb55Ae849c6309ecA1b3d1b03bf69",
    RewardAbi: rewardAbi ,
    chainId: 0xa86a,
    
    treasuryAddr: "0x52Fd04AA057ba8Ca4bCc675B55De7366F607A677",
    
    
    // test
    // Reward : "0x66B19Cf20dA6040E39e483fbF104D452f5801B88",
    // FireNFT : "0x1F066543De7E2c2B68be02c490Df600aeD59f986",
    // FireToken : "0x06Ba87cc958475235FC5Ff026f825b22A1FF0A51",
    // FireNFT : "0xE57557f5732FB7cD9ea87A8091E50c18C572B30b",
    
    // chainId: 0x3,




}


export default config;