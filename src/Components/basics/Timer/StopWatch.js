import React, { useCallback, useEffect, useState } from "react";

const StopWatch = ()=> {
    const [time, setTime] = useState(0);
    const[running, setrunning] = useState(false);
    useEffect(()=> {
        let interval;
        if(running){
         interval =
        setInterval(()=> {setTime((prev) => prev + 1)}, 1000);

        }
        return() => clearInterval(interval);
    },[running])
    const starttime = () => {
        console.log("startsss...");
        setrunning(true);
    }
    const stoptime = () => {
        setTime(0)
        setrunning(false)
    }
    const formattime = (data) =>{
        const hours = Math.floor(data / 36000);
        const minutes = Math.floor((data % 36000) / 60);
        const seconds = data % 60;
        return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`
    }
     return(<div>
        <h5>StopWatch</h5>
        <p>{formattime(time)}</p>
        <button onClick={starttime}>start</button>
        <button onClick={stoptime}>stop</button>
    </div>);
}

export default StopWatch;




//time calculation
//1hour = 1 ==> 60 minutes ==> 1min as 60seconds => 1seconds  ==>  1000miliiseconds 360 x 1000 => 3600
