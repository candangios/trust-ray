const Web3 = require("web3");
const config = require("config");

export class Config {
        static network = config.get("https://rinkeby.infura.io/v3/a78f819911994678934d1c811f3c4b47");
        static web3 = new Web3(new Web3.providers.HttpProvider(Config.network));
}
