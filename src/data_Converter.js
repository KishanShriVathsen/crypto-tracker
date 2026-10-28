export default function data_Converter(data) {
    if(data<1000){
        return(data);
    }
    else if(data>=1000 && data<1000000){
        return((data/1000).toFixed(2)+"K");
    }
    else if(data>=1000000 && data<1000000000){
        return((data/1000000).toFixed(2)+"M");
    }
    else if(data>=1000000000 && data<1000000000000){
        return((data/1000000000).toFixed(2)+"B");
    }
    else{
        return((data/1000000000000).toFixed(2)+"T");
    }
}

export  function time_Color(data){
    if(data>0){
        
        return("text-green-300");
    }
    else if(data<0){
       return("text-red-400");
    }
    else{
        return("text-default-color")
    }
}
