// https://eth-ropsten.alchemyapi.io/v2/BmZkY-El77VJPDZyxnBiAuz7K5hU8Ip2

require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/BmZkY-El77VJPDZyxnBiAuz7K5hU8Ip2',
			accounts: [
				'f838281ae3541275da4010303fec33c0d095fc4fed5dbbfa3d1dee0e3b64adea',
			],
		},
	},
};
