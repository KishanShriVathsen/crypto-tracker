import LMP from '../../assets/Live_Market_Prices.png';
import MP from '../../assets/Market_Cap.png';
import PC from '../../assets/Price_Charts.png';
import SC from '../../assets/Search_Coins.png';
import CD from '../../assets/Coin_Details.png';
import PC2 from '../../assets/24H_Price_Change.png';
function Features() {
    return(
        <div className="mt-5 p-5 max-sm:text-xs">
            <h2 className="text-default-color text-center ">Everything You Need to Track Crypto.</h2>
            <div className="text-default-color p-5 bg-box_bg rounded-md mt-2">{/*About Crypto Tracker */}
                <p>Crypto Tracker is a responsive web application that provides updated cryptocurrency market data, including coin prices, market capitalization, and 24-hour price changes. Built using React and Tailwind CSS, it offers a clean, modern interface to explore and track cryptocurrency market trends.</p>
                <p className="mt-5">
                   <span className="font-bold">Project Purpose:</span> To provide a simple and user-friendly platform for exploring cryptocurrency market data and understanding market trends.<br/>
                   <span className="font-bold">Project Value:</span> Makes cryptocurrency information easier to access and understand through a clean interface, organized market data, and detailed coin insights.<br/>
                   <span className="font-bold">What Users Can Do:</span> Explore popular cryptocurrencies, view prices, track 24-hour price changes, compare market capitalizations, search for specific coins, and view detailed coin information.<br/>
                   <span className="font-bold">Limitations:</span>This project uses a demo API, so data availability, request limits, and update frequency may be restricted. Some information may be incomplete or temporarily unavailable.
                </p>
            </div>
            <div className="mt-5 text-default-color">
                <ul className="grid grid-cols-3 grid-rows-2 gap-4 max-sm:grid-cols-2 max-sm:grid-rows-3">
                    <li className="p-5  bg-box_bg rounded-md">
                        <div className='flex gap-2'>
                            <img src={LMP} alt="Live Market Prices" className='h-10 w-10 rounded-full'/>
                            <h3 className='max-sm:text-sm'>Live Market Prices</h3>
                        </div>
                        
                        <p className="side_text max-sm:text-xs">Display updated prices of cryptocurrencies</p>
                    </li>
                    <li className="p-5  bg-box_bg rounded-md">
                        <div className="flex gap-2">
                            <img src={MP} alt="Market Cap" className='h-10 w-10 rounded-full'/>
                            <h3 className='max-sm:text-sm'>Market Cap</h3>
                        </div>
                        
                        <p className="side_text max-sm:text-xs">View market capitalization of cryptocurrencies</p>
                    </li>
                    <li className="p-5  bg-box_bg rounded-md">
                        <div className="flex gap-2">
                            <img src={PC2} alt="24H Price Change" className='h-10 w-10 rounded-full'/>
                            <h3 className='max-sm:text-sm'>24H Price Change</h3>
                        </div>
                        <p className="side_text max-sm:text-xs">24-hour price changes for each cryptocurrency</p>
                    </li>
                    <li className="p-5  bg-box_bg rounded-md">
                        <div className='flex gap-2'>
                            <img src={SC} alt="Search Coins" className='h-10 w-10 rounded-full'/>
                            <h3 className='max-sm:text-sm'>Search Coins</h3>
                        </div>
                        <p className="side_text max-sm:text-xs">Find specific cryptocurrencies quickly</p>
                    </li>
                    <li className="p-5  bg-box_bg rounded-md">
                        <div className='flex gap-2'>
                            <img src={CD} alt="Coin Details" className='h-10 w-10 rounded-full'/>
                            <h3 className='max-sm:text-sm'>Coin Details</h3>
                        </div>
                        <p className="side_text max-sm:text-xs">Access detailed information about each cryptocurrency</p>
                    </li>
                    <li className="p-5  bg-box_bg rounded-md">
                        <div className='flex gap-2'>
                            <img src={PC} alt="Price Charts" className='h-10 w-10 rounded-full'/>
                            <h3 className='max-sm:text-sm'>Price Charts</h3>
                        </div>
                        <p className="side_text max-sm:text-xs">View interactive price charts for each cryptocurrency</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Features;