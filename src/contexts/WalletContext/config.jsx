const walletConfig =
{


    700707: {
        chainId: '0x1472',
        switchLabel: '',
        networkName: 'Planq Testnet',
        mainnet: true,
        nativeCurrency: {
            name: 'PLQ',
            symbol: 'PLQ',
            decimals: 18
        },
        rpcUrls: ['https://test.rpc.evm.physica.finance'],
        blockUrls: ['http://167.86.99.150:4000/'],

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            docs: '/'
        }
    },

    
    1: {
        chainId: '0x1',
        switchLabel: '',
        networkName: 'Ethereum Mainnet',
        brand: 'SHINO',
        icon: '/icons/eth.png',
        logo: '/images/logo/shino.jpg',
        mainnet: true,
        network: "ethereum",
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://mainnet.infura.io/v3/7535811d19b1410e98c261fbb638651a'],
        blockUrls: ['https://etherscan.io/'],
        apiUrl: 'https://api.etherscan.io/api',
        apiKey: '6261JHGXK1E5GG3R9BBVD99VSD86F8FG2B',

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            telegram: 'https://t.me/Shino_Portal',
            twitter: 'https://twitter.com/Shino_Finance',
            landing: 'https://www.shino.finance/',
            docs: 'https://shinofinance.gitbook.io/shino/'
        }
    },
    5: {
        chainId: '0x5',
        switchLabel: '',
        networkName: 'Goerli test network',
        network: "goerlitestnet",
        brand: 'GOERLI',
        icon: '/icons/bnb.png',
        logo: '/images/logo/goerli.jpg',
        mainnet: true,
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://goerli.infura.io/v3/81a88049129c4d439036c0b25bf64213'],
        blockUrls: ['https://goerli.etherscan.io'],
        apiUrl: 'https://goerli.infura.io/v3/',
        apiKey: '70741b998f71410e8f930fde238b92f8',

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            docs: '/'
        }
    },
    1313161555: {
        chainId: '0x4e454153',
        switchLabel: '',
        networkName: 'Aurora Testnet',
        mainnet: true,
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://testnet.aurora.dev'],
        blockUrls: ['https://testnet.aurorascan.dev'],

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            docs: '/'
        }
    },
    7771: {
        chainId: '0x1e5b',
        switchLabel: '',
        networkName: 'Bitrock Testnet',
        mainnet: true,
        nativeCurrency: {
            name: 'BROCK',
            symbol: 'BROCK',
            decimals: 18
        },
        rpcUrls: ['https://testnet.bit-rock.io'],
        blockUrls: ['https://testnetscan.bit-rock.io'],

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            docs: '/'
        }
    },
    5234: {
        chainId: '0x1472',
        switchLabel: '',
        networkName: 'Humanode Mainnet',
        mainnet: true,
        nativeCurrency: {
            name: 'eHMND',
            symbol: 'eHMND',
            decimals: 18
        },
        rpcUrls: ['https://explorer-rpc-http.mainnet.stages.humanode.io'],
        blockUrls: ['https://humanode.subscan.io'],

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            docs: '/'
        }
    },

   

    97: {
        chainId: '0x61',
        switchLabel: '',
        networkName: 'BSC Testnet',
        mainnet: true,
        nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18
        },
        rpcUrls: ['https://go.getblock.io/0ba1a28e013846dda938055915ca6b19'],
        blockUrls: ['https://testnet.bscscan.com'],

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            docs: '/'
        }
    },
}

export default walletConfig
//ganti chainid