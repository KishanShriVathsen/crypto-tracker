import { Bitcoin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';    
function Navbar({selectedCurrency,setSelectedCurrency}){
    console.log(selectedCurrency);
    return(
        <>
        <div className="mx-5 border-b border-default-color">
            <div className=" m-3 flex justify-between items-center ">
                <div className="flex gap-3 items-center cursor-pointer transition duration-500 hover:scale-105">
                    <Bitcoin size={50} className="text-default-color"/>
                    <h3 className="text-2xl  text-default-color">Crypto-Tracker</h3>
                </div>

                <div className="text-default-color p-3 rounded-md hover:bg-box_bg transition duration-500 hover:scale-105">
                    <ul className="flex gap-27.5">
                        <li><Link to="/" className="li">Home</Link></li>
                        <li><Link to="/" className="li">Features</Link></li>
                        <li><Link to="/" className="li">Pricing</Link></li>
                        <li><Link to="/" className="li">Blog</Link></li>
                    </ul>
                </div>

                <div className="flex gap-3">
                    <div>
                        <select className="bg-box_bg text-default-color p-2 rounded-md" value={selectedCurrency} onChange={(e)=>setSelectedCurrency(e.target.value)}>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="INR">INR</option>
                        </select>

                    </div>
                    
                    <div>
                        <button className="bg-box_bg text-default-color p-2 rounded-md duration-500 cursor-pointer hover:scale-105">Sign    In</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );


}
export default Navbar;