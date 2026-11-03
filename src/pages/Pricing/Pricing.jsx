import {Link} from 'react-router-dom';
function Pricing(){
    return(
        <div className="text-default-color flex flex-col items-center gap-5">
            <div className="text-center mt-5">
                <h1>Simple Pricing, Completely Free</h1>
                <p className="side_text m-2">Everything you need to explore cryptocurrency markets, without paying a subscription.</p>
            </div>
            <div className="bg-box_bg w-[35%] rounded-md py-5 flex flex-col items-center gap-5 max-sm:w-[70%]">
                <h2>₹0<span className="text-xs text-green-300">/Forever</span></h2>
                <ul className="list-disc pl-5 flex flex-col gap-5 max-sm:text-xs">
                    <li><p>Cryptocurrency market overview</p></li>
                    <li><p>Coin search functionality</p></li>
                    <li><p>Market capitalization</p></li>
                    <li><p>24-hour price changes</p></li>
                    <li><p>Individual coin details</p></li>
                    <li><p>Historical price charts</p></li>
                </ul>
                <nav className="w-full flex justify-center">
                    <Link className='w-[50%] flex justify-center default_hover rounded-md py-2' to={'/'}>Get Started</Link>
                </nav>
                <p className="side_text text-center">No payment required. No subscription.</p>
            </div>
            
        </div>
    );
}
export default Pricing;