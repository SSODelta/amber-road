# Amber Road
## How to Install
* **Clone project**. Start by cloning the present project to your file system.

* **Install nvm**. To manage your node installations, you can install nvm; this should be easy to do on `*nix`-systems. On Windows, [there is a port](https://github.com/nvm-sh/nvm) of nvm. It works rather well, however *it must be installed in a path that does not contains spaces (e.g. C:\)*. 

* **Install npm 16**. After you have installed nvm, install npm by calling `nvm install 16`. At the time of writing, version 17 has a bug in OpenSSL that means this project will not compile. Finally, call `nvm use 16`.

* **Install Vue**. After installing node 16, go to the project directory. Then call `npm install` to install Vue.

* **Install IPFS**. To interface with the decentralized data store, it is useful to run an IPFS node. To install, follow the instruction on the following link.

Once you have completed the installation, you can run a local instance of the server by calling `npm run serve`.

## Road map
Rough road map of development:
* Establish back end connection to IPFS
* Design front end prototype
* Coin-toss smart contract integration
* Review system for listings
* Experiments
* Revaluate front end
* Integration with Kleros or Chainlink
* Social media (produce video)

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
