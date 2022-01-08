import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import New from './new/new'
import Style from './news.module.css'

export default function News () {

    const newss = [
        {
            "news_url": "https://coingape.com/breaking-chinas-largest-messaging-and-payment-app-wechat-to-integrate-digital-yuan/",
            "image_url": "https://crypto.snapi.dev/images/v1/s/e/digital-yuan-cbdc-jdcom-96009.jpeg",
            "title": "Breaking: China's largest messaging and payment app WeChat to integrate Digital Yuan",
            "text": "WeChat, China's largest social messaging and payment app that boasts of over a billion users is all set to integrate the digital yuan payment option on its platform. In China, there is a common trend of one app offering multiple features and WeChat is definitely one of them which acts as a messaging app like The post Breaking: China's largest messaging and payment app WeChat to integrate Digital Yuan appeared first on CoinGape.",
            "source_name": "Coingape",
            "date": "Thu, 06 Jan 2022 07:28:37 -0500",
            "topics": [
                "digital yuan"
            ],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://ambcrypto.com/in-thailand-those-trading-crypto-will-be-subject-to-15-capital-gains-tax/",
            "image_url": "https://crypto.snapi.dev/images/v1/e/v/evan-krause-xakcm1tbuhy-unsplash-95999.jpg",
            "title": "In Thailand, those trading crypto will be subject to 15% capital gains tax",
            "text": "In Thailand, cryptocurrencies have enjoyed a significant amount of sunlight from the locals. In fact, an estimated 100,000 Thai citizens are employed in the crypto mining sector.",
            "source_name": "AMBCrypto",
            "date": "Thu, 06 Jan 2022 06:30:08 -0500",
            "topics": [
                "taxes"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://u.today/15-capital-gains-tax-to-be-paid-by-crypto-traders-in-thailand-details",
            "image_url": "https://crypto.snapi.dev/images/v1/1/1/11818-95998.jpg",
            "title": "15% Capital Gains Tax to Be Paid by Crypto Traders in Thailand: Details",
            "text": "All crypto market participants in Thailand who profit from crypto trading are now subject to a 15% tax",
            "source_name": "UToday",
            "date": "Thu, 06 Jan 2022 05:56:00 -0500",
            "topics": [
                "taxes"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.coindesk.com/policy/2022/01/06/thailands-crypto-traders-to-be-subject-to-15-capital-gains-tax-report/",
            "image_url": "https://crypto.snapi.dev/images/v1/2/3/23j3jamxijbe3p7ejjanlqokdy-95997.jpg",
            "title": "Thailand's Crypto Traders to Be Subject to 15% Capital Gains Tax: Report",
            "text": "The report quotes a person in the Finance Ministry who also said cryptocurrency traders should prepare for increased surveillance.",
            "source_name": "Coindesk",
            "date": "Thu, 06 Jan 2022 05:33:00 -0500",
            "topics": [
                "taxes"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://cointelegraph.com/news/crypto-trades-in-thailand-now-reportedly-subject-to-15-capital-gains-tax",
            "image_url": "https://crypto.snapi.dev/images/v1/8/4/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmdevody2ndy1odktngrjos00nzk4ltk0mmetodjhodyxzjczm2jklmpwzw-95995.jpg",
            "title": "Crypto trades in Thailand now reportedly subject to 15% capital gains tax",
            "text": "While Thai crypto investors and miners are required to pay the tax in 2022, exchanges are reportedly exempt from the new duty.",
            "source_name": "Cointelegraph",
            "date": "Thu, 06 Jan 2022 05:15:47 -0500",
            "topics": [
                "taxes"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.youtube.com/watch?v=fT6_D1QOdSk",
            "image_url": "https://crypto.snapi.dev/images/v1/6/3/florida-business-owner-creates-crypto-themed-restaurant-95968.jpg",
            "title": "Florida business owner creates crypto-themed restaurant",
            "text": "Crypto Street Restaurant owner Ricardo Varona says people can pay at the restaurant using cryptocurrencies, including Bitcoin and Dogecoin. Subscribe to Fox Business!",
            "source_name": "Fox Business",
            "date": "Thu, 06 Jan 2022 05:00:17 -0500",
            "topics": [],
            "sentiment": "Neutral",
            "type": "Video"
        },
        {
            "news_url": "https://www.reuters.com/markets/us/cryptocurrency-crime-2021-hits-all-time-high-value-chainalysis-2022-01-06/",
            "image_url": "https://crypto.snapi.dev/images/v1/g/u/wxif3o4fuvnw7cdmgsezxsbtoe-95947.jpg",
            "title": "Cryptocurrency crime in 2021 hits all-time high in value -Chainalysis",
            "text": "Cryptocurrency-linked crime surged to a record high last year in terms of value, with illegal addresses receiving $14 billion in digital currencies, up 79% from $7.8 billion in 2020, according to a blog from blockchain analysis firm Chainalysis released on Thursday.",
            "source_name": "Reuters",
            "date": "Thu, 06 Jan 2022 04:00:00 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://coinmarketcap.com/alexandria/article/airbnb-users-want-support-for-crypto-payments-in-2022",
            "image_url": "https://crypto.snapi.dev/images/v1/y/2/crypto4-95012-95931.jpg",
            "title": "Airbnb Users Want Support for Crypto Payments in 2022",
            "text": "Unfortunately, there are no guarantees that this high demand will translate into action.",
            "source_name": "CoinMarketCap",
            "date": "Thu, 06 Jan 2022 02:50:15 -0500",
            "topics": [],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://beincrypto.com/thailand-hits-crypto-traders-with-capital-gains-tax/",
            "image_url": "https://crypto.snapi.dev/images/v1/b/i/bic-artwork-taxes-95996.jpg",
            "title": "Thailand Hits Crypto Traders With Capital Gains Tax",
            "text": "Thailand is increasingly intensifying its regulatory stance on crypto and the latest move is a capital gains tax levied on crypto traders in the Kingdom. The post Thailand Hits Crypto Traders With Capital Gains Tax appeared first on BeInCrypto.",
            "source_name": "BeInCrypto",
            "date": "Thu, 06 Jan 2022 01:22:51 -0500",
            "topics": [
                "taxes"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://cointelegraph.com/news/raoul-pal-says-reasonable-chance-crypto-market-cap-could-100x-by-2030",
            "image_url": "https://crypto.snapi.dev/images/v1/6/r/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmdevymjmmjk0mjatnwm4ys00mzq0lwi4zdktogmyytvjmmq2ythmlmpwzw-95903.jpg",
            "title": "Raoul Pal says 'reasonable chance' crypto market cap could 100X by 2030",
            "text": "“I think there's a reasonable chance of this being a $250 trillion asset class, which is 100x from here,” said Raoul Pal.",
            "source_name": "Cointelegraph",
            "date": "Wed, 05 Jan 2022 23:28:06 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://cointelegraph.com/news/why-kevin-o-leary-thinks-nfts-could-become-bigger-than-bitcoin",
            "image_url": "https://crypto.snapi.dev/images/v1/x/4/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmdevytliytvhnzktmgy0my00nmu0lwfimzatndjkmtjkogi1y2e0lmpwzw-95899.jpg",
            "title": "Why Kevin O'Leary thinks NFTs could become bigger than Bitcoin",
            "text": "Despite betting that NFTs will surpass Bitcoin, Kevin O'Leary said he will hedge his bets and invest on “both sides” of the equation.",
            "source_name": "Cointelegraph",
            "date": "Wed, 05 Jan 2022 22:38:52 -0500",
            "topics": [
                "NFT"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.cryptoglobe.com/latest/2022/01/airbnb-could-be-launching-support-for-crypto-payments-later-this-year/",
            "image_url": "https://crypto.snapi.dev/images/v1/m/y/airbnb-3399753-1280-95884.jpg",
            "title": "Airbnb Could Be Launching Support for Crypto Payments Later This Year",
            "text": "Brian Chesky, co-founder and CEO of popular vacation rental platform Airbnb, has asked his Twitter followers to share new ideas for new services the company could roll out this year, and after receiving over 4,000 suggestions found cryptocurrency payments were a top demand. Chesky shared the results on Twitter, noting that the cryptocurrency payments suggestion […]",
            "source_name": "CryptoGlobe",
            "date": "Wed, 05 Jan 2022 20:20:00 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://beincrypto.com/crypto-investment-inflows-increased-36-in-2021/",
            "image_url": "https://crypto.snapi.dev/images/v1/b/i/bitcoin3-95885.jpg",
            "title": "Crypto Investment Inflows Increased 36% in 2021",
            "text": "Totaling at $9.3 billion, inflows into digital asset investment products increased 36% in 2021 compared to the year prior. The post Crypto Investment Inflows Increased 36% in 2021 appeared first on BeInCrypto.",
            "source_name": "BeInCrypto",
            "date": "Wed, 05 Jan 2022 20:00:00 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://cryptonews.com/news/peru-uruguay-edge-closer-crypto-regulation-with-draft-law-policy-advisory-report.htm",
            "image_url": "https://crypto.snapi.dev/images/v1/w/e/webp-net-resizeimage-95880.jpg",
            "title": "Peru, Uruguay Edge Closer to Crypto Regulation with Draft Law, Policy Advisory Report",
            "text": "Governments in South America are gearing up to regulate crypto in the year ahead – with lawmakers in Peru and Uruguay readying legislation and draft proposals.",
            "source_name": "Cryptonews",
            "date": "Wed, 05 Jan 2022 19:00:00 -0500",
            "topics": [
                "regulations"
            ],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://www.cryptoninjas.net/2022/01/06/baanx-receives-fca-uk-approval-to-undertake-full-crypto-asset-activities/",
            "image_url": "https://crypto.snapi.dev/images/v1/d/e/de2ed-95865.",
            "title": "Baanx receives FCA-UK approval to undertake full crypto asset activities",
            "text": "Baanx, a cryptocurrency platform technology provider, has now announced it has received full cryptoassets registration approval from the UK's FCA. The company is now one of the first UK-based companies to receive approval from the UK Financial Conduct Authority (FCA) as registered as a crypto asset business under the Money Laundering, Terrorist Financing, and Transfer […] The post Baanx receives FCA-UK approval to undertake full crypto asset activities appeared first on CryptoNinjas.",
            "source_name": "CryptoNinjas",
            "date": "Wed, 05 Jan 2022 18:01:15 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://beincrypto.com/cryptowire-launches-first-indian-crypto-index-fund/",
            "image_url": "https://crypto.snapi.dev/images/v1/i/n/index-fund-95867.jpg",
            "title": "Cryptowire Launches First Indian Crypto Index Fund",
            "text": "Cryptowire launches India's first cryptocurrency index at a time when regulations are being discussed in Parliament. The post Cryptowire Launches First Indian Crypto Index Fund appeared first on BeInCrypto.",
            "source_name": "BeInCrypto",
            "date": "Wed, 05 Jan 2022 18:00:00 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.newsbtc.com/news/based-on-a-twitter-poll-airbnb-users-may-get-crypto-payment-this-year/",
            "image_url": "https://crypto.snapi.dev/images/v1/q/u/quantitatives-io-5ff-7xjlbzs-unsplash-120x86-95864.jpg",
            "title": "Based On A Twitter Poll, Airbnb Users May Get Crypto Payment This Year",
            "text": "Brian Chesky, CEO of Airbnb has hinted that the popular travel home-booking company may soon accept crypto payments based on a recent Twitter poll. Chesky Says Users Want Crypto A growing number of businesses are making crypto payment available to their customers.",
            "source_name": "NewsBTC",
            "date": "Wed, 05 Jan 2022 17:44:12 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.forbes.com/sites/jeffkauflin/2022/01/05/the-10-fastest-growing-cryptocurrency-ecosystems-in-2021/",
            "image_url": "https://crypto.snapi.dev/images/v1/i/o/the-10-fastest-growing-cryptocurrency-ecosystems-in-2021-95851.jpg",
            "title": "The 10 Fastest-Growing Cryptocurrency Ecosystems In 2021",
            "text": "As the crytpocurrency industry grows more fragmented, new data shows which platforms software developers are flocking to.",
            "source_name": "Forbes",
            "date": "Wed, 05 Jan 2022 17:25:52 -0500",
            "topics": [],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://www.cryptopolitan.com/norton-360-offers-crypto-mining-services/",
            "image_url": "https://crypto.snapi.dev/images/v1/p/e/pexels-hasan-albari-1229861-95863.jpg",
            "title": "Norton 360 offers crypto-mining extension services",
            "text": "TL;DR Breakdown • The Norton 360 extension is installed automatically on your computer.• Antivirus users believe that the crypto project is badly executed.",
            "source_name": "Cryptopolitan",
            "date": "Wed, 05 Jan 2022 16:58:00 -0500",
            "topics": [
                "mining"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://bitcoinmagazine.com/business/moneygram-invests-in-bitcoin-kiosk-operator-coinme",
            "image_url": "https://crypto.snapi.dev/images/v1/c/i/new-jerseys-first-bitcoin-atm-installed-in-jersey-city-95836.jpg",
            "title": "MoneyGram Invests In Bitcoin Kiosk Operator Coinme",
            "text": "The remittances giant acquired a 4% stake in Coinme to support the bitcoin exchange's growth plans.",
            "source_name": "Bitcoin Magazine",
            "date": "Wed, 05 Jan 2022 16:41:36 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.theblockcrypto.com/linked/129340/moneygram-buys-minority-stake-in-crypto-company-coinme",
            "image_url": "https://crypto.snapi.dev/images/v1/2/0/20200707-investment-daily-800x450-95844.jpg",
            "title": "MoneyGram buys minority stake in crypto company Coinme",
            "text": "MoneyGram, the publicly traded money transfer company, has completed a strategic minority investment in Coinme, a cryptocurrency cash exchange in the US, the company announced today. The post MoneyGram buys minority stake in crypto company Coinme appeared first on The Block.",
            "source_name": "The Block",
            "date": "Wed, 05 Jan 2022 15:59:44 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://u.today/world-cup-hero-mario-gotze-joins-cryptocurrency-community",
            "image_url": "https://crypto.snapi.dev/images/v1/e/e/800px-mario-gc3b6tze2c-germany-national-football-team-280829-95813.jpg",
            "title": "World Cup Hero Mario Gotze Joins Cryptocurrency Community",
            "text": "Mario Gotze is now part of the cryptocurrency space",
            "source_name": "UToday",
            "date": "Wed, 05 Jan 2022 15:26:00 -0500",
            "topics": [],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://coinpedia.org/news/sol-avax-to-grow-defi-to-accept-regulation-in-2022/",
            "image_url": "https://crypto.snapi.dev/images/v1/d/e/decentralized-finace-substitutejpgfit10242c600ssl1-93677-95810.jpg",
            "title": "Crypto Predictions for 2022 – Here's What Traders and Investors Can Expect!",
            "text": "The crypto market continues to move sideways with Bitcoin price trading at $46K. With Major altcoins following the Same path as BTC, while ETH Price fares at $3.7K. Bears still hold control in the slow drag down of the market as of yet. A key executive of Coinbase, a US-based crypto exchange, has revealed his …",
            "source_name": "CoinPedia",
            "date": "Wed, 05 Jan 2022 15:16:00 -0500",
            "topics": [],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://cointelegraph.com/news/year-of-sponsorships-celebrities-who-embraced-crypto-in-2021",
            "image_url": "https://crypto.snapi.dev/images/v1/8/4/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjetmtivyznln2y4ntetndi4ys00ztqxltgyzgmtnzk3nze4ogqymdk1lmpwzw-95809.jpg",
            "title": "Year of sponsorships: Celebrities who embraced crypto in 2021",
            "text": "From Matt Damon appearing in a TV spot for Crypto.com to Kim Kardashian shilling EthereumMax, 2021 saw celebrities with higher profiles getting into crypto.",
            "source_name": "Cointelegraph",
            "date": "Wed, 05 Jan 2022 15:00:00 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://beincrypto.com/kosovo-bans-crypto-mining-amid-energy-crisis/",
            "image_url": "https://crypto.snapi.dev/images/v1/k/o/kosovo-btc-mining-95808.jpg",
            "title": "Kosovo Bans Crypto Mining Amid Energy Crisis",
            "text": "Kosovo has banned cryptocurrency mining in order to curb electricity consumption amidst the country's worst energy crisis in a decade. The post Kosovo Bans Crypto Mining Amid Energy Crisis appeared first on BeInCrypto.",
            "source_name": "BeInCrypto",
            "date": "Wed, 05 Jan 2022 14:22:22 -0500",
            "topics": [
                "mining"
            ],
            "sentiment": "Negative",
            "type": "Article"
        },
        {
            "news_url": "https://invezz.com/news/2022/01/05/china-rolls-out-digital-yuan-wallet-to-foster-further-e-cny-adoption/",
            "image_url": "https://crypto.snapi.dev/images/v1/b/s/china-central-bank-march-30-95784.jpg",
            "title": "China rolls out digital yuan wallet to foster further e-CNY adoption",
            "text": "China is actively pursuing its plans to launch a central bank digital currency (CBDC), with the latest development being the launch of a digital yuan wallet. A report unveiled this news on January 4, noting that the People's Bank of China (PBoC) rolled out the beta version of the wallet to expand the usage of […] The post China rolls out digital yuan wallet to foster further e-CNY adoption appeared first on Invezz.",
            "source_name": "Invezz",
            "date": "Wed, 05 Jan 2022 13:50:46 -0500",
            "topics": [
                "digital yuan"
            ],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://www.theblockcrypto.com/news+/129090/key-crypto-hires-exits-and-moves-december-2021",
            "image_url": "https://crypto.snapi.dev/images/v1/2/0/20220103-hiring-jan-800x450-95786.jpg",
            "title": "Key crypto hires, exits and moves: December 2021",
            "text": "Quick Take December closed off a big year for crypto hiring, with many crypto firms closing at double their size. Last month saw a range of big hires and a number of notable exits from companies focused on specific blockchains, like Tron and NEAR.",
            "source_name": "The Block",
            "date": "Wed, 05 Jan 2022 13:49:45 -0500",
            "topics": [
                "paywall"
            ],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://news.bitcoin.com/airbnb-crypto-payments-ceo-revolution-happening-crypto/",
            "image_url": "https://crypto.snapi.dev/images/v1/i/m/airbnb1-95774.jpg",
            "title": "Airbnb Explores Crypto Payments — CEO Sees ‘a Revolution Happening in Crypto'",
            "text": "Popular travel website Airbnb could soon accept cryptocurrencies for payments, CEO Brian Chesky has hinted. “Like the revolution in travel, there is clearly a revolution happening in crypto,” he added. Airbnb's CEO Says ‘There Is Clearly a Revolution Happening in Crypto' The CEO of Airbnb, Brian Chesky, asked on Twitter earlier this week, “If Airbnb […]",
            "source_name": "Bitcoin",
            "date": "Wed, 05 Jan 2022 13:30:02 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.newsbtc.com/news/company/how-nfts-are-fueling-the-anime-community-in-japan/",
            "image_url": "https://crypto.snapi.dev/images/v1/t/e/tezos-jjjsppzzpku-unsplash-120x86-95785.jpg",
            "title": "How NFTs are Fueling the Anime Community in Japan",
            "text": "As a new year is finally upon us, it is incredible to see where technology has taken things over the past 12 months. NFTs (aka non-fungible tokens) have disrupted both the investing and art world, making headlines in 2021 for their groundbreaking utility for both creators and investors alike, and they don't show any signs of slowing down in 2022.",
            "source_name": "NewsBTC",
            "date": "Wed, 05 Jan 2022 13:16:08 -0500",
            "topics": [
                "NFT"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.reuters.com/markets/currencies/cryptocurrencies-see-outflows-final-week-2021-coinshares-data-2022-01-05/",
            "image_url": "https://crypto.snapi.dev/images/v1/1/a/3w3wspq3c5kvrawji2yiqpe72y-95768.jpg",
            "title": "Cryptocurrencies see outflows in final week of 2021 - CoinShares data",
            "text": "The final week of 2021 saw a third straight week of investment outflows from cryptocurrency funds, even as it capped a year of strong inflows into digital asset investment products, data from digital currency manager CoinShares showed.",
            "source_name": "Reuters",
            "date": "Wed, 05 Jan 2022 13:09:44 -0500",
            "topics": [],
            "sentiment": "Negative",
            "type": "Article"
        },
        {
            "news_url": "https://www.coindesk.com/business/2022/01/05/moneygram-takes-4-stake-in-coinme-building-on-existing-partnership/",
            "image_url": "https://crypto.snapi.dev/images/v1/f/f/ff7kjdv4gnbr5dncmjzcumbaey-95767.jpg",
            "title": "MoneyGram Takes 4% Stake in Coinme, Building on Existing Partnership",
            "text": "MoneyGram's strategic investment will help the crypto cash exchange company to expand globally and in other areas.",
            "source_name": "Coindesk",
            "date": "Wed, 05 Jan 2022 12:38:00 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.cryptopolitan.com/kosovo-applies-an-anti-crypto-mining-law/",
            "image_url": "https://crypto.snapi.dev/images/v1/p/e/pexels-olya-kobruseva-8358047-95806.jpg",
            "title": "Kosovo applies anti-crypto-mining law to avoid electricity crisis",
            "text": "TL;DR Breakdown • The European country suffers frequently from electrical failures caused by crypto mining.• Kosovo and Iran appear to be the least desirable destinations for crypto mining farms.",
            "source_name": "Cryptopolitan",
            "date": "Wed, 05 Jan 2022 12:18:00 -0500",
            "topics": [
                "mining"
            ],
            "sentiment": "Negative",
            "type": "Article"
        },
        {
            "news_url": "https://www.dcforecasts.com/regulation/the-british-parliament-demands-government-crackdown-on-crypto/",
            "image_url": "https://crypto.snapi.dev/images/v1/b/r/brexit-referendum-uk-1468255044bix-1-95765.jpg",
            "title": "The British Parliament Demands Government Crackdown On Crypto",
            "text": "The British parliament demands a stronger government crackdown on the crypto industry according to the latest reports that we have in our crypto news. The members of the British Parliament and campaigners are lobbying in the UK for the government to impose a stricter stance on the crypto industry, as one MP Richard Holden noted: […]",
            "source_name": "DCForecasts",
            "date": "Wed, 05 Jan 2022 12:16:40 -0500",
            "topics": [],
            "sentiment": "Negative",
            "type": "Article"
        },
        {
            "news_url": "https://cryptoslate.com/almost-10-billion-was-poured-into-crypto-funds-by-institutional-investors-in-2021/",
            "image_url": "https://crypto.snapi.dev/images/v1/i/n/institution-crypto-investment-95763.jpg",
            "title": "Almost $10 billion was poured into crypto funds by institutional investors in 2021",
            "text": "There is no doubt that 2021 was a great year for the crypto industry as the space witnessed a level of interest never seen before in its entire history. The post Almost $10 billion was poured into crypto funds by institutional investors in 2021 appeared first on CryptoSlate.",
            "source_name": "CryptoSlate",
            "date": "Wed, 05 Jan 2022 12:16:14 -0500",
            "topics": [
                "institutions"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://cryptopotato.com/shark-tanks-kevin-oleary-nfts-could-become-bigger-than-bitcoin/",
            "image_url": "https://crypto.snapi.dev/images/v1/o/n/kevinoleary2-95744.jpg",
            "title": "Shark Tank's Kevin O'Leary: NFTs Could Become Bigger Than Bitcoin",
            "text": "Apart from being a keen advocate of cryptocurrencies like bitcoin, Kevin O'Leary is also a proponent of non-fungible tokens.",
            "source_name": "CryptoPotato",
            "date": "Wed, 05 Jan 2022 12:05:32 -0500",
            "topics": [
                "NFT"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://www.coindesk.com/tech/2022/01/05/whats-the-healthiest-chart-in-crypto-the-developer-count/",
            "image_url": "https://crypto.snapi.dev/images/v1/e/c/ec6wiphorvfnzd5m5g6344m3fm-95764.jpeg",
            "title": "What's the Healthiest Chart in Crypto? The Developer Count",
            "text": "An annual report from venture firm Electric Capital says the total number of new developers jumping on the blockchain bandwagon in 2021 broke previous highs.",
            "source_name": "Coindesk",
            "date": "Wed, 05 Jan 2022 12:02:00 -0500",
            "topics": [],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://www.cryptopolitan.com/bitcoin-ethereum-internet-computer-shiba-inu-daily-price-analyses-5-january-morning-prediction/",
            "image_url": "https://crypto.snapi.dev/images/v1/g/x/crypto-roundup-bitcoin-95738.png",
            "title": "Bitcoin, Ethereum, Internet Computer, Shiba Inu Daily Price Analyses – 5 January Morning Prediction",
            "text": "TL;DR Breakdown Bitcoin fails to cross $47,000, hovers around the $46,000 mark. Ethereum stays stagnant at around $3,800 but looks set to rally.",
            "source_name": "Cryptopolitan",
            "date": "Wed, 05 Jan 2022 11:50:36 -0500",
            "topics": [],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://www.dcforecasts.com/altcoin-news/the-crypto-industry-could-surge-in-2022-due-to-regulations/",
            "image_url": "https://crypto.snapi.dev/images/v1/u/z/altcoins-which-to-buy-1000x600-1-95726.jpg",
            "title": "The Crypto Industry Could Surge In 2022 Due To Regulations",
            "text": "The crypto industry could surge in 2022 due to the regulations of the sector but also the regulation of stablecoins so let's read more in today's crypto latest news. One of the biggest concerns about the US and international regulators was, of course, the crypto industry.",
            "source_name": "DCForecasts",
            "date": "Wed, 05 Jan 2022 11:40:59 -0500",
            "topics": [
                "regulations"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://markets.businessinsider.com/news/currencies/best-selling-nft-collections-last-week-crypto-bayc-doodles-sandbox-2022-1",
            "image_url": "https://crypto.snapi.dev/images/v1/6/1/61d5bb2357bd6c001858a135formatjpeg-95735.jpg",
            "title": "NFT sales hit $512 million over the past week. These were the 5 best-selling digital collections.",
            "text": "Total NFT sales volume hit more than $14 billion in 2021 as artists, investors, and entrepreneurs descend upon the nascent Web3 space.",
            "source_name": "Business Insider",
            "date": "Wed, 05 Jan 2022 11:31:00 -0500",
            "topics": [
                "NFT"
            ],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://cryptonews.com/news/aaves-permissioned-defi-arc-polymarket-stays-p2e-drones-metaverse-more-news.htm",
            "image_url": "https://crypto.snapi.dev/images/v1/a/d/adobestock-408134178-95736.jpg",
            "title": "Aave's Permissioned DeFi Arc, Polymarket Stays, P2E Drones in Metaverse + More News",
            "text": "Get your daily, bite-sized digest of cryptoasset and blockchain-related news – investigating the stories flying under the radar of today's crypto news.",
            "source_name": "Cryptonews",
            "date": "Wed, 05 Jan 2022 11:25:00 -0500",
            "topics": [],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://www.theblockcrypto.com/post/129290/london-travel-network-cracks-down-on-crypto-ads-amid-regulation-blitz",
            "image_url": "https://crypto.snapi.dev/images/v1/l/o/london-streets-filter-800x450-95733.jpg",
            "title": "London travel network cracks down on crypto ads amid regulation blitz",
            "text": "TfL has been monitoring crypto advertising since 2018, but only recently decided to take a harder line on approvals. The post London travel network cracks down on crypto ads amid regulation blitz appeared first on The Block.",
            "source_name": "The Block",
            "date": "Wed, 05 Jan 2022 11:23:47 -0500",
            "topics": [
                "regulations"
            ],
            "sentiment": "Negative",
            "type": "Article"
        },
        {
            "news_url": "https://cryptoslate.com/airbnb-ceo-hints-heavily-at-adding-crypto-as-a-payment-option/",
            "image_url": "https://crypto.snapi.dev/images/v1/a/i/airbnb-crypto-95732.jpg",
            "title": "Airbnb CEO hints heavily at adding crypto as a payment option",
            "text": "Online vacation rental marketplace Airbnb may soon be adding crypto as a payment option. The post Airbnb CEO hints heavily at adding crypto as a payment option appeared first on CryptoSlate.",
            "source_name": "CryptoSlate",
            "date": "Wed, 05 Jan 2022 11:00:22 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://markets.businessinsider.com/news/currencies/airbnb-cryptcurrency-payment-top-request-twitter-chesky-abnb-crypto-2022-1",
            "image_url": "https://crypto.snapi.dev/images/v1/l/w/61d5ac6957bd6c0018589d47formatjpeg-95703.jpg",
            "title": "The CEO of Airbnb says crypto payments is a top request for users in 2022 based on a Twitter survey",
            "text": "\"We are looking into this,\" CEO Brian Chesky said. Currently, Airbnb accepts Visa, MasterCard, Apple Pay, Google Pay, and PayPal as payment methods.",
            "source_name": "Business Insider",
            "date": "Wed, 05 Jan 2022 10:53:00 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://blockonomi.com/estonian-government-plans-to-legalize-cryptocurrency/",
            "image_url": "https://crypto.snapi.dev/images/v1/0/v/crypto-1024x682-95702.jpg",
            "title": "Estonian Government Plans To Legalize Cryptocurrency",
            "text": "Cryptocurrency had a thrilling year in 2021, particularly with Ethereum and other altcoins. Now it looks like Estonia will be adding cryptos to its official regulations.",
            "source_name": "Blockonomi",
            "date": "Wed, 05 Jan 2022 10:52:37 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://markets.businessinsider.com/news/currencies/quentin-tarantino-to-sell-pulp-fiction-nft-despite-miramax-lawsuit-2022-1",
            "image_url": "https://crypto.snapi.dev/images/v1/6/1/61d5a6ff57bd6c0018589c7aformatjpeg-95731.jpg",
            "title": "Quentin Tarantino will sell his 'Pulp Fiction' NFTs this month despite a lawsuit from the film's producer Miramax",
            "text": "Tarantino's lawyers called the Miramax lawsuit \"offensively meritless\" and said the director has every right to auction pieces of his screenplay.",
            "source_name": "Business Insider",
            "date": "Wed, 05 Jan 2022 10:52:00 -0500",
            "topics": [
                "NFT"
            ],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://u.today/melania-trump-celebrates-btc-zero-block-anniversary-samsung-to-get-cardano-exposure-shib-fights-ftx",
            "image_url": "https://crypto.snapi.dev/images/v1/1/0/10703-95737.jpg",
            "title": "Melania Trump Celebrates BTC Zero Block Anniversary, Samsung to Get Cardano Exposure, SHIB Fights FTX for Biggest Whale Holding: Crypto News Digest by U.Today",
            "text": "Stay tuned for the latest crypto events with U.Today's news digest!",
            "source_name": "UToday",
            "date": "Wed, 05 Jan 2022 10:50:00 -0500",
            "topics": [
                "whales"
            ],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://cryptopotato.com/airbnb-ceo-dabbles-with-adding-crypto-payments-in-2022/",
            "image_url": "https://crypto.snapi.dev/images/v1/5/k/airbnb-crypto-95695.jpg",
            "title": "Airbnb CEO Dabbles With Adding Crypto Payments in 2022",
            "text": "Airbnb customers may soon be able to book accommodations using cryptocurrencies as users suggest such payments to the company's CEO.",
            "source_name": "CryptoPotato",
            "date": "Wed, 05 Jan 2022 10:32:20 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article"
        },
        {
            "news_url": "https://cointelegraph.com/news/uk-advertiser-asa-continues-crypto-ad-banning-spree",
            "image_url": "https://crypto.snapi.dev/images/v1/8/4/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmdevymq2ytk4y2etody3yi00ntlhlwiwmgitmzlmzjnmnjhjyzqzlmpwzw-95729.jpg",
            "title": "UK advertiser ASA continues crypto ad banning spree",
            "text": "Crypto.com become the latest victim of the UK's crypto advertising clampdown, following restrictions on the marketing endeavours of Coinbase, Kraken and others, last year.",
            "source_name": "Cointelegraph",
            "date": "Wed, 05 Jan 2022 10:30:00 -0500",
            "topics": [],
            "sentiment": "Negative",
            "type": "Article"
        },
        {
            "news_url": "https://en.cryptonomist.ch/2022/01/05/china-launch-app-wallet-digital-yuan/",
            "image_url": "https://crypto.snapi.dev/images/v1/v/g/digital-yuan-300x200-95697.jpg",
            "title": "China launches app wallet for the digital yuan",
            "text": "The CBDC project moves into full swing",
            "source_name": "The Cryptonomist",
            "date": "Wed, 05 Jan 2022 10:18:08 -0500",
            "topics": [
                "digital yuan"
            ],
            "sentiment": "Neutral",
            "type": "Article"
        },
        {
            "news_url": "https://www.theblockcrypto.com/post/129152/following-energy-shortage-kazakhstan-is-reining-in-2021s-stampede-of-crypto-miners",
            "image_url": "https://crypto.snapi.dev/images/v1/2/0/20210630-chinese-miners-kazakhstan-move-800x450-95686.png",
            "title": "Following energy shortage, Kazakhstan is reining in 2021's stampede of crypto miners",
            "text": "Kazakh officials assure crypto miners that they will be able to continue operating as long as they report to regulators. The post Following energy shortage, Kazakhstan is reining in 2021's stampede of crypto miners appeared first on The Block.",
            "source_name": "The Block",
            "date": "Wed, 05 Jan 2022 10:04:52 -0500",
            "topics": [
                "mining"
            ],
            "sentiment": "Negative",
            "type": "Article"
        }
    ]

    const [news, setNews] = useState()

    useEffect(() => {
        //axios.get(`https://cryptonews-api.com/api/v1/category?section=general&items=50&token=v406fi1o1sqfdtzxnlhp7uqfo4juosdmnkjstcan`)
          //  .then(response => setNews(response.data.data))
        
    }, [])
    
    return(
        <div className={Style.container}>
            <h1 className={Style.title}>Haberler</h1>

            <div className={Style.content}>
                <Container>
                    <Row>
                        
                            {
                                newss && newss.map((value, index) => {
                                    return (
                                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} key={`${index}-${value.title}`}>
                                            <New
                                                
                                                index={index + 1}
                                                title={value.title}
                                                paragraph={value.text}
                                                date={value.date}
                                                image={value.image_url}
                                                url={value.news_url}
                                            />
                                        </Col>
                                    )
                                })
                            }
                    </Row>
                </Container>
            </div>

        </div>
    )
}