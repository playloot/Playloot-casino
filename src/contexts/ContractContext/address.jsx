const ContractAddresses = {
    // 1: {
    //     usdt: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    //     vault: '0x145Ec2d29b1322EdA2D45c5d8Ed1D2c4F569014c', //'0x4CC1c3cF16376c7EB6A9AA3A96395e46f8c4c4d6',
    //     console: '0x4A7910777cCEc25DC5A98ad00ee5F48BE2eaf682',
    
    //     rng: '0xD2c55C2cCa3766467d00dB7Cd9f0CDBDCf85D970',
    //     house: '0x356b46efa67875a472d9196f657dd0DB49902832',
    //     dice: '0x63765866a578D9B27B981E9d591Ce34c0Ed1b078',
    //     roulette: '0xFFC17d72ba768e189a378CcBf63C0A23B1571dd2'
    //     coinflip: '0x2F6cA0281D657E673c1d95B5C835FFb7aC12c0bB',
    //     rps: '0xC21C6eFd600AA0ECEdd8df8069cD55A16314E53F'
    // },


    /*
MockUSDT contract: 0xb69326265582715950b7bB49dd7c764009C74230
USDTVault contract: 0x92de636d091Bc0000F31f8168b6139CF91BC577C
Console contract: 0x4b4E25793725f99F7ba1BE99C63E3Fe2A2eDd66F
RNG contract: 0x2FeA00Ca0086cF546e68D632fE498f577EcFf4F8
House contract: 0x63e4dCFE302c437De9a08d4C832FFEf13cD01aE5
GameDice contract: 0x8dec9B052275fE9564e1f9708Efb37D11E258395
GameRoulette contract: 0x3a66D06D351dEa50CF5cC82885Dfd6811e24839d
GameCoinflip contract: 0x5969F1f337Fd31FD0007a2FCfE2461725B60556c
GameRPS contract: 0xb1a53b36B97516629F6fA59DD9baaec1Cef47917


    */
    5: {
        usdt: '0xb69326265582715950b7bB49dd7c764009C74230',
        vault: '0x92de636d091Bc0000F31f8168b6139CF91BC577C',
        console: '0x4b4E25793725f99F7ba1BE99C63E3Fe2A2eDd66F',
        
        rng: '0x2FeA00Ca0086cF546e68D632fE498f577EcFf4F8',
        house: '0x63e4dCFE302c437De9a08d4C832FFEf13cD01aE5',
        dice: '0x8dec9B052275fE9564e1f9708Efb37D11E258395',
        roulette: '0x3a66D06D351dEa50CF5cC82885Dfd6811e24839d',
        coinflip: '0x5969F1f337Fd31FD0007a2FCfE2461725B60556c',
        rps: '0xb1a53b36B97516629F6fA59DD9baaec1Cef47917'
    },

    /**MockUSDT contract: 0xa8A4fD7B2FDfB4FCcCe60fC2e9b02bB7A604B98E
USDTVault contract: 0x35763095bf64d7a3610A8899aFD601765a3Fb566
Console contract: 0x370Aeb42011a6e3E31Ec46Eed30E6d99189C48B5
RNG contract: 0x24e10810AE27c032C24Fd78140d770F106ea7499
House contract: 0xA7Dfa27169c4d540Dc1b85D2c0F01Ab109ECC8d7
GameDice contract: 0xBe579E31057f98d81dF4675b094dEA8c5BcBcE31
GameRoulette contract: 0x1928344036A564EDAabA649D6Ec583580D8Eaa87
GameCoinflip contract: 0xB2c2dd1e657C1732A9f43751e5A1b013fa790De5
GameRPS contract: 0x215fd24D0240d31b66d4623d7F89e6804cE578C2 */

    1313161555: { //Aurora testnet
        usdt: '0xa8A4fD7B2FDfB4FCcCe60fC2e9b02bB7A604B98E',
        vault: '0x35763095bf64d7a3610A8899aFD601765a3Fb566',
        console: '0x370Aeb42011a6e3E31Ec46Eed30E6d99189C48B5',
        
        rng: '0x24e10810AE27c032C24Fd78140d770F106ea7499',
        house: '0xA7Dfa27169c4d540Dc1b85D2c0F01Ab109ECC8d7',
        dice: '0xBe579E31057f98d81dF4675b094dEA8c5BcBcE31',
        roulette: '0x1928344036A564EDAabA649D6Ec583580D8Eaa87',
        coinflip: '0xB2c2dd1e657C1732A9f43751e5A1b013fa790De5',
        rps: '0x215fd24D0240d31b66d4623d7F89e6804cE578C2'
    },


    /**MockUSDT contract: 0x3e95A633aB95974ad844b68f989141FbFf2dF506
USDTVault contract: 0x3e3f3801F08CC0F1dfc3FE35Ef8880a12CC4576A
Console contract: 0xc17C5aed88F320c8160E8338693960194Ea67135
RNG contract: 0xfAc189177F148E2E0761F7877536C5129396f93C
House contract: 0xb33d2771Bf53EAB60487C2B5D548B1E481a19e50
GameDice contract: 0xfe8CF445370A4e2C67299029825f017881000691
GameRoulette contract: 0xDc4FAe6F3e668c8f4B1EC035d2169fee4DD736bc
GameCoinflip contract: 0x909f9a40444D1bEcA95fdB1CBF3Fd2774fE8EE23
GameRPS contract: 0xcaC0babA3177742C2aa972f249973fF14e2192C8 */

    7771: { //Bitrock testnet
        usdt: '0x3e95A633aB95974ad844b68f989141FbFf2dF506',
        vault: '0x3e3f3801F08CC0F1dfc3FE35Ef8880a12CC4576A',
        console: '0xc17C5aed88F320c8160E8338693960194Ea67135',
        
        rng: '0xfAc189177F148E2E0761F7877536C5129396f93C',
        house: '0xb33d2771Bf53EAB60487C2B5D548B1E481a19e50',
        dice: '0xfe8CF445370A4e2C67299029825f017881000691',
        roulette: '0xDc4FAe6F3e668c8f4B1EC035d2169fee4DD736bc',
        coinflip: '0x909f9a40444D1bEcA95fdB1CBF3Fd2774fE8EE23',
        rps: '0xcaC0babA3177742C2aa972f249973fF14e2192C8'
    },

    5234: { //humanode mainnet
        usdt: '0xb69326265582715950b7bB49dd7c764009C74230',
        vault: '0x92de636d091Bc0000F31f8168b6139CF91BC577C',
        console: '0x4b4E25793725f99F7ba1BE99C63E3Fe2A2eDd66F',
        
        rng: '0x2FeA00Ca0086cF546e68D632fE498f577EcFf4F8',
        house: '0x63e4dCFE302c437De9a08d4C832FFEf13cD01aE5',
        dice: '0x8dec9B052275fE9564e1f9708Efb37D11E258395',
        roulette: '0x3a66D06D351dEa50CF5cC82885Dfd6811e24839d',
        coinflip: '0x5969F1f337Fd31FD0007a2FCfE2461725B60556c',
        rps: '0xb1a53b36B97516629F6fA59DD9baaec1Cef47917'
    },

/**MockUSDT contract: 0x4D9d86D841dF513d2c4b83b95A774dDBC9Cb3d95
USDTVault contract: 0xdEFC5CDDa4358a97B0c61f9d62cE2f9027C2dD85
Console contract: 0x7834dAf99d6382F236Ff9464d8b6968fedd7Ecb4
RNG contract: 0x3587c03d9aA0E51d9cDb7D909b62932CBD23a2B0
House contract: 0xe714E6A1d9621FD3554ffd64afc28d7cBB7aF379
GameDice contract: 0x34B7Fa4de554b8346CA8706f8e8a631a242ffbd3
GameRoulette contract: 0x6108Ee70A437C87797b98a5aE84A4AD5D2A98E16
GameCoinflip contract: 0x789f0931095B87Cf32E33d8cf0771BC27Ee21c59
GameRPS contract: 0xD1E765d76f7B26475fFDE11caEcD7fa28BC6Fa58 */
    97: { //bsc testnet
        usdt: '0x4D9d86D841dF513d2c4b83b95A774dDBC9Cb3d95',
        vault: '0xdEFC5CDDa4358a97B0c61f9d62cE2f9027C2dD85',
        console: '0x7834dAf99d6382F236Ff9464d8b6968fedd7Ecb4',
        
        rng: '0x3587c03d9aA0E51d9cDb7D909b62932CBD23a2B0',
        house: '0xe714E6A1d9621FD3554ffd64afc28d7cBB7aF379',
        dice: '0x34B7Fa4de554b8346CA8706f8e8a631a242ffbd3',
        roulette: '0x6108Ee70A437C87797b98a5aE84A4AD5D2A98E16',
        coinflip: '0x789f0931095B87Cf32E33d8cf0771BC27Ee21c59',
        rps: '0xD1E765d76f7B26475fFDE11caEcD7fa28BC6Fa58'
    },

/**MockUSDT contract: 0x269B5521943bE01572596AE66175678C45959e70
USDTVault contract: 0x3e95A633aB95974ad844b68f989141FbFf2dF506
Console contract: 0x3e3f3801F08CC0F1dfc3FE35Ef8880a12CC4576A
RNG contract: 0xc17C5aed88F320c8160E8338693960194Ea67135
House contract: 0xfAc189177F148E2E0761F7877536C5129396f93C
GameDice contract: 0xb33d2771Bf53EAB60487C2B5D548B1E481a19e50
GameRoulette contract: 0xfe8CF445370A4e2C67299029825f017881000691
GameCoinflip contract: 0xDc4FAe6F3e668c8f4B1EC035d2169fee4DD736bc
GameRPS contract: 0x909f9a40444D1bEcA95fdB1CBF3Fd2774fE8EE23 */

    700707: { //planq testnet
        usdt: '0x269B5521943bE01572596AE66175678C45959e70',
        vault: '0x3e95A633aB95974ad844b68f989141FbFf2dF506',
        console: '0x3e3f3801F08CC0F1dfc3FE35Ef8880a12CC4576A',
        
        rng: '0xc17C5aed88F320c8160E8338693960194Ea67135',
        house: '0xfAc189177F148E2E0761F7877536C5129396f93C',
        dice: '0xb33d2771Bf53EAB60487C2B5D548B1E481a19e50',
        roulette: '0xfe8CF445370A4e2C67299029825f017881000691',
        coinflip: '0xDc4FAe6F3e668c8f4B1EC035d2169fee4DD736bc',
        rps: '0x909f9a40444D1bEcA95fdB1CBF3Fd2774fE8EE23'
    },

    // 5: {
    //     usdt: '0xeF1964205a7191CBa975544Fd4a3C6a00558C6EB',
    //     vault: '0x6946e629c119a44C9B54596C081c60984A1Ec60B',
    //     console: '0x4fE42CcD7c7a7F4cd03EDDD030809329D8e98885',
    //     ganti chainid
    //     rng: '0xA64525E84540c07cF50f1E6aa55A29DeA522227C',
    //     house: '0x0C7AB818D196E894D77F1292FD63Fe61BBe2aCf9',
    //     dice: '0x890BbC84bbD143010BC358058ADB5a51b26aC333',
    //     roulette: '0xb990797F87abF26FcCda07d4e9A0d9eeA28F1cb6',
    //     coinflip: '0x93F7d3A19DA956A89488e26c2f92ae4C75Bb96A5',
    //     rps: '0xccC23f0F3c6D9307842505B5899466D20187c712'
    // },

    // 5: {
    //     usdt: '0x9FFF9C150EF30f74Ba85A88B398277583c2e993E',
    //     vault: '0xEc6771c75D29b15FA6Be7196d785bE034a73f5dC',
    //     console: '0x0387dEC3Cf48A96C993Da240e1652EfE78EE42f4',
        
    //     rng: '0x6f5Cf807ca752E624DC49fA942f9d18AA52F55D5',
    //     house: '0x7A2403D9c7B98819F68CaD8BBe1b0B4903c4269d',
    //     dice: '0x2f0d1cA0F1DDC9aD53e4d7A6e853a86C59ff9B7E',
    //     roulette: '0x866D0aF3B9587E69Fc91d30FC1018b0Dd489E7A4',
    //     coinflip: '0xccF066d701540664eef4F02f780dA5C095edeE33',
    //     rps: '0x4e28c83c9781428B790669109327E2178dbA12E4'
    // },
    31337: {    // don't use the following addresses
        usdt: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        vault: '0xD2c55C2cCa3766467d00dB7Cd9f0CDBDCf85D970',
        console: '0x4CC1c3cF16376c7EB6A9AA3A96395e46f8c4c4d6',
        
        rng: '0x356b46efa67875a472d9196f657dd0DB49902832',
        house: '0x63765866a578D9B27B981E9d591Ce34c0Ed1b078',
        dice: '0xFFC17d72ba768e189a378CcBf63C0A23B1571dd2',
        roulette: '0x3e95A633aB95974ad844b68f989141FbFf2dF506',
        coinflip: '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e',
        rps: '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0'
    }
}

export default ContractAddresses
