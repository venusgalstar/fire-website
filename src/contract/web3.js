import Web3 from 'web3';
import config from '../contract/config';

const globalWeb3 = new Web3(config.mainNetUrl);
const gNftContract = new globalWeb3.eth.Contract(config.NFTAbi, config.FireNFT);
const gRewardContract = new globalWeb3.eth.Contract(config.RewardAbi, config.Reward);
const gTokenContract = new globalWeb3.eth.Contract(config.FireAbi, config.FireToken);

const provider = Web3.providers.HttpProvider(config.testNetUrl);
const web3 = new Web3(Web3.givenProvider || provider);

const tokenContract = new web3.eth.Contract(config.FireAbi, config.FireToken);
const nftContract = new web3.eth.Contract(config.NFTAbi, config.FireNFT);
const rewardContract = new web3.eth.Contract(config.RewardAbi, config.Reward);

export {globalWeb3, gNftContract, gRewardContract, gTokenContract, provider, web3, tokenContract, nftContract, rewardContract}