import { Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,Area,AreaChart} from "recharts";
function Coin_Details(){
    const {coinId}=useParams();
    const[getGraph,SetGetGraph]=useState([]);

    useEffect(() => {
        Graph();
    },[coinId]);

    useEffect(() => {
       console.log(getGraph.prices);
    }, [getGraph]);


    const API_URL_GRAPH=import.meta.env.VITE_CRYPTO_API_URL_GRAPH;
    async function Graph(){
        const response= await fetch(API_URL_GRAPH+`${coinId}/market_chart?vs_currency=usd&days=7`);
        const data= await response.json();
        console.log(data);
        SetGetGraph(data);
        
    }
    const chartData = getGraph.prices?.map((item) => {
        return {
            time: item[0],
            price: item[1]
        };
        }) || [];
    return(
        <>
        
        
        <AreaChart width={1650} height={500} data={chartData} className="mt-5">
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />{/*<Tooltip/> in Recharts displays information when the user hovers their mouse over a point on the chart. */}
            <Area
            
                dataKey="price"
                stroke="#fff"
                strokeWidth={2}
                fill="#11162a"
                fillOpacity={0.5}
            />
        </AreaChart>
        <h1 className="text-default-color text-5xl text-center">{coinId.toUpperCase()}</h1>
        </>
    );
}
export default Coin_Details;