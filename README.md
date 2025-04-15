# TrustPoll - Decentralized, Transparent Voting Platform

TrustPoll is a lightweight, secure, blockchain-based voting platform designed for individuals and communities to conduct transparent, tamper-proof polls and decisions.

##  Features

- Smart contract-based voting logic
- Tamper-proof, transparent vote recording on blockchain
- Modern and intuitive frontend (React + Next.js)
- Hash-based vote validation (on-chain)
- Simplified UX (no wallet required for public users)

## Tech Stack

- **Solidity** – Smart contracts
- **Ethers.js / Web3.js** – Blockchain interaction
- **Next.js** – Frontend
- **Firebase / Supabase (optional)** – For authentication or off-chain data
- **Polygon Mumbai Testnet** – Blockchain network
- ## Roadmap
- [ ] Smart contract prototype
- [ ] Voting frontend
- [ ] Admin dashboard
- [ ] Wallet integration (optional)
- [ ] Launch MVP for public testing

## Getting Started

- 1. Clone the repository
```
git clone https://github.com/nasserdata/trustpoll.git
cd trustpoll
```
- 2. Install frontend dependencies

```
cd frontend
npm install
```

- 3. Run the frontend app

npm run dev

The app will be available at http://localhost:3000

## Smart Contract

The smart contract is located at: contracts/Voting.sol

To compile and deploy using Hardhat, run the following commands:

```
cd contracts
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network mumbai
```

Make sure your hardhat.config.js is properly set up for the Mumbai testnet.

## Environment Variables

Create a .env.local file inside the frontend/ folder and define your environment variables as follows:

```
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddress
NEXT_PUBLIC_ALCHEMY_API_KEY=yourAlchemyKey
NEXT_PUBLIC_FIREBASE_API_KEY=yourFirebaseKey
```

If needed, also create a .env.example to help contributors set up their own environments.

## Contributing

Pull requests are welcome! Feel free to fork the repo, submit issues, or suggest new features.

## License
MIT License. You are free to use, modify, and distribute this software.
