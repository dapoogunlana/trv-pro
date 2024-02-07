export const apiLinks = {
    binance: `https://api.binance.com/api/v3/ticker/24hr`,
    coinGeco: 'https://www.coingecko.com/en/api/coins/list',
    cryptoCompare: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=7c4c789b0b6c160099497bdfca52a1e941a04d982a37159634689f409ee2e1bd`,
    url: (window.location.href.indexOf('localhost') === -1) ?
     'http://18.234.208.203:2023/api/v1/' : 'http://18.234.208.203:2023/api/v1/',
    next: ``,
}

export const externalLinkConstants = {
    whiteListForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeTTNMBOEw0C_5P_Xu1Rn8dKIHE3Fm16uF0GuAFIhhNFuutjQ/viewform?usp=sf_link',
    partnershipForm: 'https://docs.google.com/forms/d/e/1FAIpQLSf4-DQOsZ-H-DpVHrHZc0nTzp3I2jgNWN94eynNy646pjZ0RA/viewform',
    presaleLink: 'http://presale.manilla.finance',
}
 
export const socialLinks = {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
};