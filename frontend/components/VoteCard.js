import React, { useEffect, useState } from "react";
import { getContract } from "../utils/contract";

const VoteCard = ({ pollId }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    loadPoll();
  }, []);

  const loadPoll = async () => {
    const contract = await getContract();
    const q = await contract.getQuestion(pollId);
    const opts = await contract.getOptions(pollId);
    setQuestion(q);
    setOptions(opts);
  };

  const submitVote = async () => {
    const contract = await getContract();
    try {
      const tx = await contract.vote(pollId, selected);
      await tx.wait();
      setVoted(true);
    } catch (err) {
      alert("Error voting or already voted.");
    }
  };

  if (voted) return <p>✅ You have voted successfully!</p>;

  return (
    <div className="border rounded p-4 max-w-md mx-auto mt-10 shadow">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      {options.map((opt, index) => (
        <div key={index} className="mb-2">
          <label>
            <input
              type="radio"
              name="option"
              value={index}
              onChange={() => setSelected(index)}
            />
            <span className="ml-2">{opt}</span>
          </label>
        </div>
      ))}
      <button
        onClick={submitVote}
        disabled={selected === null}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
      >
        Vote
      </button>
    </div>
  );
};

export default VoteCard;
