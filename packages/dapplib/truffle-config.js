require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name raise ranch purity install cricket slot genre'; 
let testAccounts = [
"0x6e679e28100388fa676559b7decd8b0a5058dddf336c9fc8d69c8e0b132c1f9a",
"0x3afe87237ef3d6f138c4f0431f4e32474bad8ab0325da00d77ea78dba3937dec",
"0x3dbc8afab692a995d8581a1d6f12dc7506fd7705b33af6389336f87469ec01cd",
"0x93569a057bb23f083d84bfac386f99031b9d0f3d04af87c52bc7d429dc8f8ee1",
"0x36bb30c58e388aa2ccc5b5aa54a73e378dd70b3484f1827ba3a0aae1599bd942",
"0x2b6739142e3392ad9d32458830df8e29f8fa28c6383b2bbbf0f0b9fc49eae2b8",
"0x51968868bca84e001302510fe0d04cffcca3b639407397ca2afdc867cd529845",
"0x4cd60135286efb066159c5e69ce5f14936161be6f76153ccfe96b9fd254c0f7b",
"0x828a2693d181b5822fd065563bc013baf0eab61540ae727999d82b1397c252f9",
"0xeadcd4e8e82a476e5042cef5fadf6ee8b4e83dba51a4c0a07ca4d614ffe16b1a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

