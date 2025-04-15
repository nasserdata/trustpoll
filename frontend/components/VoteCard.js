import { useState } from 'react';

const VoteCard = ({ poll }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleVote = (option) => {
        setSelectedOption(option);
        // Send vote to blockchain here using contract
    };

    return (
        <div>
            <h2>{poll.question}</h2>
            <div>
                {poll.options.map((option, index) => (
                    <div key={index}>
                        <button onClick={() => handleVote(index)}>{option}</button>
                    </div>
                ))}
            </div>
            {selectedOption !== null && <p>You voted for option {selectedOption + 1}</p>}
        </div>
    );
};

export default VoteCard;
