import { Bitcoin } from 'lucide-react';
import { Link } from 'react-router-dom';    
function Navbar({selectedCurrency,setSelectedCurrency}){
    return(
        <>
        <div className="mx-5 border-b border-default-color max-sm:mx-1 ">
            <div className=" m-3 flex justify-between items-center max-sm:text-xs gap-0">
                <div className="flex gap-3 items-center cursor-pointer transition duration-500 hover:scale-105 max-sm:gap-0">
                    <Bitcoin size={50} className="text-default-color max-sm:size-8"/>
                    <Link to='/'><h3 className="text-2xl  text-default-color max-sm:hidden">Crypto-Tracker</h3></Link>
                </div>

                <nav className="text-default-color p-3 rounded-md hover:bg-box_bg transition duration-500 hover:scale-105 max-sm:p-2">
                    <ul className="flex gap-27.5  max-sm:gap-2.5">
                        <li><Link to="/" className="li">Home</Link></li>
                        <li><Link to="/features" className="li">Features</Link></li> 
                        <li><Link to="/Pricing" className="li">Pricing</Link></li>
                        <li><Link to="/" className="li">Blog</Link></li>
                    </ul>
                </nav>

                <div className="flex gap-3 max-sm:gap-2">
                    <div>
                        <select className="bg-box_bg text-default-color p-2 rounded-md  max-sm:p-1 " value={selectedCurrency} onChange={(e)=>setSelectedCurrency(e.target.value)}>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="INR">INR</option>
                        </select>

                    </div>
                    
                    <div>
                        <button className="bg-box_bg text-default-color p-2 rounded-md duration-500 cursor-pointer hover:scale-105 max-sm:p-1 whitespace-nowrap">Sign Up</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );


}
export default Navbar;