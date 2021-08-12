require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food damp crawl rifle unhappy install civil army general'; 
let testAccounts = [
"0xc4f678414568a6807181423be3c5ff26557a59bf4d74c6ca8b855c5845a90a82",
"0x1319399692e4774d6aaa4c3ac43e64bb7a44975019cada038b634d778b5029ca",
"0x2e718c377bc8ee952da43d602f66acdb35613a7bcfb471b67c98589680a1793b",
"0x3c245ec6c888101429ed115b3d9585589dc69e065702a204e498020cc942def2",
"0xb50d9f39c408a07b25a337f7586ebcafedc9edb5ec45bde606ca0be1750bfcbb",
"0x058229ad88889bf021dea56fcade44eff88c477adc6f7aaa4103eb1d026dd603",
"0x166d16aa93dca25f6b02dd00e0e61e1926e99ed0448fb429218fa3ceceef1aed",
"0x743bc874c2d17c9ec36b72459982e0500924b07c8e09b29ce624dd778abc1e24",
"0x919d501d18588dd5ea85f48bff89100ebf040440bf106e966f901ad443d01097",
"0x3e1a20b1c5b976a953f1e48c94f3465b1a8ffb992d2555e9897eed583ede6244"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

