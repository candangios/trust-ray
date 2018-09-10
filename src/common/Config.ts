const Web3 = require("web3");
const config = require("config");

export class Config {
        static network = config.get("https://testnet.tomochain.com");
        static web3 = new Web3(new Web3.providers.HttpProvider(Config.network));
}
