import { useState, useEffect } from 'react';
import { getPolls } from '../utils/contract';
import VoteCard from '../components/VoteCard';

const Home = () => {
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        const fetchPolls = async () => {
            const pollsData = await getPolls();
            setPolls(pollsData);
        };

        fetchPolls();
    }, []);

    return (
        <div>
            <h1>Welcome to TrustPoll</h1>
            <div>
                {polls.map((poll, index) => (
                    <VoteCard key={index} poll={poll} />
                ))}
            </div>
        </div>
    );
};

export default Home;
