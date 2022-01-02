# Amber Road
**Amber Road** is a proof-of-concept fully decentralized marketplace. It supports electronic commerce without needing to trust any centralized entity, as is the case with e.g. Amazon/Alibaba/eBay. At its core, Amber Road is a smart contract for decentralized commerce. The contract keeps the payment in escrow until the trade has been completed and settles disputes by allowing parties to 'threaten' each other to invoke a blockchain oracle. In [1], Schwartzbach shows the contract is secure in a strong game-theoretic sense, assuming the oracle is better than chance; however, if the oracle is random, honesty remains an equilibrium. 

In this repository, we have implemented the smart contract in Ethereum and provide this web application to interface with it. We use [IPFS](https://ipfs.io/), a decentralized data store, to store feeds and listings. The application allows for easy deployment of the smart contract on the Ethereum blockchain using [MetaMask](https://metamask.io/). In order to make full use of this service, you will need to install MetaMask as well. The blockchain oracle is implemented using [Kleros](https://kleros.io/), a decentralized arbitration system on the Ethereum blockchain.

[1] Nikolaj I. Schwartzbach. An Incentive-Compatible Smart Contract for Decentralized Commerce. In *2021 IEEE International Conference on Blockchain and Cryptocurrency*, 2021. Link: https://ieeexplore.ieee.org/document/9461077.

### Disclaimer
The developers of this repository accept no responsibility for use of this application; we are not storing or processing any data from use of this application. It is essentially a client app that makes use of decentralized services for storage of data. We cannot control how this application is used.

## How to Install
* **Clone project**. Start by cloning the present project to your file system.

* **Install nvm**. To manage your node installations, you can install nvm; this should be easy to do on `*nix`-systems. On Windows, [there is a port](https://github.com/nvm-sh/nvm) of nvm. It works rather well, however *it must be installed in a path that does not contains spaces (e.g. C:\)*. 

* **Install npm 16**. After you have installed nvm, install npm by calling `nvm install 16`. At the time of writing, version 17 has a bug in OpenSSL that means this project will not compile. Finally, call `nvm use 16`.

* **Install Vue**. After installing node 16, go to the project directory. Then call `npm install` to install Vue.

* **Install IPFS**. To interface with the decentralized data store, it is useful to run an IPFS node. You can also access the IPFS network through a gateway, though this is not recommended for security reasons. To install, follow the instruction [on the following link](https://docs.ipfs.io/install/ipfs-desktop/).

* **Install MetaMask**. To deploy the smart contract, you will need to run MetaMask. Go to [this web site](https://metamask.io/download.html) and install as an extension for your favorite browser.

Once you have completed the installation, you can run a local instance of the server by calling `npm run serve`.

## Road map
Rough road map of development:
* Establish back end connection to IPFS
* Design front end prototype
* Coin-toss smart contract integration
* Proper documentation + web site contents (good description etc.)
* Review system for listings
* Experiments
* Revaluate front end
* Integration with Kleros or Chainlink'
* Legal advice ?
* Social media (produce video)
* Find way to monetize

## Frontend
Selected tasks needed for the frontend:
* Display listings in list
* Add pages to listings
* Add/remove feeds
* Cookies to remember feeds
* Choose gateway (local, remote)

## Backend
Selected tasks needed for the backend:
* Load raw listings from IPFS
* Implement hyperreferences in IPFS for listings
* Implement -=- for feeds
* System for storing reviews
