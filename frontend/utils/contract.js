import { ethers } from 'ethers';
import VotingABI from '../abi/Voting.json';

const contractAddress = "0xYourContractAddress"; // Contract address on Polygon Mumbai

// Setup provider and contract instance
const provider = new ethers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
const contract = new ethers.Contract(contractAddress, VotingABI, provider);

// Fetch all polls
export const getPolls = async () => {
    const pollCount = await contract.pollCount();
    const polls = [];

    for (let i = 0; i < pollCount; i++) {
        const question = await contract.getQuestion(i);
        const options = await contract.getOptions(i);
        polls.push({ question, options });
    }

    return polls;
};

// Vote function (to be used in VoteCard)
export const voteForPoll = async (pollId, option) => {
    const signer = provider.getSigner();
    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.vote(pollId, option);
    await tx.wait();
};
