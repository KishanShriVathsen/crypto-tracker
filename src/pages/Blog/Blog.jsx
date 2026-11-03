import HB from "../../assets/Histroy_of_BitCoin.png";
import CP from "../../assets/currency_to_people.png";
import BitCoin from "../../assets/BitCoin.png";
import Ethereum from "../../assets/Ethereum.png";
import Tether from "../../assets/Tether.png";
function Blog(){
    return(
        <div className="text-default-color  ">
            <h1 className="text-center mt-2 max-sm:text-2xl">Explore the World of Crypto</h1>
            <div className="bg-box_bg p-5 rounded-md m-5 flex flex-col items-center max-sm:p-5 max-sm:m-1 max-sm:text-xs">
                <h2 className="border-b-2 my-2 max-sm:text-lg">What is cryptocurrency?</h2>
                <div>
                    <ul className="list-disc flex flex-col gap-5">
                        <li><p>Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies issued by governments (fiat money), cryptocurrencies operate on decentralized networks based on blockchain technology. A blockchain is a distributed ledger that records all transactions across a network of computers, ensuring transparency and immutability.</p></li>
                        <li><p>Some cryptocurrencies, such as Bitcoin, use mining to validate transactions and secure their networks. Bitcoin has a limited supply of 21 million coins, while other cryptocurrencies may have different supply models.</p></li> 
                        <li><p>One of the key features of cryptocurrencies is that they are not controlled by any central authority, such as a government or financial institution. This decentralization allows for peer-to-peer transactions without the need for intermediaries, potentially reducing transaction fees and increasing privacy.</p></li>
                    </ul>
                </div>
            </div>
            <div className="bg-box_bg p-5 rounded-md m-5 flex flex-col items-center max-sm:p-5 max-sm:m-1 max-sm:text-xs">
                <h2 className="border-b-2 my-2 max-sm:text-lg">History of cryptocurrency</h2>
                <div>
                    <ul className="list-disc flex flex-col gap-5">
                        <li><p>Cryptocurrency evolved from early cryptographic experiments in the 1980s to a multi-trillion-dollar global asset class. The concept began with David Chaum’s eCash (1983), followed by theoretical frameworks like b-money (1998) and Bit Gold (1998).</p></li>
                        <li><p>Bitcoin became the first functional, decentralized cryptocurrency after Satoshi Nakamoto published its whitepaper in 2008 and mined the genesis block on January 3, 2009.  Key milestones include the first real-world transaction (buying pizzas in 2010), the rise of altcoins like Litecoin and Namecoin in 2011, and the launch of Ethereum in 2015 which introduced smart contracts.</p></li>
                        <li><p> The market has experienced significant growth and volatility, with major market cycles over the years. Recent developments include the growth of DeFi and NFTs, and the approval of spot Bitcoin ETFs in 2024.</p></li>
                    </ul>
                </div>
                <div>
                    <img src={HB} alt="History of Bitcoin" className="w-auto h-100 max-sm:h-50  rounded-md"/>
                </div>
            </div>
            <div className="bg-box_bg p-5 rounded-md m-5 flex flex-col items-center max-sm:p-5 max-sm:m-1 max-sm:text-xs">
                <h2 className="border-b-2 my-2 max-sm:text-lg">How is cryptocurrency useful to people</h2>
                <div>
                    <img src={CP} alt="Cryptocurrency and People" className="w-auto h-100 max-sm:h-50 rounded-md"/>
                </div>
                <div>
                    <ul className="list-disc flex flex-col gap-5">
                        <li><p>Cryptocurrency is useful primarily by providing financial inclusion and sovereignty, allowing anyone with internet access to transact without relying on traditional banks.  This is particularly critical for the unbanked and those in regions with hyperinflation or strict capital controls, where crypto offers a stable alternative to failing local currencies.</p></li>
                        <li><p>International Transfers: Cryptocurrency networks can enable cross-border transfers, although network, exchange, and conversion fees may apply.</p></li>
                        <li><p>Decentralization and Security: Users can manage their own cryptocurrency through digital wallets, but they must protect their private keys.</p></li>
                    </ul>
                </div>
                
            </div>
            <div className="bg-box_bg p-5 rounded-md m-5 max-sm:p-5 max-sm:m-1 max-sm:text-xs">
                <div className="flex flex-col items-center">
                    <h2 className="border-b-2 my-2 max-sm:text-lg">Top 3 cryptocurrencies</h2>
                </div>
                
                <div className="pl-5">
                    <ol className="list-decimal flex flex-col gap-5">
                        <li>
                            <div className="flex gap-2 items-center">
                                <h5 className="max-sm:text-xs">Bitcoin (BTC):</h5>
                                <img src={BitCoin} alt="Bitcoin" className="w-auto h-10 rounded-full "/>
                            </div>
                            
                            <ul className="list-disc flex flex-col gap-2 ml-5">
                                <li>Launched in 2009.</li>
                                <li>Created under the name Satoshi Nakamoto.</li>
                                <li>Maximum supply of 21 million BTC.</li>
                                <li>Designed for peer-to-peer digital transactions.</li>
                            </ul>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center">
                                <h5 className="max-sm:text-xs">Ethereum (ETH):</h5>
                                <img src={Ethereum} alt="Ethereum" className="w-auto h-10 rounded-full"/>
                            </div>
                            <ul className="list-disc flex flex-col gap-2 ml-5">
                                <li>Launched in 2015.</li>
                                <li>Proposed by Vitalik Buterin and developed with a team of co-founders.</li>
                                <li>Does not have a fixed maximum supply.</li>
                                <li>Designed for smart contracts and decentralized applications.</li>
                            </ul>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center">
                                <h5 className="max-sm:text-xs">Tether (USDT):</h5>
                                <img src={Tether} alt="Tether" className="w-auto h-10 rounded-full"/>
                            </div>
                            <ul className="list-disc flex flex-col gap-2 ml-5">
                                <li>Launched in 2014.</li>
                                <li>Its stability depends on its backing and issuer arrangements; it is not risk-free</li>
                                <li>Commonly used for trading and transferring value.</li>
                                <li>Designed to maintain a value close to one US dollar.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
            </div>
        </div>
    );
}
export default Blog;