import {
    LearnImg1bitcoin,
    LearnImg2ethereum,
    LearnImg3tether,
    LearnImg4usdc,
    LearnImg5bnb,
    LearnImg6xpr,
    LearnImg7cardano,
    LearnImg8solana,
    LearnImg9android,
    LearnImg10trust,
    LearnImg11blockchain,
    LearnImg12imtoken,
    LearnImg13atomic,
    LearnImg14bitcoin,
    LearnImg15ethereum,
} from '../../../assets/images';

export interface IlearnData {
    id: number | undefined,
    image: string,
    title: string,
    content: {
        topic: string,
        point: string,
        subPoints: string[],
    }[],
};
export const learnDataInitialState: IlearnData = {
    id: undefined,
    image: '',
    title: '',
    content: [
        {
            topic: '',
            point: '',
            subPoints: [],
        }
    ],
};

export const learnList = [
    {
        id: 1,
        image: LearnImg1bitcoin,
        title: 'Bitcoin - The Overview',
        content: [
            {
                topic: ``,
                point: `Although it started less than a decade ago, the cryptocurrency market as at the time of writing boasts of a market capitalization above $1 Trillion USD. This triumph being relished by crypto investors and enthusiasts today is credited to the first ever digital currency, Bitcoin, which currently controls about 50% of the industry’s market capitalization..`,
                subPoints: [],
            },
            {
                topic: `Brief History Of Bitcoin`,
                point: `The original whitepaper of Bitcoin was written by a famous but anonymous individual or group of individuals by the name Satoshi Nakamoto in 2008. The token itself was published in 2009 and in the subsequent year, the first Bitcoin transaction was carried out. A few thousands of this coin were transferred between two parties. Today, a Bitcoin token is worth an average of $30,000, leaving many of the adopters regretting having not boarded the train when it was almost nothing. Financial analysts and experts are already predicting that the price of Bitcoin (BTC) will skyrocket above $100,000 in the coming  years.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The advent of Bitcoin has given rise to the creation of other digital currencies which are largely regarded as Alternate coins (Altcoin). At present, there are over three thousand digital currencies out there which are each associated with their unique use-cases. In a more succinct way; cryptocurrencies are providing an economy for decentralized applications and with Bitcoin spearheading the efforts, cryptocurrencies have become a significant threat to the traditional FX market.`,
                subPoints: [],
            },
            {
                topic: `How Bitcoin (BTC) Works`,
                point: `Bitcoin is published over millions of computer nodes which are running complex mathematical algebras. It is worthy of note taking that we cannot create new Bitcoin tokens. According to its whitepaper, the total supply of BTC that can ever exist has been printed. Nevertheless, fierce discrepancy among the leading figures in the Bitcoin community has led to the creation of new hard forks of Bitcoin which are hosted over new chains.`,
                subPoints: [],
            },
            {
                topic: `Use-cases Of Bitcoin (btc)`,
                point: `Online and offline payment (Medium of exchange): Bitcoin is being widely accepted as a form of payment at stores, malls, eateries, etc., online and offline. With the inception of Bitcoin cards, cryptocurrency enthusiasts can now transfer, store and spend their assets at point of sales, ATMs, and so on.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Value storage: One of the drawbacks to the mass adoption of cryptocurrency is volatility. Despite the strength of this factor, Bitcoin is still one of the most stable digital assets out there. Towards the end of 2021, Bitcoin rose to an all-time highest value of over $65,000. This fetched impractical amount of profits for the early adopters. Bitcoin has proved to be the next-generation entity for storing assets' value.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Digital economy: Ever since its inception, thousands of individuals have adopted this new economy concept; investing when the price is down, HODLing through the hard times and trading when the value rises.`,
                subPoints: [],
            },
            {
                topic: `Bitcoin Market History, Market Cap And Price Stat`,
                point: `Although the whitepaper was published in 2008, it was not until July, 2013 that the first cryptocurrency exchange (where Bitcoin could be traded) was launched. At that time, this powerful digital currency was traded at $0.05 per coin. On February 13th, 2011, Bitcoin went in pair with the United States fiat currency and was traded at exactly $1 USD.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `By November 25th, 2014, Bitcoin was valued at $979.45. That kick-started a successful journey for cryptocurrency as it got the attention of big guns in the finance world. By the second quartile (Q3) of 2017, BTC was already being traded at $2,851.07. By the third quartile of the same year, it rose to $4,276.26 with a market cap of over $2 Billion and by November 10th in the year 2021, Bitcoin got to the all-time highest rate of over $68,789.63 with an all-time highest market cap of over $1 Trillion.`,
                subPoints: [],
            },
            // {
            //     topic: ``,
            //     point: `BTC is currently being traded at $$BTCcurrentPrice on major exchanges with a market cap of $$BTCcurrentMarketCap, 24-hour volume of $$$BTCcurrent24HourVolume and a circulating supply of $$BTCcurrentSupply BTC.`,
            //     subPoints: [],
            // },
        ],
    },
    {
        id: 2,
        image: LearnImg2ethereum,
        title: 'Ethereum - The Overview',
        content: [
            {
                topic: ``,
                point: `Ethereum is the second largest cryptocurrency both by market capitalization and popularity. It is arguably the most used digital assets with thousands of decentralized projects running on its chain.`,
                subPoints: [],
            },
            {
                topic: `Brief History Of Ethereum`,
                point: `In creating the Ethereum operating system, Vitalik Buterin, the writer of its whitepaper used the concept similar to Bitcoin’s. Vitalik is a programmer and worked at Bitcoin Magazine where he gained all-out acquaintance with cryptocurrency and blockchain technology. In 2013, he wrote the Ethereum whitepaper with the goal of building a virtual machine on which decentralized applications can be built.
                Today, thousands of DApp or decentralized apps are running on Ethereum operating system.
                `,
                subPoints: [],
            },
            {
                topic: `Ethereum Native Currencies - Eth And Erc Tokens`,
                point: `Ether (ETH) is the native currency of Ethereum. It is a tradeable digital currency, ranking only second to Bitcoin by market capitalization.
                Unlike Bitcoin, there are various protocol tokens on the Ethereum network called the ERC or Ethereum Request for Comment tokens. These tokens express to blockchain programmers the set of rules that define how tokens are to be implemented on the network. The inception of ERC tokens made creating utility tokens easy for newly incepted decentralized applications.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `As individuals come together to create decentralized projects, they generate use-cases around the projects' native currencies which are published over the Ethereum chain. These currencies that are being burnt through the Ethereum operating system are standalone and create an economy by which the projects are monetised.
                One of the most used among the ERC tokens is the ERC-20. This token is being used by over a thousand DApps to publish their independent native currencies. Examples of tokens that were published on Ethereum's ERC-20 are EOS, Tron (TRX), Maker (MKR), Basic Attention Token (BAT), Omisego (OMG), Paxos Standard Token (PAX), IOST and DAI.
                Other Ethereum chain tokens are ERC223, ERC721, ERC777 and many more.
                `,
                subPoints: [],
            },
            {
                topic: `Use-cases Of Ethereum`,
                point: ``,
                subPoints: [
                    `Payments: Ethereum is among the cryptocurrencies that are being accepted as a form of payment for merchandise both online and offline, across the globe.`,
                    `Smart Contract: Ethereum, rather than Bitcoin is an operating system powering scripts in which Smart Contracts are being held. This eliminates the use of legal practitioners whose charges are usually enormous in executing contracts. Today, with the help of blockchain technology and computer code, we can set up, manage and control contractual agreements using the concept known as Smart Contract.`,
                    `Bringing real world assets in tokenized form: As we have discussed above, the blockchain technology has brought about the creation of several decentralized projects. Most of these projects have their native currencies which are being sold during the ICO (Initial Coin Offering) or IDO (Initial DEX Offering) exercices. Ethereum makes token creation easy for project owners and as well, HODLers of these coins get their real-world assets tokenized amassing huge profits when the coins get listed on exchanges.`,
                ],
            },
            {
                topic: ``,
                point: `Other applications of Ethereum include digital identity, security, health and many more.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Eth Market History, Market Cap And Price Stat.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `On August 7, 2015, the first ETH trading took place with an initial price of $2.83. By January the subsequent year, it was being sold on multiple exchanges at $1.06 and although that indicates a drop in value, it accumulated a staggering market cap of $81,051,494 USD. By the second quartile of 2017, ETH was already being valued at $333.50 with a market cap of over $30 billion USD.  On November 16, 2021, ETH got its all-time highest value of $4,891.70 USD and alongside its highest market cap of $560.56 Billion USD thereby registering a 24-hour volume of over $29 Billion USD.`,
                subPoints: [],
            },
            // {
            //     topic: ``,
            //     point: `ETH is currently being traded at $ETHcurrentPrice on major exchanges with a market cap of $ETHcurrentMarketCap, 24-hour volume of $ETH24hourVolume and a circulating supply of $ETHcirculatingSupply ETH.`,
            //     subPoints: [],
            // },
        ],
    },
    {
        id: 3,
        image: LearnImg3tether,
        title: 'Tether USDT',
        content: [
            {
                topic: ``,
                point: `Tether (USDT) is a cryptocurrency token having its value pegged around the United States fiat currency (US dollar). It is developed to provide stability and increase liquidity in the cryptocurrency space. Think of USDT as the US dollar in its digital form. Since its value is pegged around a fiat currency and its rise and fall solely depend on the value of US dollar in the FX market, USDT is referred to as a "stable coin".`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although it is really hard to say if USDT can successfully hold its ground and never deviate from being valued at exactly $1 at all time, it has brought about a new mechanism to the industry which some other cryptocurrencies tend to leverage upon.`,
                subPoints: [],
            },
            {
                topic: `Volatility In The Cryptosphere: The Importance And Setback`,
                point: `Instability has been one of the major challenges facing the mass adoption of cryptocurrency right from the early days. Crypto coins tend to move up and down the trend thereby resulting in massive loss or profit for the enthusiastic traders. While the same factor is responsible for the continued rise in crypto values from nearly-zero to thousands of US dollars, there is no doubt that it has resulted in many traders going bankrupt.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `However, without volatility, the amount of profits that traders could make from an entity is very close to nothing. Let us take a look at an instance where a certain commodity is bought for $5. With absolute stability, you cannot sell such a commodity beyond the cost amount. The only factor that could influence the trade and result in you making extra dollars is the development in the foreign exchange (FX) market.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `If a coin is pegged around a particular fiat currency, the rise and fall of its value is directly dependent on the pegged fiat currency. This definitely creates stability in the market but at the same time makes trading quite boring.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `While stability means a reduced amount of loss in the cryptocurrency market, it, at the same time brings about a minimum amount of profits for the investors. Hence, instability is not so bad or at least not as bad as we believe it to be. As traders, we have lost some fortunes thanks to the volatility in the market, in spite of that, we have acquired a reasonable amount of profits courtesy of the same factor.`,
                subPoints: [],
            },
            {
                topic: `Brief History Of USDT`,
                point: `J.R. Willet, the writer of Ether whitepaper developed a new idea in the cryptocurrency space in 2012. The concept was to create a new currency that can stand in both the FX market and cryptocurrency world on Bitcoin protocol. This advancement was implemented into "Mastercoin", the very foundation of Tether cryptocurrency.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Willet worked with Brock Pierce and Craig Sellers who all went on to become co-founders and the very pioneers of stablecoins in the cryptosphere.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `By the first quartile of 2017 (Q1), Tether went on to be listed on Bitfinex exchange, the first exchange to allow USDT trading. After having a feud with a Taiwan bank, Wells Fargo, which resulted in a lawsuit, Tether announced the launch of an additional ERC-20 token not only for US dollar but euros as well on Ethereum chain.`,
                subPoints: [],
            },
            {
                topic: `USDT Market History, Market Cap And Price Stat`,
                point: `USDT was launched with an initial price of $1 USD as pegged with an initial market cap of $251,300 USD. It maintained the pegged value until February 25th 2015 USDT when it went up to what happens to be its all-time highest value of $1.05. The value however, dropped to its all-time low of $0.5683 USD the subsequent month.`,
                subPoints: [],
            },
            // {
            //     topic: ``,
            //     point: `USDT is currently being traded at exactly $USDTcurrentPrice on major exchanges with a market cap of $USDTcurrentMarketCap USD, 24 hour volume of $USDT24hourVolume and a circulating supply of $USDTcirculatingSupply USDT from the total supply of $USDTtotalSupply USDT.`,
            //     subPoints: [],
            // },
        ],
    },
    {
        id: 4,
        image: LearnImg4usdc,
        title: 'USDC',
        content: [
            {
                topic: ``,
                point: `USDC is a leading cryptocurrency, recording the best performance among stablecoins with its value hovering around $0.9998 and $1.1 USD at most times.`,
                subPoints: [],
            },
            {
                topic: `External Links`,
                point: ``,
                subPoints: [
                    `Project website: https://www.crypto.com/en/chain`,
                    `Whitepaper 1: https://crypto.com/images/chain_whitepaper.pdf`,
                    `Whitepaper 2: https://crypto.com/images/mco_whitepaper.pdf`
                ],
            },
            {
                topic: ``,
                point: `With the introduction of stablecoins, the cryptocurrency industry finally found a solution to volatility, the leading factor characterising the market in the last few years. While volatility is responsible for the massive growth enjoyed in this financial sector, it has at the same time left many traders in bankruptcy.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Many business tycoons are still not convinced that digital currencies possess the quality needed to battle it out with fiat currencies. While its potential cannot be denied by even its greatest foe, cryptocurrency is way too unstable to perform a total sweep of fiat currencies out of the business world, thereby revolutionising the finance market.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The year 2016, saw many of the existing cryptocurrency tokens gain popularity in the market with numerous centralised bodies bringing their services on blockchain, thereby producing decentralised applications. In the succeeding year, most digital currencies boomed, multiplying in values and luring new investors onboard.`,
                subPoints: [],
            },
            {
                topic: `Why USDC?`,
                point: `There are various reasons why you should go for this coin. Some of them are listed below.`,
                subPoints: [],
            },
            {
                topic: `Stability brought by its USD backing`,
                point: `While all cryptocurrencies in general have been characterized by constant instability, stablecoins have their way of ensuring that their values do not exceed far from their pegged fiat values. However, not all of them are backed by financial institutions due to the fact that they are published on a census-resistant technology, blockchain.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `USDC is backed and reserved by financial institutions, making it one of the leaders as far as stablecoins are concerned. The tokens are issued by these institutions and hence, this ensures that the value does not go any far from $1 USD.`,
                subPoints: [],
            },
            {
                topic: `Transparency`,
                point: `The fact that USDC is built on blockchain technology makes the currency fully transparent. This technology is well known for this feature as transactions are broadcasted to all the nodes on the network as well as all the members of the ecosystem are able to view transactions.`,
                subPoints: [],
            },
            {
                topic: `Agglomerates centralized and decentralized systems`,
                point: `While USDC has the features of fiat since it is very stable, it at the same time exhibits that of a digital currency. The centralized attributes and backing ensures stability while the decentralized brought about total flexibility and transparency.`,
                subPoints: [],
            },
            {
                topic: `USDC Market History, Market Capitalization And Price Stat`,
                point: `An all-time high occurred on January 30th, 2020 when USDC was sold around $1.044 USD, however, with zero recorded market cap. For the record, the lowest price that USDC has been sold in its market history is $0.9702 USD, taking place on 17th of March, 2020.`,
                subPoints: [],
            },
            // {
            //     topic: ``,
            //     point: `USDC is currently being traded at $ USDCcurrentPrice USD on major exchanges with a market cap of $USDCcurrentMarketCap USD, 24-hour volume of $USDT24hourVolume USD and a total number of $USDCcirculatingSupply USDC is currently circulating in the cryptocurrency market from the total supply of $ USDCtotalSupply USDC.`,
            //     subPoints: [],
            // },
        ],
    },
    {
        id: 5,
        image: LearnImg5bnb,
        title: 'BNB - The Overiview',
        content: [
            {
                topic: ``,
                point: `Binance Coin (BNB) is the cryptocurrency coin created and owned by one of the largest exchanges in the cryptocurrency sphere today, Binance. It is a native token with its primary utility being an alternative form of payment for transaction fees on Binance exchange.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Unlike other cryptocurrency exchanges, Binance does not deal in fiat currencies, rather it is strictly only for cryptocurrency. It is pertinent to note that Binance did not have the facility for fiat deposit until January 2019, as this new development gave us various deposit options in cryptocurrency, fiat and the use of Bitspark mobile app that allows direct cash deposit.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Various other major cryptocurrency exchanges offer both digital assets and fiat currencies, thereby agglomerating the cryptocurrency and foreign exchange worlds.`,
                subPoints: [],
            },
            {
                topic: `The BNB Journey`,
                point: `Binance coin (BNB) was initially published on Ethereum chain as an ERC-20 token. After undergoing a successful launch and rise in value within a short period of time, the token was moved to the Binance blockchain which was developed shortly after the Binance coin launch. Binance coin is heavily traded on DEX, which happens to be an exchange created on the Binance blockchain..`,
                subPoints: [],
            },
            {
                topic: `BNB Incentives`,
                point: `Trading on Binance attracts a service fee of 0.1% of the transaction amount. This is usually associated with digital currency deposit. Withdrawals incur an extra fee that is calculated based on the transaction amount.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Today, you can pay service fees using the Binance native currency. Using this payment method brings discount in the following format:`,
                subPoints: [
                    `50% discount on all transactions in the first year.`,
                    `25% discount on transactions done in the second year.`,
                    `12.5% discount on the transaction done in the third year.`,
                    `6.75% discount in the fourth year.`
                ],
            },
            {
                topic: ``,
                point: `Transactions done in the subsequent years will attract no discount regardless of the payment method used. However, nothing is constant in the business world and Binance might bring about new plans that offer seasonal discounts in the near future.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although the use of Bitspark mobile application in making deposit into your Binance wallet attracts fewer charges compared to credit cards and bank transfers, Binance Coin (BNB) remains the best deposit method as the discounts offered by this bring about the fewest transaction fees on deposits.`,
                subPoints: [],
            },
            {
                topic: `BNB Market History, Martket Cap And Price Stat`,
                point: `BNB coin was launched on July 25th, 2017 with an initial price of $0.115203 USD, accumulating a market cap of $11,520,300 USD. It only took it two months to climb to a new high price of $2.12 US dollar, generating a market cap of $211,960,000 USD in the process.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `On January 12th, 2018, BNB made a sudden climb to the uptrend, increasing its price to $24.46 USD with a market cap of $2,422,090,369 USD. BNB is one of the few coins to have gotten their all-time highest value within the year 2019 despite the presence of intense volatility in the market. A record highest price of $690.93USD with a market cap of over $100 Billion USD was reached on 10th of May, 2021.`,
                subPoints: [],
            },
            // {
            //     topic: ``,
            //     point: `BNB is currently being traded at exactly $ BNBcurrentPrice on major exchanges with a market cap of $ BNBcurrentMarketCap USD, 24 hour volume of $BNB24hourVolume USD and a circulating supply of $BNBcirculatingSupply  BNB from the total supply of $BNBtotalSupply  BNB.`,
            //     subPoints: [],
            // },
        ],
    },
    {
        id: 6,
        image: LearnImg6xpr,
        title: 'XRP -  The Overview',
        content: [
            {
                topic: ``,
                point: `Ripple is a real-time operating system, a network for settlement as well as a digital currency exchange that is built on open-source network mechanism rather than most of other cryptocurrencies. It uses a concept known as Ripple Consensus Ledger.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Ripple is widely being used as a settlement by financial sectors as it has the ability to process transaction confirmation in the most efficient way possible and at a very high speed.`,
                subPoints: [],
            },
            {
                topic: `Brief History Of Ripple`,
                point: `Ripple (XRP) was developed with the primary function of supporting instant financial transaction processing and confirmation, in a very secure means at zero fees. The idea came from Jed McCaleb, a blockchain expert. He teamed up with developers, Arthur Britto and David Schwartz who worked together in building the chain with the help of another leading figure in blockchain programming and cryptocurrency, Ryan Fugger.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although, the Ripple Lab only built the Ripple chain in 2013, Ryan Fugger, an important figure on this project, has been into financial institutions since 2005. The XRP coin was published using the concept related to that of Bitcoin (as it is with other cryptocurrencies) but with a different mindset.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The Ripple network has a functionality of integrating with the centralized financial systems such as banks, using a consensus verification code developed by their programmers in Ripple Lab. The successful launch of this project resulted in Ripple Lab being named as one of the 50 Smartest Companies in the world in the 2014 first quartile (2014 Q4) edition of the magazine review published by MIT Technology.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Today, XRP is among the major digital currencies ranking third only behind the industry-leading BTC and ETH by market capitalization.`,
                subPoints: [],
            },
            {
                topic: `Ripple Network’s Native Currency (XRP)`,
                point: `Usually, blockchain projects, also referred to as decentralized applications or DApps have an associated utility token that provides liquidity on the network. XRP is the Ripple network's native token that is used in carrying out transactions across the network. It is believed to be faster, cheaper and more scalable compared to other cryptocurrencies. This makes XRP the ideal cryptocurrency for payments in the technology space.`,
                subPoints: [],
            },
            {
                topic: `XRP Market History, Market Cap And Price Stat`,
                point: `On August 4th, 2013, XRP hit the market with an initial price of $0.005874, resulting in an initial market cap of $45,921,033 USD. By the end of September, the same year, the coin enjoyed an increase in price and was sold at $0.014141. It went on to experience instability in the market causing it to spend most of the time in the downtrend. However, on December 17th, 2014, XRP gained an increase in value and broke to a new high price of $0.025283 generating a market cap of $780,785,789 US dollar in the process.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The unforgettable breakthrough experienced in the cryptocurrency industry between the last quartile of 2017 and first quartile of 2018 extended to this cryptocurrency. On January 4th 2018, XRP amassed an all-time highest price of $3.84, generating a market cap of $,555,070,000 USD in the process.`,
                subPoints: [],
            },
            // {
            //     topic: ``,
            //     point: `XRP is currently being traded at $XRPcurrentPrice on major exchanges with a market cap of $XRPcurrentMarketCap, 24-hour volume of $XRP24hourVolume and a circulating supply of $XRPcirculatingSupply XRP from the total supply of $XRPtotalSupply XRP.`,
            //     subPoints: [],
            // },
        ],
    },
    {
        id: 7,
        image: LearnImg7cardano,
        title: 'Cardano - The Overview',
        content: [
            {
                topic: ``,
                point: `With the inception of CARDANO comes an untapped implementation of an entirely new programming language in the cryptocurrency industry. While most of the previously existing blockchain projects were developed using common programming languages like C++, CARDANO was written in Haskell.`,
                subPoints: [],
            },
            {
                topic: `External Links`,
                point: ``,
                subPoints: [
                    `Project website: https://www.cardano.org/en/home/`,
                    `Whitepaper: https://www.cardano.org/en/philosophy/`,
                    `Source code: https://github.com/input-output-hk/cardano-sl/`
                ],
            },
            {
                topic: ``,
                point: `CARDANO is a fully open-source project which is made available for the public to jump into. It uses a better concept different from that of Bitcoin with its proof-of-work (POS) mechanism. As well, one of its primary functionalities is to ensure total privacy of the users.`,
                subPoints: [],
            },
            {
                topic: `Brief History Of The Project`,
                point: `One of the reasons why new blockchain projects tend to bring about a better ideology is because most of them are founded by experts who have either co-founded or have worked significantly on previously existing blockchains. Their experiences are put to work and their ability to recognize the weaknesses of the established chains help in bringing better concepts in new projects.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The founder of Cardano, Charles Hoskinson co-founded the Ethereum blockchain and was the ex CEO of the said enterprise. The man put together a team and formed an independent organization Input Output HK (IOHK) who worked with great enthusiasm to create a unique algorithm for the blockchain in 2017.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Today, Cardano is among the top fifteen cryptocurrencies by market capitalization despite still being in its infancy. ADA has a market capitalization of $1,062,441,494 US dollar with a 24-hour market volume of $45,049,535 USD as at the press time.`,
                subPoints: [],
            },
            {
                topic: `How Cardano Works`,
                point: `Cardano has two unique layers that facilitate users’ transactions on the network. These are, the Cardano Settlement Later (CSL) and Cardano Computation Later (CCL). The former acts as a ledger on which users’ token transfer records are kept. The computation layer works around the Smart Contracts as they are created by users on the network.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Transactions fees are calculated based on the transaction sizes in bites and a set of figures. It is usually calculated in this format:`,
                subPoints: [
                    `Transaction size in byte multiplied by the addition of (0.155381 + 0.000043946).`,
                ],
            },
            {
                topic: ``,
                point: `In a situation where a user is processing a transaction of 5 bytes size, the transaction fees would be:`,
                subPoints: [
                    `(0.155381 + 0.000043946) * 5`
                ],
            },
            {
                topic: ``,
                point: `Which results in 0.77712473 ADA.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `ADA Market History, Market Capitalization And Price Stat.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `A 24-hour market volume of $11,867,200 was recorded on October 1st, 2017 as ADA was launched with an initial price of $0.021678. The token’s all-time low was experienced that same day as it dropped a little bit to be sold at of $0.01735. Exactly 60 days later, the token was being sold at $0.128264 with a market cap of $3,325,509,225. The market experienced a huge level of volatility resulting in the price being unpredictable. The major event, however, occurred on January 4th 2018 when ADA got an all-time high of being sold at $3.10 resulting in a market cap of over $95 Billion USD.`,
                subPoints: [],
            },
            // {
            //     topic: ``,
            //     point: `ADA is currently being traded at $ADAcurrentPrice  on major exchanges with a market cap of $ADAcurrentMarketCap USD, 24-hour volume of $ADA24hourVolume USD and a circulating supply of $ADAcirculatingSupply  ADA from the total supply of $ADAtotalSupply  ADA.`,
            //     subPoints: [],
            // },
        ],
    },
    // {
    //     id: 8,
    //     image: LearnImg8solana,
    //     title: 'Solana - The Overview',
    //     content: [
    //         {
    //             topic: ``,
    //             point: `.`,
    //             subPoints: [],
    //         },
    //         {
    //             topic: ``,
    //             point: `.`,
    //             subPoints: [],
    //         },
    //     ],
    // },
    {
        id: 9,
        image: LearnImg9android,
        title: 'Best Android Wallets',
        content: [
            {
                topic: `Best Cryptocurrency Wallets For Android Users`,
                point: `The android OS is the most used mobile operating system today with millions of applications on Android stores. Mobile phone users utilize the andriod OS more than any other OS and that's the reason  we are making recommendations for top wallets they can use to store their tokens.`,
                subPoints: [],
            },
            {
                topic: `Why do we need a wallet?`,
                point: `As a coin HODLer, it is strongly recommended that you move your Bitcoin and/or other cryptocurrencies out of centralised exchanges as soon as you have purchased them. It is expected that you transfer such cryptocurrencies to a wallet that gives you a complete control of your assets. Though there are exchanges that offer high secure wallets, example of which is the Coinbase exchange, however, third party wallets stand to give you more control.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `We have heard of various hacking attacks on exchanges in the past. Top exchanges with massive daily trading volume becomes the target for hackers. Whenever exchanges suffer attacks, the users end up with the larger percentage of losses as cryptocurrencies do not have insurance coverage. This has called for a new way of storing digital assets, with stand-alone third-party wallets, we can safely store our cryptocurrencies, trade, spend and get to move around with our assets.`,
                subPoints: [],
            },
            {
                topic: `What are Android Crypto wallets?`,
                point: `Crypto wallets for Android users are mobile applications that allow you to conveniently store Bitcoin alongside other (supported) cryptocurrencies right on your android devices. These wallets either store your digital assets on your device and make it accessible offline (for cold wallets) or store them online (for hot wallets). See the different types of crytocurrency wallets that we have here.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Android users can now walk around with assets worth millions of dollars safely without the fear of losing them to hacking attacks on exchanges. Although,  there was supposed to be a cause of concern as regards the possibility of the android device getting lost, most Android bitcoin wallets have recovery features which require the users to export their private keys and recovery seeds from their mobile devices.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Without holding anything behind, mobile wallets are not as secure as hardware wallets. In fact, it has been established that they are the least secure option. This is because most of these crypto wallets for android users store the assets online. Online storages in general can be attacked by internet thieves with the contents getting stolen in such occurrences.`,
                subPoints: [],
            },
            {
                topic: `Top 7 Best Cryptocurrency Wallets For Android`,
                point: `.`,
                subPoints: [],
            },
            {
                topic: `Blockchain Wallet`,
                point: `The blockchain wallet to be our favourite Bitcoin wallet for Android and you can feel that from the tone in our critical review of this wallet. The wallet is best known for its efficient security, low fees and intuitive user interface. In addition to Bitcoin, Blockchain wallet supports ETH, BCH, XLM and USD PAX. The wallet allows you to export the wallet seeds and private keys thereby giving you recovery options in case of device loss.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Get the full wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Blockchain Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://www.blockchain.com/wallet)`,
                    `Google Play Store rating: 4.8`,
                    `Supported cryptocurrencies: BTC, ETH, BCH, XLM, USDT, DOT, ALGO, AAVE.`,
                    `PROS: Intuitive user interface, allows web and mobile wallet pairing, low and customizable fees, decentralized exchange, very secure.`,
                    `CONS: It only supports a few coins, it does not support fiat, very burdensome verification processes.`
                ],
            },
            {
                topic: `Trust Wallet`,
                point: `Trust wallet is one of the leading cryptocurrency wallets in general as at the year, 2021. The wallet comes with a very attractive user interface and supports tons of coins and tokens. The wallet was acquired by Binance in July  2018 and has since gone on to be adopted by hundreds of thousands of cryptocurrency traders.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Trust wallet’s supportability for ERC tokens made it an ideal one usually recommended by ICO projects, it offers full transaction information and market statistics for your stored cryptocurrencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Keys and seeds are stored on the device rather than online, also the wallet is known for its intense security measures to protect users’ assets.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Trust Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://trustwallet.com/)`,
                    `Google Play Store rating: 4.5`,
                    `Supported cryptocurrencies: BTC, ETH, EOS, BCH, LTC, all ERC tokens and various others.`,
                    `PROS: Best for airdrops, attention-to-detail user interface, offers market statistics, Very secure.`,
                    `CONS: Slow customer support`
                ],
            },
            {
                topic: `imToken Wallet`,
                point: `imToken wallet is a simple light-weight digital crypto wallet that allows cryptocurrency traders to conveniently store, send and spend their cryptocurrencies using their Android device. imToken wallet supports hundreds of cryptocurrencies including both the popular ones and the newly launched tokens.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full imToken wallet review here.`,
                subPoints: [],
            },
            {
                topic: `imToken Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link`,
                    `Google Play Store rating: 4.5`,
                    `Supported cryptocurrencies: BTC, ETH, EOS, BCH, LTC, all ERC tokens and various others.`,
                    `PROS: Best for airdrops, attention-to-detail user interface, offers market statistics, Very secure.`,
                    `CONS: Slow customer support`,
                ],
            },
            {
                topic: `Coinomi Wallet`,
                point: `Coinomi is a mobile crypto wallet for android devices that offers in-app trading capabilities for the enthusiastic users of cryptocurrency. This wallet is security-focused and offers a friendly interface with a vast number of exceptional features. Its functionalities make it one of the most-recommended wallets by ICO projects.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Cryptocurrency users have the ability to manage all their assets in a single portfolio due to Coinomi’s multi-cryptocurrency support. As well, the app is very easy to use. Coinomi offers too much to be disregarded among the top best Bitcoin wallets of the year, 2021.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full Coinomi wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Coinomi Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link ()`,
                    `Google Play Store rating: 3.8`,
                    `Supported cryptocurrencies: BTC, ETH, BTG, BCH, EOS, LTC, XMR, XRP, ETC, all ERCs, hundreds others`,
                    `PROS: Easy to use interface, multiple cryptocurrency support, cross platform support, very security-focused`,
                    `CONS: Not an open source application`
                ],
            },
            {
                topic: `Atomic Wallet`,
                point: `The atomic wallet is a completely decentralized  wallet for android users that was developed and launched in 2017. The wallet has several key features with one of the leading ones being the Changely, ChangeNow and ShapeShift exchanges incorporation. Apart from giving its users the ability to store multiple cryptocurrencies, Atomic wallet is seamlessly linked to exchanges where users can securely trade cryptocurrencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full Atomic wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Atomic Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://play.google.com/store/apps/details?id=io.atomicwallet&hl=en&gl=US)`,
                    `Google Play Store rating: 4.3`,
                    `Supported cryptocurrencies: BTC, ETH, EOS, BCH, LTC, all ERC tokens and various others.`,
                    `PROS: Supports multiple cryptocurrencies, has in-app decentralized exchange, fast`,
                    `CONS: Various technical issues reported`,
                ],
            },
            {
                topic: `Abra Wallet`,
                point: `Abra is one of the few android wallets that supports both cryptocurrency and fiat currencies interoperability. The wallet comes best on android devices although there is a supported version for iOS users. You can easily store, transfer, spend and trade Bitcoin, Bitcoin Cash, Ethereum, Litecoin and 25 other cryptocurrencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although there is a drawback of complete transparency where anonymity is not an option, the wallet provides an overall pleasant user experience with all security options positively checked.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full Abra wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Abra Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://play.google.com/store/apps/details?id=com.plutus.wallet&hl=en&gl=US)`,
                    `Google Play Store rating: 4.1`,
                    `Supported cryptocurrencies: BTC, TRX, ADA, ETH, EOS, BCH, LTC, all ERC tokens and various others.`,
                    `PROS: Supports multiple cryptocurrencies, supports purchase of cryptocurrencies with fiats, pleasant user interface, open source, very secure`,
                    `CONS: None`
                ],
            },
            {
                topic: `Edge Wallet`,
                point: `Edge wallet is a mobile digital wallet that supports bitcoin and hundreds of other cryptocurrencies. This wallet is our top recommendation for newbie traders as it offers special features for the new comers in the cryptocurrency space. Edge also has a business partnership with Bitcoin, offering cashback as this coin is bought through the app.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `If you are security concerned, Edge is one of the few bitcoin wallets that you can use on your android device. As an open source application, the project is often updated by reputable contributors from different parts of the globe.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Learn more through our full Edge wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Edge Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://play.google.com/store/apps/details?id=co.edgesecure.app&hl=en&gl=US)`,
                    `Google Play Store rating: 4.1`,
                    `Supported cryptocurrencies: Bitcoin and hundreds of other cryptocurrencies`,
                    `PROS: Beginner friendly, attractive cashback on Bitcoin purchases, supports multiple cryptocurrencies, open source`,
                    `CONS: None reported`
                ],
            },
            {
                topic: `Conclusion`,
                point: `Android cryptocurrency wallets provide cryptocurrency enthusiasts with various options to securely store their digital assets. There are more of these wallets for android devices than others due to the population of Android users. Online wallets are often criticized for their security weaknesses and hackers’ abilities to launch attacks.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `To have your coins completely safe from theft, attacks and other factors that can result in you losing them, we recommend that you take on the following precautions:`,
                subPoints: [
                    `Save your private keys outside the wallet applications,`,
                    `Export your recovery seeds to your protected drives,`,
                    `Enable two-factor authentication for wallets that have the functionality.`,
                ],
            },
            {
                topic: ``,
                point: `Cryptocurrency trading has been found to be a very lucrative business venture. However, you can find yourself exposed to too many risks than you are ready to cover. So, we recommend that you use secure wallets always and be as attentive as you can be in handling your digital assets.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 10,
        image: LearnImg10trust,
        title: 'Trust Wallet Review',
        content: [
            {
                topic: `Trust Wallet Critic Review – A Universal Multi-Cryptocurrency Wallet For Android And iOS Devices`,
                point: `Over the last decade, cryptocurrency has become prodigious, thereby becoming an accepted mode of payment both online and offline worldwide. Today, we can acquire almost anything with our digital assets without the need of going through various conversion routes to fiat currencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `In the beginning, cryptocurrency traders had to make do with using exchanges’ wallets. These are coin-custodian wallets that are known to be very luxurious to manage. However, the inception of wallet apps brought about an entirely new atmosphere where users have full control over their assets.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `We have used various cryptocurrency wallets over the years in storing  cryptocurrencies. We have come across  amazing wallets as well as the really bad wallets that resulted in users losing some of their assets. In all, we have learned that wallets are the most important components needed by serious cryptocurrency traders. These applications or pieces of hardware safeguard our assets and ensure that we have complete control over them at all times.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Among the great ones out there is the Trust wallet. Here is a critical review of this mobile wallet application.`,
                subPoints: [],
            },
            {
                topic: `What is Trust Wallet?`,
                point: `Trust wallet is a mobile cryptocurrency wallet that allows you to easily store, send and receive multiple cryptocurrencies outside the exchanges’ territories. Trust wallet supports various cryptocurrency coins starting with the popular ones like BTC, ETH, XRP, EOS to even the unpopular tokens that are published on Ethereum ERC token standards. The primary objective of this wallet is to place us in command of our priced digital assets. In addition, this wallet offers various other functionalities some of which shall be discussed here.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Trust wallet is among our pick for the top 10 best crypto wallets of the year 2022 due to its multiple yet exceptional functionalities. It is very secure, processes transactions at lightning speeds and offers different pricing plans for transactions.`,
                subPoints: [],
            },
            {
                topic: `Functionalities Components of Trust Wallet`,
                point: `Trust wallet offers various functionalities, thanks to the ranges of components that make up the application. One great thing about multi-functional wallets is that they allow you to access various services that are actually offered by different applications as a single unit right within the same ecosystem.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Below are some of the components that bring different functionalities to this amazing wallet.`,
                subPoints: [],
            },
            {
                topic: `A multi-cryptocurrency universal wallet`,
                point: `Imagine how it feels to be able to store all of your cryptocurrency coins and tokens on the same mobile application. Such saves you from having to install multiple wallet apps on your phone, each of which takes your device’s memory and RAM spaces. However, with multiple-currency wallets, all you need is that all-in-one wallet that can take all of your cryptocurrencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Trust wallet supports hundreds of cryptocurrency coins some of which are BTC, ETH, XRP, LTC, TRX, ETC, DASH and all ERC-20 tokens. This is why many airdrop campaigns recommend this wallet as it supports almost all cryptocurrencie.`,
                subPoints: [],
            },
            {
                topic: `In-app DApp browser`,
                point: `Every now and then, new projects with distinct purposes are being launched in the blockchain world. There are thousands of decentralized applications from different sectors, ranging from finance to health to sports and many others. With a decentralized application browser, you can access all these DApps in a single ecosystem. What is more, the Trust wallet DApp browser gives you accessibility that does not require you to exit from the main application. In another word, you get to find new decentralized projects as they are being launched and get updated about the activities around your digital assets right on the same DApp.`,
                subPoints: [],
            },
            {
                topic: `In-app Binance Decentralized Exchange (BDEX)`,
                point: `Many of us are well familiar with the top exchange, Binance. However, not many of us know about its decentralized exchange that comes with the wallet application. Binance DEX, unlike the main exchange, is decentralized, and that makes it a non-custodian of users’ cryptocurrency coins. Decentralized exchanges are very secure and do not involve intermediaries. Traders swap coins among themselves using pairing. The Binance DEX makes Trustwallet a complete entity as users can set up trades without having to transfer their assets to centralized exchanges. This is more convenient, cheaper and saves your cryptocurrencies from being exposed to risks.`,
                subPoints: [],
            },
            {
                topic: `Unrivalled security protocol`,
                point: `Completing the functionalities of the Trust wallet is a designated security protocol that ensures that users’ funds do not go into thin air. Trust wallet is a non-custodian of cryptocurrency, yet it uses an A-grade auditing protocol to safeguard the users’ assets and transaction activities. This eliminates malicious transactions that may result in the loss of digital assets.`,
                subPoints: [],
            },
            {
                topic: `Getting started with Trust wallet`,
                point: `Using Trust wallet does not require any expertise. Just download the wallet from the app store, be it for Android OS or iOS. Then set up the wallet as guided by the on-screen instructions. You can activate the added security entities in biometrics and others to add more protection to your assets against uninvited guests.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Download Trust wallet for Android here and for iOS here.`,
                subPoints: [],
            },
            {
                topic: `PROS/Features of Trust Wallet`,
                point: ``,
                subPoints: [],
            },
            {
                topic: `Best for airdrops`,
                point: `Many of us acquired some fortunes from joining airdrop campaigns. What is more, Ethereum Request for Comment, ERC has become the most used token standard for ICO projects. These projects give out a good amount of tokens to cryptocurrency enthusiasts in return for completing one task or the other. I have come across many airdrops specifically recommending Trust wallet. This wallet seems to be trusted not just by traders but also by project owners. That says a lot about it.`,
                subPoints: [],
            },
            {
                topic: `Simple and intuitive user interface`,
                point: `The user interface is an important factor that determines how users interact with your application. Many developers do not take this as a critical point as they prefer to give their attention to the tech’s complexity instead. Creating complex systems does not bring any benefits especially when it affects the users’ interaction. Trust wallet focuses on attention-to-details, it is very fast and only has the needed functionalities.`,
                subPoints: [],
            },
            {
                topic: `Complete transaction details`,
                point: `This wallet provides a full statistic of your digital assets, displaying the balances and the market activities around these cryptocurrencies in real time. Hence, you are always updated as regards your cryptocurrency portfolio. No matter how we look at it, that cannot be treated as a trivial advantage.`,
                subPoints: [],
            },
            {
                topic: `Security`,
                point: `Trust wallet has a two-factor authentication which includes fingerprint, passcode and PIN. This provides an added level of security for the users. With it, you can feel safe leaving your phones with friends and outsiders most especially, when you lose your phone. In all, this added level of security makes this wallet the ideal one for cryptocurrency enthusiasts.`,
                subPoints: [],
            },
            {
                topic: `Keys storage on device`,
                point: `As a non-custodial wallet, Trust wallet places the complete control of assets to the hands of the users. You can easily store your keys on your device, import and export these keys and seeds anytime you feel like. As well, you can backup your keys and seeds.`,
                subPoints: [],
            },
            {
                topic: `CONS`,
                point: `Trust wallet’s customer care is known to be slow in responding to users’ request. This has become their weakness, although the team is working on bringing a balance as regards this`,
                subPoints: [],
            },
            {
                topic: `Conclusion and Rating`,
                point: `In all, Trust wallet happens to be a very exceptional project that focuses on delivering reliable services to the cryptocurrency traders, investors and enthusiasts in general. With its unrivalled features, this wallet deservedly gets a rating of 4.5/5.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 11,
        image: LearnImg11blockchain,
        title: 'Blockchain Wallet Review',
        content: [
            {
                topic: `Blockchain Wallet Critic Review`,
                point: `Blockchain wallet is the world’s most popular cryptocurrency wallet with tons of credit both in the cryptocurrency space and finance sector in general. This wallet is among our pick for the top 10 best Bitcoin wallets of 2022 courtesy of its various amazing features which include simple fee structure, high level of security, approachable user interface and intuitive functionalities.`,
                subPoints: [],
            },
            {
                topic: `Blockchain wallet overview`,
                point: `Perhaps contributing to the most secure and simplest way to store, send and receive Bitcoin, Ethereum and Bitcoin Cash, Blockchain wallet has established itself as a leading mobile and online wallet with hundreds of thousands of users leveraging on its functionalities across the globe. The wallet is a project created by a Luxemburg-based company, and can be found through the famous web address; blockchain.info.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Blockchain wallet is compatible with Android and iOS mobile phones and as well, can be accessed through the web. It is completely free to download, register and create wallets, however, transactions such as sending of cryptocurrency incur service fees. You can specify your transaction fees too using the “customize fee” option from the settings.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `As at the time of writing this, Blockchain supports BTC, ETH and BCH only. There are reports of the developers aiming to add a few more cryptocurrency coins but that has not happened yet.`,
                subPoints: [],
            },
            {
                topic: `Core Features of Blockchain Wallet`,
                point: `Intuitive user interface: This aids the users in interacting with the application. This has become one of the strengths of Blockchain wallets, attracting a huge number of users who only keeps on increasing in number`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Simple fee structure: Users can send large amounts of tokens with insignificant fees and also have the ability to adjust fees.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Built–in security center: The developers’ team added to the app, a security center that aids the users in protecting their cryptocurrency coins from malicious transactions and theft. You can easily backup your funds and protect them from unauthorized access.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Flexibility: Users have the ability to adjust transaction fees and control other functionalities of the app according to their need. This dynamism is usually found to be very instrumental.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Partnership with top exchanges: The project owners have established great working partnerships with various top exchanges. These work relationships have resulted in various beneficial programs such as airdrops for the users.`,
                subPoints: [],
            },
            {
                topic: `The Blockchain Wallet Security`,
                point: `The Blockchain wallet developers put in a great effort to bring about a masterpiece as regards the security and user interface. The various security options on the app added layers of protection for users’ funds. That takes us to the Security Center page on the settings. Here, we can find the different levels of security that are available for the users. Let us take a look at them below:`,
                subPoints: [],
            },
            {
                topic: `First level security`,
                point: ``,
                subPoints: [],
            },
            {
                topic: `Email verification:`,
                point: `Here, you are required to verify the email address that you used in setting up your wallet. A verification link will be sent to you, just follow it and complete the process. Updates from the developers will be broadcasted to you via the verified email address. As well, you will be notified of the transaction and unusual activities through the email when they are found.`,
                subPoints: [],
            },
            {
                topic: `Keyphrase:`,
                point: `This is a secret set of words that provides you with a way out in the event of losing your private keys. Passwords, once lost, cannot be recovered on a Blockchain wallet. So you want to treat them as critical as they are. However, with your secret key phrase, you can easily recover your lost keys.`,
                subPoints: [],
            },
            {
                topic: `Password hint:`,
                point: `Lastly on this level, there is a password hint. Just as the name implies, the hint has to be somehow related to your password, although, not directly. Hints are meant to help you remember your passwords when you forget them.`,
                subPoints: [],
            },
            {
                topic: `Second level security`,
                point: ``,
                subPoints: [],
            },
            {
                topic: `Two-factor authentication:`,
                point: `This brings an added level of security for your funds. It normally involves the use of biometrics and PIN in addition to the primary level security of the wallet application. As regards the Blockchain wallet, you will create a four-digits PIN which you must remember at all times. The PIN prompt shows immediately as you launch the wallet app. In addition, you can include the fingerprint, that is, of course, if your device has the functionality.`,
                subPoints: [],
            },
            {
                topic: `Link your mobile phone number:`,
                point: `To complete the second level security, you will need to add an active mobile phone number. This gets you notified each time a login attempt is made.`,
                subPoints: [],
            },
            {
                topic: `Third level security`,
                point: `Block Tor requests: In the highest level of security on Blockchain wallet is the component that blocks accesses from Tor network addresses. In case you have no idea on what Tor is, it is a tool used by internet thieves, hackers in getting unwelcomed entrance into people’s accounts online. So the Blockchain wallet has all it takes to protect your assets from malicious activities.`,
                subPoints: [],
            },
            {
                topic: `Pros of Blockchain Wallet`,
                point: ``,
                subPoints: [
                    `Intuitive user interface that is very easy to interact with`,
                    `Easily connecting your mobile wallet with web wallet using QR code scannin`,
                    `Well known for its low fee structure on all transaction`,
                    `You can as well decide your transaction fees using the “customize fee” option`,
                    `Very complicated security measures for the protection of your cryptocurrencies`,
                    `You can easily buy cryptocurrencies directly from the wallet without the need of going through an exchange`,
                ],
            },
            {
                topic: `CONS of Blockchain wallet`,
                point: ``,
                subPoints: [
                    `It only support three cryptocurrencies; BTC, BCH and ETH`,
                    `It does not support purchasing cryptocurrency coins with fiat currencies. To do that, you need to convert through some channels which also attract extra fees`,
                    `The identification process is way too burdensome for every user to be able to comply with`,
                    `Being an online wallet, it is meant to be vulnerable to online breaches from hackers`
                ],
            },
            {
                topic: `Conclusion and Ratings`,
                point: `Blockchain wallet is arguably the best when it comes to mobile digital wallets and holds a spot among the overall top best Bitcoin wallets of 200. Its unique features set it aside, with its simple fee structure being one of the reasons for its popularity. The interface is simple to use and straight to attention. In all, the developers’ team did a wonderful job on this DApp.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Blockchain wallet is rated 4.8/5 in our 2022 wallets review ratings.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 12,
        image: LearnImg12imtoken,
        title: 'imToken Wallet Review',
        content: [
            {
                topic: ``,
                point: `imToken is one of our trusted mobile digital wallets for Bitcoin and other cryptocurrencies. We certify it as a standard wallet for cryptocurrency traders. Here is our critical article on imToken wallet review. Enjoy the read.`,
                subPoints: [],
            },
            {
                topic: `Wallet Overview`,
                point: `imToken is a very secure and easy to use digital wallet that allows you to conveniently store, send and receive Bitcoin and other cryptocurrencies right on your mobile device. The mobile application was developed by ConSen Labs, a reputable company in the tech space as well as one of the earliest pioneers of Bitcoin adoption in the Asian continent. imToken remains their most popular software product. It has since become a certified wallet being used by cryptocurrency traders across the globe.`,
                subPoints: [],
            },
            {
                topic: `Why Using Mobile Wallets?`,
                point: `The continued development in the technological aspect of the blockchain industry has resulted in various hardware and software inventions that aim to aid the enthusiastic users of the blockchain applications. This has led to the creation of various components that give more power to the influence of digital currencies in the economic world. Among these is the Bitcoin wallet, the very component that saves cryptocurrency traders from having to trust exchanges with their priced digital currencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `As explained in this post, there are different types of Bitcoin or other cryptocurrency wallets. Each of them has its weaknesses and strengths and in all honesty, maybe the most secure ones are not that attractive. It has been established that the most secure way to store your Bitcoin or other cryptocurrency is by using hardware and offline wallets. However, there are some mobile software wallets that offer beyond just that. One of these is the imToken wallet.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Mobile wallets come as applications that can be installed on our mobile devices. The first advantage to this is that they do not require any extra gadget to be carried around. We are used to moving around with these mobile phones, so things do not need to be any inconvenient with applications installed on them. What is more, some of these mobile wallets have push notifications that get us real-time updates as regards our cryptocurrency portfolios. In all, the future of cryptocurrency wallets lies in the digital and mobile channel, not some piece of hardware.`,
                subPoints: [],
            },
            {
                topic: `Core Features Of imToken Wallet`,
                point: `imToken wallet has tons of features that make it a complete software device that is needed and enough for cryptocurrency enthusiasts. The key ones are discussed below.`,
                subPoints: [],
            },
            {
                topic: `Multiple cryptocurrencies management in one app`,
                point: `imToken makes it an easy task to manage all your cryptocurrency assets in one ecosystem. That brings a level of convenience that is very magnificent. The imToken wallet supports not just multiple cryptocurrencies but also multiple wallets. With this, you can monitor the activities around your assets in real time without having to be checking different apps.`,
                subPoints: [],
            },
            {
                topic: `Watch the cryptocurrency markets`,
                point: `Another core feature of the imToken wallet is the real-time market updates of your stored cryptocurrencies. The project owners’ team has established a working relationship with top cryptocurrency exchanges. To make the wallet users benefit from this, there is a functionality that uses the wallet crawler bots to get the current rates of cryptocurrencies as being traded in real-time on top exchanges. The price notification feature brings to your attention, every investment opportunity as regards cryptocurrency trading. Since you are notified as coins prices inflate or decrease in value, you can make quick decisions on which coin to buy or sell at a particular point of time.`,
                subPoints: [],
            },
            {
                topic: `Add multiple cryptocurrencies at a click`,
                point: `imToken does not only give you the ability to manage all your assets in a single portfolio but also allows adding as many customized tokens as you want. The feature brings several cryptocurrencies to you with options to add those that are not listed within the app. This aids having a single portfolio for all your priced digital currencies.`,
                subPoints: [],
            },
            {
                topic: `Embed multiple decentralized applications`,
                point: `You can easily use third party decentralized applications and interact with them right from the imToken wallet. This feature allows you to enjoy the services of these standalone DApps as if they were embedded on the imToken wallet app directly. What is more, the push notifications notify you as new blockchain projects launch their DApps, this adds more investment opportunities as you can easily access new developments in the cryptocurrency markets.`,
                subPoints: [],
            },
            {
                topic: `Enhanced security`,
                point: `The developers’ team understands the importance of security in the cryptocurrency space. Malicious transactions cannot be reversed due to the technology behind digital assets; blockchain. To ensure that users’ assets are always protected, imToken wallet uses the service of a renowned internet security firm; Blue. On the whole, the users of this wallet enjoy enhanced security.`,
                subPoints: [],
            },
            {
                topic: `PROS of imToken Wallet`,
                point: `Below are the strengths of this wallet as gotten from various user reviews on the internet.`,
                subPoints: [
                    `imToken remains one of the lightest-weight mobile wallets with vast functionalities that make it the ideal wallet for serious cryptocurrency traders`,
                    `Very intuitive and straight-to-attention user interface`,
                    `imToken is well known for its lightning seed in processing deposits and withdrawals`,
                    `It has been recommended by several ICO projects due to its reliability and ERC token standard support`,
                    `Enhanced security protocol to protect users’ assets`
                ],
            },
            {
                topic: `CONS From The User Reviews`,
                point: ``,
                subPoints: [
                    `Password reset usually involves going through some troubles that can be overwhelming sometimes`,
                    `No support for ERC-223 tokens`,
                    `No support for TRC10 and TRC20 tokens`,
                    `Withdrawals sometimes bring about some unexpected issues`,
                ],
            },
            {
                topic: `Conclusion and rating`,
                point: `imToken is one of the simplest and easiest to use mobile digital wallets out there. Its user-friendly interface makes it very popular in the cryptocurrency space. In addition, it has some other functionality that separates it from the rest. Transaction processing and balance updates are very fast. The wallet is also secure as there has not been a report of cryptocurrency loss due to vulnerabilities of the imToken wallet. In all, this happens to be an exceptional project and the developers’ team deservedly has our backing.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `imToken wallet is rated 4.5/5 in our 2022 mobile digital wallets review.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 13,
        image: LearnImg13atomic,
        title: 'Atomic Wallet Review',
        content: [
            {
                topic: `Atomic Wallet Critic Review`,
                point: `Just as we now have thousands of cryptocurrencies battling the test of time and volatility in the market today, there are as well, hundreds of wallets, each belonging to a different wallet category from which we can choose from in storing our digital assets. Among these wallets, one of the most recent additions is the Atomic wallet. The Atomic wallet deservedly holds a spot in our latest reviews of the top best Bitcoin wallets as well as the Bitcoin wallet for Android users. We have taken our time to review the Atomic wallet in a justifiable way. Whether it turns out to be a good wallet for your cryptocurrencies, will be your choice to make after reading this review.`,
                subPoints: [],
            },
            {
                topic: `The project overview`,
                point: `We can say that the Atomic wallet has since gone to embrace the technological aspect of digital currency trading; storage and transfer courtesy of its robust features. This is a multi-cryptocurrency digital wallet that offers intuitive interfaces for Android, iOS, Windows, Mac and Linux devices, thereby making its dedication for secure cryptocurrency storage known to the industry.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Atomic wallet utilizes the features of BitTorrent technology to establish distributed order book, cross-chain atomic swap as well as non-custodial exchange. This is one of those applications that serious cryptocurrency traders can leverage on. Talking of the Atomic wallet being a multi-cryptocurrency wallet, you can easily store, transfer and swap over 300 cryptocurrency coins and tokens on this exchange. Yet, there is this increased cryptocurrency hacking attacks which make almost every decentralized project; exchanges and wallets the target for online thieves. Can Atomic wallet stand the challenges that come to wallets these days!?`,
                subPoints: [],
            },
            {
                topic: `Atomic Wallet Review: Do we recommend this wallet?`,
                point: `Too many questions, not so many answers. Atomic wallet has many valuable features that would make it the ideal one to go for anytime any day. However, we just cannot have that perfect system. Nonetheless, when choosing a cryptocurrency wallet, we just have to be sure that the weaknesses do not overtake its strengths.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Atomic is among the Bitcoin wallets that are yet to comply with regulatory requirements. That does not in any way affect the overall performance of the wallet. Hence, it is a good wallet for Bitcoin and other cryptocurrencies storage. Check our other recommended Bitcoin wallets here.`,
                subPoints: [],
            },
            {
                topic: `Supported cryptocurrency and fee structure`,
                point: `Atomic wallet supports tons of cryptocurrency projects with over 300 coins and tokens storable and transferable on the wallet. Among these coins and tokens are those established cryptocurrencies like BTC, TRX, ETH, DAO, Dash, LTC, XMR and XRP as well as the unpopular ones like QSH, YUPIE and NEXO.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Talking of the fee structure, the Atomic wallet can be downloaded and set up over a feeless structure. However core transaction services attract fees. The fee structure is then broken down below:`,
                subPoints: [
                    `The use of credit card in purchasing cryptocurrencies attracts an extra 7% of the total transaction amount with the minimum fee being $10`,
                    `rading your currencies with in-wallet traders also attract fee but this time, being varied`,
                    `The use of Atomic wallet’s decentralized exchange (swap DEX) also incurs varying but minimal fees`
                ],
            },
            {
                topic: `Core features of this wallet`,
                point: ``,
                subPoints: [],
            },
            {
                topic: `Security and migration`,
                point: `Users of Atomic wallet enjoy the strong encryption and other security features of this wallet that altogether, guarantees a high level of security. You can export your private keys and recovery seeds as well as the mnemonic phrase. This places you in control of your assets, protects them from being lost and provides means of recovering them in a situation of coins’ theft`,
                subPoints: [],
            },
            {
                topic: `Cross-chain Atomic swaps`,
                point: `Users can conveniently swap among BTC/LTC, BTC/QTUM, LTC/BTC, LTC/QTUM, QTUM/BTC and QTUM/LTC. This swapping service does not attract transaction fees, and it as well does not require the user to trust exchanges with their assets. The transaction is processed using the Atomic Distributed Orderbook Flexible Market (ADOFM) order with real time market rate updates`,
                subPoints: [],
            },
            {
                topic: `Multiple cryptocurrency management`,
                point: `You can store, send and receive over 300 cryptocurrencies with the REC token standard support allowing you to add more custom tokens. This provides a way of managing all your assets in a single portfolio, eliminating the need for multiple wallet apps and providing a better convenience.`,
                subPoints: [],
            },
            {
                topic: `An express channel to exchange`,
                point: `Incorporated within the Atomic wallet are two massive exchanges that you can easily trade your cryptocurrencies on. Usually, to trade your assets when you are using a third party wallet, you need to transfer the assets to the exchange on which you want to trade. Such assets transfer exposes your coins to some risks and as well, incurs transaction fees on the exchange. However, with the established working relation among Atomic wallet, Changely and ShiftShape, you can easily trade your cryptocurrencies without the need of transferring them out of your wallet.`,
                subPoints: [],
            },
            {
                topic: `Setting up your wallet`,
                point: `Atomic wallet works much like other popular wallets available out there. If you have used a couple of them in the past, then you should be able to conveniently set up your app. If you are new to the game, take your time to watch the official tutorial video provided here (https://www.youtube.com/watch?v=7U1dXKQ7gHE). However, before you go, you need to download the Atomic wallet for your Android device here (https://play.google.com/store/apps/details?id=io.atomicwallet&hl=en&gl=US), iOS device here (https://atomicwallet.io/downloads) or desktop computer here (https://atomicwallet.io/downloads).`,
                subPoints: [],
            },
            {
                topic: `PROS of the project`,
                point: ``,
                subPoints: [
                    `High security features courtesy to Coin wallet’s HD algorithms and designated storage for private keys and recovery seeds`,
                    `Users can easily get back their assets in case of device’s failure or theft courtesy of the mnemonic phrase`,
                    `The wallet supports multiple cryptocurrencies, giving users the ability to manage all their assets in a single portfolio`,
                    `In-app decentralized exchange offers users a secure way of trading their cryptocurrencies with other users directly without involving a centralized exchange’s services.`,
                ],
            },
            {
                topic: `Atomic Wallet Review: CONS of the project`,
                point: ``,
                subPoints: [
                    `The in-app exchange, Atomic swaps only supports a few cryptocurrencies`,
                    `Not an open source projec`,
                    `No two-factor authentication security feature`,
                    `The fee structure is not well-defined`,
                ],
            },
            {
                topic: `Conclusion and rating`,
                point: `Atomic wallet has too many beneficial features to be disregarded regardless of its flaws. It is one of the best Bitcoin wallets for Android users as we strongly recommend it ahead of many others. The developers’ team continues to update the code, bringing about added features in each of the new releases. In all, this is an amazing project.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `We therefore rate Atomic wallet 4.3/5.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 14,
        image: LearnImg14bitcoin,
        title: 'Understanding The Bitcoin Blockchain - Full Guide; Bitcoin Block Fields, Blockheaders, Concensus Algorithm & Mining',
        content: [
            {
                topic: ``,
                point: `Here is an ultimate review of Bitcoin blockchain where the core protocol of blockchain, Bitcoin blockchain, Bitcoin history and its community are well explained in a very simple way for the benefit of all. Enjoy the read.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `As an individual that has been engaging with cryptocurrency, Forex, traditional and other means of financial investments online or on other sources for the last few years, you should have come across the words “blockchain” and “Bitcoin”, perhaps time without number. In all honesty, most of us see this mechanism as something that is very much hard to comprehend. Brace yourself buddy, as now is the time to understand that blockchain is pretty much simpler than you had imagined.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Before we go on, we need to let you understand something. Many newbies confuse blockchain with Bitcoin. On the other hand, the two can never be more dissimilar. They are diverse things entirely, although the former is the bedrock on which Bitcoin is created.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `We have published a beginner’s guide on blockchain before now. You might want to take a look at the post before you go on with this since this might be a little bit deeper compared to the previous post.`,
                subPoints: [],
            },
            {
                topic: `What Then Is Blockchain?`,
                point: `In the easiest way to explain it, a blockchain is a connection of multiple blocks that are strung together as a single unit. A blockchain would not exist without the presence of blocks. A block itself has to have a transaction. So, when a transaction occurs, it is first verified, that is, confirmed by some protocols and afterward stored in a block. After the verification process, the block is given a unique identification code otherwise known as hash.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `When all the above processes have been undergone, the block gets added to the chain, hence becoming accessible to the public without the involvement of any central server. That is what blockchain is all about. That is pretty easy to understand, right?`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Like we have hinted above, Bitcoin is entirely a different entity. Since this post focuses on Bitcoin blockchain, then perhaps you get to understand some technical things about blockchain. Whichever way you choose, for a deep read on blockchain in general view (not limited to Bitcoin’s chain), consult this post.`,
                subPoints: [],
            },
            {
                topic: `What Is Bitcoin?`,
                point: `Now you have got a pretty picture of what blockchain is all about and now you might want to learn about the original cryptocurrency that paved the way for all those thousands of altcoins available in the cryptocurrency market.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `In overview, Bitcoin is referred to as the original cryptocurrency that was released as an open-source project in 2009 by the famous but unknown man or group of individuals under the name Satoshi Nakamoto. Bitcoin or BTC is a digital currency that is created and works on cryptographically secure transactions, uses a peer-to-peer mechanism that is based on blockchain and a proof-of-work consensus algorithm to be mined with the help of a strong dedicated computer rig.`,
                subPoints: [],
            },
            {
                topic: `Perhaps we take a look into that in a step-by-step way`,
                point: `Bitcoin brought about a revolutionary means of medium of value storage and exchange with the use of cryptographic protocol instead of the traditional centralized financial systems. It works based on a distributed public ledger and does not involve the involvement of intermediary and there is no centralized server for data storage.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Bitcoin has gone on to create an entirely new business sector in the cryptocurrency industry. Top figures in the business and technology worlds saw the potential in Nakamoto's inception, adopted Bitcoin and brought about new blockchain projects that are backed by new cryptocurrencies. Today, the market is characterized with thousands of decentralized projects and cryptocurrencies, bringing about a new financial system.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Today, one of the most searched questions on the internet is “what is Bitcoin?” With this extensive guide, we plan to provide as much in-depth information as we can. Continue to enjoy the read.`,
                subPoints: [],
            },
            {
                topic: `The History of Bitcoin`,
                point: `A whitepaper with the title “Bitcoin: a peer-to-peer electronic cash system” was released by an individual or a group of individuals under the name Satoshi Nakamoto on October 31st, 2008. The information was sent to a mailing list owned by Cyberpunk under the mentioned name. No one knew where it came from, neither were many ready to give it any serious attention at the time.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `By January, the following year, the Bitcoin mainnet was released with the first ever Bitcoin mining taking place with an embedded text message which reads: “The Times 03/Jan/2009 Chancellor on brink of second bailout for banks”.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Satoshi went into darkness in 2010 after being active in the Bitcoin open-source repo, email threads and forums for a year. Ever since then, no one knows the real identity of who Satoshi Nakamoto is. Although there has been a mixture of claims of some individuals being the famous but unknown Satoshi Nakamoto. Various experienced journalists have also done some serious digging for years as Bitcoin became an ultimate competitor for the traditional banking system and FX market. Nothing out of the ordinary has been found out.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `For more information on the history of Bitcoin, please refer to this post.`,
                subPoints: [],
            },
            {
                topic: `Understanding The Bitcoin Blockchain`,
                point: `Bitcoin is not only the original cryptocurrency but also the only original blockchain. No matter how you look at it, other blockchains were created from the concept invented by Bitcoin.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The Bitcoin blockchain contains multiple cryptography blocks that are linked together in a distributed pattern and hold transactions data. A Bitcoin block can hold up to 3,000 transactions. However, miners need to wait for up to 10 minutes as only one block can be mined within that time frame. Recent forks of Bitcoin solve this problem by upgrading the original Bitcoin protocol with higher hash power, thereby increasing the transaction speed and block production rate.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Blockchain transactions are broadcasted to the blocks available on the Bitcoin network. Well, at the end of this are computer rigs set up by miners to validate transactions and solve the given complicated problems. These miners claim the set reward as they mine blocks. Courtesy of the Markle Tree, transactions are contained and as a binary hash and stored as units. All the blocks are cryptographically linked together and contain the hash of their predecessor blocks, hence, the name blockchain.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Since all the blocks are cryptographically linked, you cannot modify a transaction sent to a particular block. To make any modification, all the blocks in the blockchain will have to get involved. Welcome to the world of decentralization!`,
                subPoints: [],
            },
            {
                topic: `Bitcoin Block Fields`,
                point: `Every block in the Bitcoin blockchain contains five different fields. These are:`,
                subPoints: [
                    `Block size: This denotes the amount of data that a block can hold.`,
                    `Blockheader: This is the Bitcoin header of a single block. It is sized 80 byte. It contains six parts.`,
                    `Magic number: There is a constant value for this field and that is 0xD9B4BEF9.`,
                    `Transaction: This is the term used for the activities carried out by users on the Bitcoin blockchain.`,
                    `Transaction counter: This is referred to as the positive integer of Bitcoin`
                ],
            },
            {
                topic: `The Bitcoin Blockchain’s Blockheaders`,
                point: `As hinted above, a Bitcoin block has a blockheader which has six parts. These parts are briefly explained below.`,
                subPoints: [
                    `Bits: This is the target given for a block as it solves a given problem. It changes based on the difficulty faced during the algebraic problem solving.`,
                    `Blockversion: This determines the version of the blockchain’s block. Each upgrade brings new version of block.`,
                    `Hash Merkle Root: This is based on the hash of all the available transactions on a block. It is 256-bit sized.`,
                    `Hash Prev Block: This is the hash of a previous block that comes before the current one.`,
                    `Nonce: This is a very important component in Bitcoin mining. It is 32-bit sized.`,
                    `Time: This is the stamp used in denoting the time that a transaction takes place.`,
                ],
            },
            {
                topic: `The Bitcoin Consensus Algorithm For Mining`,
                point: `The Proof-of-Work (PoW), also known as Nakamoto PoW is the first ever distributed consensus algorithm. This was proposed as the ideal means of mining digital currency, strong enough to chase away the printing method used for fiat currency by that famous man, Satoshi Nakamoto alongside the release of Bitcoin blockchain core.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `PoW works alongside Byzantine Fault Tolerant (BFT) algorithm in handling the activities of the nodes such as anonymously leaving the network. As new upgrades come with the Bitcoin blockchain with hard forks, the BFT algorithm is also upgraded.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `As explained in the Bitcoin whitepaper:`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The proof-of-work solves the problem of determining representation in majority decision making. If the majority were based on one-IP-address-one-vote, it could be subverted by anyone able to allocate many IPs. Proof-of-work is essentially one-CPU-one-vote. The majority decision is represented by the longest chain, which has the greatest proof-of-work effort invested in it. If a majority of CPU power is controlled by honest nodes, the honest chain will grow the fastest and outpace any competing chains. To modify a past block, an attacker would have to redo the proof-of-work of the block and all blocks after it and then catch up with and surpass the work of the honest nodes.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Read more through the Bitcoin Whitepaper (https://bitcoin.org/bitcoin.pdf)`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The PoW works in a way where miners’ rigs are rewarded based on the level of difficulty they face. In order to utilize this to your maximum advantage, you need to have a very high-configuration computing power. This takes us to Bitcoin mining.`,
                subPoints: [],
            },
            {
                topic: `Bitcoin Mining`,
                point: `The first ever Bitcoin mining was done by the creator of the original cryptocurrency in January 2009. That day, exactly 50 BTC coins were mined. Those 50 Bitcoin worth less than $5 at the time. How much is one BTC today!`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Satoshi brought about a new way of printing monetary value but in a digital format. That asset is not pegged to any physical currency and as that is why its value increases in time,  just like fine wine. With the PoW consensus algorithm introduced to the world by Satoshi, you get to put up your computer for work without you putting in any physical contribution.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `In a nutshell, Bitcoin mining involves setting up a mining rig, installing the Bitcoin blockchain core on your computer system and getting compensated with BTC as your computer resources solve complex algebras. The number of coins you get to mine depends on the strength of your computer rig (hash power) and the level of difficulty encountered in producing blocks.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The key components of Bitcoin mining are:`,
                subPoints: [
                    `SHA-256 hashing algorithm`,
                    `Block difficulty`,
                    `Block reward`,
                ],
            },
            {
                topic: ``,
                point: `Read our extensive ultimate guide on Bitcoin mining to have a clear picture of how it works.`,
                subPoints: [],
            },
            {
                topic: `The Bitcoin Governance`,
                point: `Okay, Bitcoin brought about the world of decentralization where we do not need the interference of a third party in dealing with everything that we engage in. Yet, Satoshi Nakamoto understands the importance of governance and for this reason, he ensured that some people still get to make decisions in the way he planned the Bitcoin protocol.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although today, many blockchain networks have a clearly-defined governance protocol; be it community-driven or whales-driven, which are voted into the seat of decision maker by the whole community. On the Bitcoin network, there is no such thing, as there is a Bitcoin community and decision making is done with the community members categorized into three groups:`,
                subPoints: [],
            },
            {
                topic: `Developers`,
                point: `Although there are intense critics against the growing influence of developers on the protocol decision in the Bitcoin community, Satoshi himself acknowledged the importance of developers by putting up the Bitcoin protocol code on Github for the open source developers across the globe to contribute to it.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Developers are the keepers of the Bitcoin code. They maintain the health of the Bitcoin protocol and make decisions on the necessary upgrades needed on the chain. These developers have significant investment in the protocol and hence, ensure that things are smooth on the network.`,
                subPoints: [],
            },
            {
                topic: `Users`,
                point: `The users are the people that acquired the Bitcoin cryptocurrency for hold or instant trading. This includes investors, enthusiasts and community leaders in the advancement of blockchain technology and Bitcoin blockchain. They have huge influence on the stability of Bitcoin value due to their involvement in market activities.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Today, many enterprises accept Bitcoin as a valid payment option. People get to spend their digital assets as if they were fiats without the need of going through third party channels. All these are made possible not by the tireless developers but the users of this original cryptocurrency.`,
                subPoints: [],
            },
            {
                topic: `Miners`,
                point: `Basically, there are two ways to possess Bitcoin. It is either you buy some coins with your hard-earned money or set up mining rigs to get compensated for providing computer resources for the use of the blockchain. Bitcoin miners are another important part of the community and play a huge role in the well-being of the Bitcoin blockchain and its community.`,
                subPoints: [],
            },
            {
                topic: `The weaknesses of Bitcoin blockchain`,
                point: `Bitcoin blockchain uses a distributed ledger that is made accessible to the public. In its quest to bring about a completely transparent mode of transaction, the public ledger of Bitcoin has been associated with various weaknesses. Think about this: You can trace a Bitcoin transaction details which include the sender, the receiver and the transaction amount. You can literally figure out how much an enterprise that accepts Bitcoin makes through the publicly accessible ledger. This has huge side effects and is one of the leading critics that the original cryptocurrency has faced in years.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `That is not all; Bitcoin is often criticized for its decentralized nature. Today, people use Bitcoin and some other cryptocurrencies in paying for illegal activities on the dark market.`,
                subPoints: [],
            },
            {
                topic: `Departing Thoughts`,
                point: `Bitcoin gave birth to the world of blockchain and alternate cryptocurrencies. Today, the Forex market is in fear of getting smashed by the ever-growing cryptocurrency market. The traditional banking system has been made to look ordinary and the centralized systems are already embarking on the decentralized world. We are in the era of blockchain and cryptocurrency!`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Bitcoin and its blockchain are very wide and require you to read a couple of articles and books if you are very much interested in it.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Learn more about Bitcoin, Bitcoin blockchain and the community through the following books.`,
                subPoints: [
                    `The internet of money by Andreas Antonopoulos.`,
                    `The Bitcoin standard by Saifedean Ammous.`,
                ],
            },
        ],
    },
    {
        id: 15,
        image: LearnImg15ethereum,
        title: 'The Ethereum Blockchain Guide, Decentralized Governance, Smart Contracts & DApps',
        content: [
            {
                topic: ``,
                point: `The inception of Bitcoin paved the way for the emergence of thousands of cryptocurrencies. While Bitcoin is deservedly credited for the evolution of next-generation currencies, it is the Ethereum blockchain that made the creation of cryptocurrency tokens uncomplicated for new decentralized projects, thus giving developers the ability to publish tokenized assets without having to build an entirely independent blockchain of their own.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `This guide assumes that you already have a basic understanding of the Ethereum blockchain. Hence, we may likely use complex terms the noobs in the industry might not be able to easily comprehend. If you are new in the game, this beginner’s guide on Ethereum blockchain and cryptocurrency will help you with the basic knowledge. You can then come back to this.`,
                subPoints: [],
            },
            {
                topic: `Ethereum Blockchain - Bringing Decentralized Governance`,
                point: `Ethereum, dubbed “the world computer” has become the mainstream for applications, bringing about decentralized governance in the technological and financial worlds. This blockchain aims to decentralize the world’s economy, with various enterprises offering distinct and sometimes similar functionalities in a way that does not enslave their users.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `In a more practical perspective, anyone can create a working project that presents to the world, well-defined functionalities. These functionalities or services are accessed with digital currencies rather than the fiats issued by the governments.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Now you might want to ask this: How does decentralization, the leading identity of blockchain work on Ethereum? A simple answer for that – Ethereum is a blockchain network that has its data as well as meaningful information stored, accessed and controlled by thousands of computing identities called “nodes”.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `These nodes are owned by individuals and situated sparsely across the surface of the earth. For every decision made on the network, all the nodes have to agree. There is no such thing as one node being the server (king) for the rest. Instead, it is a peer-to-peer thing here, with all the participating nodes given equal priority. “That is beautiful,” you say? Sure! In fact, it is inexplicably awesome.`,
                subPoints: [],
            },
            {
                topic: `The Ethereum Blockchain – How It Works`,
                point: `The Ethereum blockchain is very similar to the Bitcoin blockchain. Every blockchain has something related to the Bitcoin blockchain anyway. It engineered the whole blockchain technology concept and that is why it is dubbed the only original blockchain and its coin being called the original cryptocurrency.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Now there is something different. Something that although many subsequent blockchains are now implementing, the Ethereum blockchain invented it. You guessed it already? Well, you might be right. Smart contract!`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The Ethereum blockchain makes smart contracts one of its leading use-cases. I think we can call it its main functionality actually. This is because others like DApp deployment, token issuance, etc., still have to depend on smart contracts. We will talk much about that soon. On the Ethereum blockchain, the computing nodes store the most recent state of each smart contract created on it.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `On the other hand, the Bitcoin blockchain only concerns itself with the unspent BTC balances, knowing who has how many BTC. The spent and unspent BTC are treated unequally, with the Bitcoin blockchain balancing the unspent coins. On the Ethereum chain, balances are kept just like they are done with bank accounts. All your transactions, spent and unspent have relationships existing among them, with their activities stored as smart contracts on the chain.`,
                subPoints: [],
            },
            {
                topic: `READ ALSO: A complete guide on Bitcoin blockchain`,
                point: `Now smart contracts are protocols that handle the activities of a contractual negotiation, self-executing the set instructions when the expected circumstances are met. The reason this becomes the main use-case of the Ethereum chain is even to deploy a decentralized application on the network, as you need to create a self-executing code that governs the expected events; what happens when a certain condition is met.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `It is the same with token issuance. The ERC-20 has become the largest cryptocurrency in the market, with hundreds of decentralized projects printing their tokens on its protocol. Governing such tokenization is a smart contract. In all, these things need to be completely computerized and decentralized.`,
                subPoints: [],
            },
            {
                topic: `And what executes these smart contracts is the Ethereum Virtual Machine`,
                point: `As a decentralized network, all the computer nodes store the recent state of smart contracts’ transactions. Now we need to understand that sometimes, some of these nodes need to go offline for a while. That cannot be helped anyway.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `However, when this happens, their tasks must not be affected. To counter any arising problem, all the nodes must agree with the change. At the center of this is the Ethereum Virtual Machine (EVM). It ensures that the nodes do not deviate from the programmed instructions in the smart contracts.`,
                subPoints: [],
            },
            {
                topic: `The Applications Of Ethereum Blockchain`,
                point: `Here, we will be looking at the two leading applications of the Ethereum blockchain, decentralized application (DApp) and smart contract.`,
                subPoints: [],
            },
            {
                topic: `Decentralized Applications On The Ethereum Chain`,
                point: `Perhaps the uniqueness of the Ethereum blockchain is its servicing as the decentralized applications store. Okay, we are all used to using app stores. All operating systems have designated stores from which we can access various mobile and desktop applications. Ideally, those app stores are controlled by centralized systems, get to use our data as they wish without our consent, lack user privacy and in all, do things just as they like. With the Ethereum blockchain, that is no longer the case.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `On the Ethereum DApps store, anyone can publish their self-developed application and connect with the users directly without involving the contribution of a middleman. The Ethereum blockchain has become an advocate for a complete world’s decentralization. Deploying your app on Ethereum does not mean that the blockchain has any control over it. Instead, you still have to create a smart contract that will govern how the DApp works with respect to the users’ activities around it.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Before Ethereum, creating a decentralized application required having a blockchain network. Regardless of the scale of the project, you would still have to create a blockchain for it. Well, you could utilize the open sourced Bitcoin code since most of the subsequent blockchains were created from it at least.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Now we can easily deploy applications especially with various projects giving out free SDKs for decentralized developers to work with. People can enjoy various DApps for free without having to be scared of their data being sold out. We can say that the Ethereum blockchain brought to the world, the most-sought after entity – freedom.`,
                subPoints: [],
            },
            {
                topic: `Smart Contracts On The Ethereum Blockchain – How It Works`,
                point: `Even though this technological advancement was implemented in the 21st century, the idea has been in existence as conceived by a Scientist and cryptographer, Nick Szabo in 1993. His scheme was based on how a user can get an item from a vendor machine by putting up a value corresponding to the item.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Ethereum’s smart contract works differently. For example, you have employees on your payroll. Instead of using a service of another employee, a cashier that will also be incurring salaries or wages, you can set up a computer code, program it to be releasing a certain amount of money to the specified wallet addresses on the last day of the month (or otherwise), put up some Ether to be used in paying these employees and get things to be automatically executed without the involvement of an intermediary.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The Ethereum network found the importance of smart contracts in decentralized applications, forming the foundation of automated operations for companies. Hence, the blockchain was created for this purpose – autonomous activities for enterprises.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Looking at the genesis of smart contracts, it all started with the Bitcoin Blockchain. This chain runs on Satoshi Proof of Work (PoW) consensus algorithm that allows miners to earn Bitcoin through the use of mining software and designated computer rigs. The point here is these miners are paid for their works as regards block production in an autonomous way, with a contractual negotiation protocol handling the tasks in place of human interference. That is how smart contract is meant to be used as invented by Nakamoto in the Bitcoin whitepaper. However, Ethereum took it beyond cryptocurrency  mining.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `READ ALSO: An ultimate guide on Bitcoin mining.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `With its protocol allowing developers to easily deploy decentralized applications, the Ethereum chain gives them total control in creating super autonomous agents that dictate how their applications run. Everything is automated around the smart contract.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `In general, the Ethereum smart contract brought about the followings:`,
                subPoints: [
                    `Easily set up and manage agreement, negotiations and outcome of business dealings`,
                    `Control your asset portfolios, creating agreement on your spent and unspent assets`,
                    `Interact with other contractual agreements, easily setting up deal with other enterprises without consulting legal practitioners (that usually incur extra high fees)`,
                    `By interacting with other contracts, smart contracts are able to use external resources to bring about a perfection that might be hindered by human errors`,
                ],
            },
            {
                topic: ``,
                point: `Smart contracts have become one of the top applications of blockchain technology today. The Ethereum blockchain transformed it from what it used to be, taking it beyond cryptocurrency usage to what enterprises can leverage on as they deal in business negotiations here and there. For this reason, we have seen tons of companies embracing blockchain technology as it has vast benefits that will take their businesses to the next level.`,
                subPoints: [],
            },
            {
                topic: `It does not end here`,
                point: `The Ethereum blockchain is arguably the widest in the decentralized industry with various applications. Its flexibility aids developers in writing codes and situating their DApps on the network. That is not all. The Ethereum cryptocurrency, ETH is a mineable coin that uses a Proof-of-Work algorithm to reward the coin miners. The next chapter of this course takes us right to Ethereum Mining and How It Works. Definitely you do not want to miss out on this.`,
                subPoints: [],
            },
        ],
    },
];