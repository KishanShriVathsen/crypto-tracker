import { Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,Area,AreaChart} from "recharts";
import data_Converter from "../../data_Converter.js";

function Coin_Details({selectedCurrency}){
    const {coinId}=useParams();
    const[getGraph,SetGetGraph]=useState({});//{} Because It Will Return Somthing
    const[coin_detail,SetCoin_Detail]=useState(null);

    useEffect(() => {
        Graph();
    },[coinId,selectedCurrency]);

    useEffect(() => {
       console.log(getGraph.prices);
    }, [getGraph]);


    const API_URL_GRAPH=import.meta.env.VITE_CRYPTO_API_URL_GRAPH;
    async function Graph(){
        try{
        const response= await fetch(API_URL_GRAPH+`${coinId}/market_chart?vs_currency=${selectedCurrency.toLowerCase()}&days=7`);
        if(!response.ok){
            throw new Error(`HTTP Error:${response.status}`);
        }
        const data= await response.json();
        console.log(data);
        SetGetGraph(data);
        }
        catch(error){
            console.log("error"+error);
        }
        
    }
    const chartData = getGraph.prices?.map((item) => {
        return {
            time: item[0],
            price: item[1]
        };
    }) || [];

    const API_URL_DETAILS= import.meta.env.VITE_CRYPTO_API_URL_GRAPH
    async function fetchCoins(){
        try{
            const response = await fetch(`${API_URL_DETAILS}${coinId}`);
            if(!response.ok){
                throw new Error(`HTTP Error:${response.status}`);
            }
            const data=await response.json();
            SetCoin_Detail(data);
            console.log(data);
        }
        catch(error){
            console.error("Error fetching coins:",error);
        }
    }
    useEffect(()=>{
        console.log("this is coin detail page");
        fetchCoins();
    },[coinId]);

    const currencySymbol={
        USD: "$",
        EUR:"€",
        INR:"₹"
    }
    const currency=currencySymbol[selectedCurrency] ||"$";

    return(
        <>
        {!coin_detail ? (
            <div className="flex justify-center">
                <div className="bg-box_bg mt-5 p-5 w-[95%] rounded-md">
                    <div className="skeleton w-20 h-20"></div>
                    <div className="skeleton w-48 h-5 mt-4"></div>  {/*skeleton Loading */}
                    <div className="skeleton w-32 h-5 mt-3"></div>
                </div>
            </div>
        ):coin_detail&&(
                    <div className="flex justify-center">
                        <div className=" bg-box_bg mt-5 p-5 w-[95%] rounded-md">
                            <div className="flex items-center gap-[2%] border-b-2 border-default-color">
                                <img src={coin_detail.image?.large} className="w-[10%] h-30"/>
                                <div>
                                    <h1 className="text-default-color text-5xl text-center">{coin_detail.name}({coin_detail.symbol.toUpperCase()})</h1>
                                    <p className="side_text">Rank#{coin_detail.market_cap_rank}</p>
                                    <h2 className="text-default-color">{currency+data_Converter(coin_detail.market_data.current_price[selectedCurrency.toLowerCase()])}</h2>
                                    <p className="side_text">Current Price</p>
                                </div>
                            </div>
                            <div className="text-default-color mt-5">
                                <h2>Market Statistics</h2>
                                <ul className="grid grid-cols-2">
                                    <li>
                                        <p className="side_text">Market Cap</p>
                                        <p>{currency+data_Converter(coin_detail.market_data.market_cap[selectedCurrency.toLowerCase()])}</p>{/*We don't need three steps; we can do it in just two steps by using bracket notation (]" */}
                                    </li>
                                    <li>
                                        <p className="side_text">24H High</p>
                                        <p>{currency+data_Converter(coin_detail.market_data.high_24h[selectedCurrency.toLowerCase()])}</p>
                                    </li>
                                    <li>
                                        <p className="side_text">24H Volume</p>
                                        <p>{currency+data_Converter(coin_detail.market_data.total_volume[selectedCurrency.toLowerCase()])}</p>
                                    </li>
                                    <li>
                                        <p className="side_text">24H Low</p>
                                        <p>{currency+data_Converter(coin_detail.market_data.low_24h[selectedCurrency.toLowerCase()])}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            {!getGraph.prices?(//added
                <div className="w-[95%] h-125 mt-5 mx-9 rounded-md bg-box_bg">
                    <div className="h-[90%] w-2 ml-3 m-2 skeleton rounded-md"></div>
                    <div className="h-2 w-[90%] ml-3 skeleton rounded-md"></div>
                </div>
            ):
                <ResponsiveContainer width="95%" height={500}>
                    <AreaChart data={chartData} className="mt-5">
                        <XAxis  dataKey="time" tickFormatter={(timestamp) =>new Date(timestamp).toLocaleDateString("en-US", {month: "short",day: "numeric"})}/>
                        <YAxis />
                        <Tooltip content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-box_bg p-3 rounded-md text-default-color">
                                                <p>{currency}{data_Converter(Number(payload[0].value))}</p>
                                            </div>
                                        );
                                    }
                                    return null;}}
                        />{/*<Tooltip/> in Recharts displays information when the user hovers their mouse over a point on the chart. */}
                        <Area
                            dataKey="price"
                            stroke="#fff"
                            strokeWidth={2}
                            fill="#11162a"
                            fillOpacity={0.5}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            }
       
        </>
    );
}
export default Coin_Details;