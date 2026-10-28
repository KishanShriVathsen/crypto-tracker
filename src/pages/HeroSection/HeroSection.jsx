import {Search}from "lucide-react";
import { useEffect, useState } from "react";
import data_Converter from '../../data_Converter.js';
import {time_Color} from '../../data_Converter.js'; //why cause the function is export not export defualt
function HeroSection(){
    const [coins_api,setCoins_api]=useState([]);
    const API_KEY=import.meta.env.VITE_CRYPTO_API_KEY;
    const API_URL=import.meta.env.VITE_CRYPTO_API_URL;

    useEffect(()=>{
        fetchCoins();
    },[])

    async function fetchCoins(){
        try{
        const response=await fetch(`${API_URL}&x_cg_demo_api_key=${API_KEY}`);
        const data=await response.json();
        setCoins_api(data);
        console.log(data);
        }
        catch(error){
            console.error("Error fetching coins:",error);
        }
    }
    return(
        <>
            <div className="text-default-color flex flex-col items-center mt-[5%]">
                <div>
                    <div className="mb-5 transition duration-500 hover:scale-105">
                        <h1 className="text-5xl font-bold">The Gratest Crypto Tracker</h1>
                    </div>
                    <div className="text-gray-400 text-center">
                        <p>Welcome to the greatest crypto tracker!</p>
                        <p>Sing up now to get the latest crypto prices and market insights.</p>
                    </div>   
                </div>
                {/* Search UI and Crypto List */} 
                <div>
                    <div className="mt-8 flex items-center  justify-center ">
                        <input type="text" placeholder="Search for a CryptoCurrency..." className="bg-box_bg p-2 text-white placeholder:text-gray-500 w-lg h-11 rounded-md transition duration-500 hover:bg-default-color hover:text-black hover:scale-105" />
                        <button className="ml-5 rounded-full p-1  transition duration-500 hover:scale-105 hover:bg-default-color hover:text-black active:scale-90"><Search size={35}/></button>
                    </div>
                    <div className="my-8 ">
                        <div className="bg-box_bg text-lg p-5 grid grid-cols-[0.5fr_1fr_1fr_2fr_1fr] gap-1 border-b-2 rounded-t-md ">
                            <p>#</p>
                            <p>Coins</p>
                            <p>Price</p>
                            <p>24Hr Change</p>
                            <p>Market Gap</p>
                        </div>
                        {coins_api.map((coin,index)=>{
                            if(index<10){
                                return(
                                    <div key={index} className="bg-box_bg p-5 grid grid-cols-[0.5fr_1fr_1fr_2fr_1fr] gap-1 border-b-2 cursor-pointer transition hover:scale-101 ">
                                        <p>{index+1}</p>
                                        <div className="flex gap-3 items-center">
                                            <img src={coin.image} alt={coin.name} className="w-4 h-4 text-sm"/>
                                            <p> {coin.name}</p>
                                        </div>
                                        <p>{coins_api?"$"+data_Converter(coin.current_price):"Coin Price"}</p>
                                        <p className={coins_api ? time_Color(coin.price_change_24h) : ""}>
                                            {coins_api ? coin.price_change_24h : "24H Change"}
                                        </p>
                                        <p>{coins_api?"$"+data_Converter(coin.market_cap):"Market Cap"}</p>
                                    </div>
                                )
                           }
                        })}
                    </div>
                </div>
            </div>
        </>
    );

}
export default HeroSection;