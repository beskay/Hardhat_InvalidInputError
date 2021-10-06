## Reproduce error

Start by cloning this repo and running

```
npm install
```

Add a .env file and include your API Key for Ethereum Mainnet (for example from Alchemy)

```
API_MAINNET = "YOUR_MAINNET_API_KEY"
```

Run the sample test with

```
npx hardhat test
```

It should give you the following error:

```
InvalidInputError: sender doesn't have enough funds to send tx. The max upfront cost is: 4139032554423881712 and the sender's account only has: 528163266780984448
```

For some unknown reason, Hardhat thinks the transaction to edit a simple string in the Greeter contract will cost more than 4 ETH.
