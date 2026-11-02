import { useEffect, useState } from "react";
import data_Converter from '../../data_Converter.js';
import {time_Color} from '../../data_Converter.js'; //{} why cause the function is export not export defualt
import { Link } from "react-router-dom";
import error_image from '../../assets/error_image.png';
function HeroSection({selectedCurrency}) {
    const [coins_api,setCoins_api]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const API_KEY=import.meta.env.VITE_CRYPTO_API_KEY;
    const API_URL=import.meta.env.VITE_CRYPTO_API_URL;

    useEffect(()=>{
        fetchCoins();
    },[selectedCurrency]);//We use a dependency because whenever the selected currency changes, the component re-renders. For example, when we change USD to INR, the value of `selectedCurrency` changes. The dependency tells React to run `useEffect()` again so we can fetch the updated crypto prices.
    
    async function fetchCoins(){
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(`${API_URL.replace("vs_currency=usd", `vs_currency=${selectedCurrency.toLowerCase()}`)}&x_cg_demo_api_key=${API_KEY}`); 
            if(!response.ok){
                throw new Error(`HTTP Error:${response.status}`);
            }
            const data=await response.json();
            setCoins_api(data);
            console.log(data);
        }
        catch(error){
            setError(error.message);//it store error message
            console.error("Error fetching coins:",error);
        }
        finally {
            setLoading(false);
        }
    }
    const [search, setSearch] = useState("");
    const filteredCoins = coins_api.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    const currencySymbol={
        USD: "$",
        EUR:"€",
        INR:"₹"
    }
    const currency=currencySymbol[selectedCurrency] ||"$";
    const[clicking_toggle,setClicking_toggle]=useState(true);

    return(
        <>
           {/*error */}
            { error?(
                    <div className="bg-back_ground w-full text-center flex flex-col  items-center mt-2">
                        <img src={error_image} alt="Connection error" className="w-[30%]"/>
                        <h1 className="text-default-color">Oops,Something Went Wrong!</h1>
                        <p className="side_text">{error}</p>
                        <button onClick={fetchCoins} className="bg-box_bg text-white default_hover p-2 rounded-md mt-3">Try Again</button>
                    </div>
                ):
                (
                <div className="text-default-color flex flex-col items-center mt-[5%]">
                    <div>
                        <div className="mb-5 transition duration-500 hover:scale-105 ">
                            <h1 className="text-5xl font-bold   max-sm:text-2xl text-center">The Greatest Crypto Tracker</h1>
                        </div>
                        <div className="text-gray-400 text-center  max-sm:text-sm">
                            <p>Welcome to the Greatest crypto tracker!</p>
                            <p>Sign up now to get the latest crypto prices and market insights.</p>
                        </div>   
                    </div>
                    {/* Search UI and Crypto List */} 
                    <div>
                        <div className="mt-8 flex items-center  justify-center ">
                            <input type="text" placeholder="Search for a CryptoCurrency..."  value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-box_bg p-2 text-white placeholder:text-gray-500 w-lg h-11  rounded-md default_hover max-sm:w-85" />
                        </div>
                        <div className="my-8 max-sm:flex max-sm:flex-col max-sm:items-center">
                            <div className="bg-box_bg text-lg p-5 grid grid-cols-[0.5fr_1fr_1fr_2fr_1fr] gap-1 border-b-2 rounded-t-md max-sm:text-sm  max-sm:w-[90%]  max-sm:grid-cols-[0.5fr_2fr_1.5fr_3fr_3fr] max-sm:gap-4 max-sm:p-2 max-sm:py-4">
                                <p>#</p>
                                <p>Coins</p>
                                <p>Price</p>
                                <p className="max-sm:text-xs">24Hr Change</p>
                                <p>Market  Cap</p>
                            </div>
                            {
                                loading?(
                                    <>
                                        <div className="bg-box_bg  w-3xl p-5 grid grid-cols-[0.5fr_1fr_1fr_2fr_1fr] gap-1 max-sm:w-[90%] max-sm:grid-cols-[0.5fr_2fr_1.5fr_3fr_3fr] max-sm:gap-4 max-sm:p-2 max-sm:py-4">
                                                <p className="skeleton w-8 h-5 rounded-md"></p>
                                                <div>
                            
                                                    <p className="skeleton w-8 h-5 rounded-md"></p>
                                                </div>
                                                <p className="skeleton w-8 h-5 rounded-md"></p>
                                                <p className="skeleton w-8 h-5 rounded-md"></p>
                                                <p className="skeleton w-8 h-5 rounded-md"></p>
                                        </div>
                                       
                                    </>
                                ):
                                filteredCoins.length===0?(
                                            <p className="text-gray-400 text-center p-5">
                                                No cryptocurrencies found.
                                            </p>
                                ): (
                                    <>
                                        {filteredCoins.slice(0,clicking_toggle?10:100).map((coin, index) => {
                                            return(
                                                
                                                <Link to={`/coin/${coin.id}`} key={coin.id} className="bg-box_bg  w-3xl p-5 grid grid-cols-[0.5fr_1fr_1fr_2fr_1fr] gap-1 border-b-2 cursor-pointer transition hover:scale-101 max-sm:text-sm  max-sm:w-[90%] max-sm:grid-cols-[0.5fr_2fr_1.5fr_3fr_3fr] max-sm:gap-4 max-sm:p-2 max-sm:py-4">
                                                    <p>{index+1}</p>
                                                    <div className="flex gap-3 items-center max-sm:gap-1">
                                                        <img src={coin.image} alt={coin.name} className="w-3 h-3 text-sm"/>
                                                        <p className="max-sm:text-xs"> {coin.name}</p>
                                                    </div>
                                                    <p>{currency+data_Converter(coin.current_price)}</p>
                                                    <p className={time_Color(coin.price_change_24h)}>
                                                        {(coin.price_change_24h??0).toFixed(2)}%
                                                    </p>
                                                    <p>{currency+data_Converter(coin.market_cap)}</p>
                                                </Link>
                                                
                                            )
                                            })
                                        }
                                        <button className="bg-box_bg text-white cursor-pointer p-2 rounded-md mt-2.5 font-bold  active:scale-90 default_hover" onClick={() => setClicking_toggle(!clicking_toggle)}> {clicking_toggle?"Click To View All CryptoCurrency":" Click To Show Less"}</button>    
                                    </>
                                        
                                )
                            }    
                        </div>
                    </div>
                </div>
                )
            }
        </>    
    );    
    
}    
export default HeroSection;