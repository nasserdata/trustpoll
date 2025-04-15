// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Voting {
    struct Poll {
        string question;
        string[] options;
        mapping(uint => uint) votes; // option index => vote count
        mapping(address => bool) hasVoted;
        bool exists;
    }

    mapping(uint => Poll) public polls;
    uint public pollCount;

    event PollCreated(uint pollId, string question);
    event Voted(uint pollId, address voter, uint option);

    function createPoll(string memory _question, string[] memory _options) public {
        require(_options.length >= 2, "At least 2 options required");
        
        Poll storage p = polls[pollCount];
        p.question = _question;
        p.options = _options;
        p.exists = true;

        emit PollCreated(pollCount, _question);
        pollCount++;
    }

    function vote(uint _pollId, uint _option) public {
        Poll storage p = polls[_pollId];
        require(p.exists, "Poll does not exist");
        require(!p.hasVoted[msg.sender], "You have already voted");
        require(_option < p.options.length, "Invalid option");

        p.votes[_option]++;
        p.hasVoted[msg.sender] = true;

        emit Voted(_pollId, msg.sender, _option);
    }

    function getVotes(uint _pollId, uint _option) public view returns (uint) {
        Poll storage p = polls[_pollId];
        require(p.exists, "Poll does not exist");
        return p.votes[_option];
    }

    function getOptions(uint _pollId) public view returns (string[] memory) {
        return polls[_pollId].options;
    }

    function getQuestion(uint _pollId) public view returns (string memory) {
        return polls[_pollId].question;
    }
}
