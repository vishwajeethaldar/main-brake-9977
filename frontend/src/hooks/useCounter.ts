import React,{useEffect,useRef} from "react"
const formateZero = (time:number) => {
    return time < 10 ? `0` + time : time;
  };
const TimeString = (time:number) => {
    // let mili = time % 1000;
    const seconds = time % 60;
    const minute = Math.floor(time / 60)  % 60;
    const hour=Math.floor(time/(60*60))%13
    return `${formateZero(hour)}:${formateZero(minute)}:${formateZero(seconds)}`;
  };
const useCounter=(initialState:number)=>{
  const [count,setCount]=React.useState<number>(initialState)
  const ref=useRef<any>(null)
  const handleStart=()=>{
    console.log("inside start")
    if(ref.current===null)
    {
        ref.current=setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
    }
  }
  const handleStop=()=>{
    console.log(count)
    setCount(initialState)
    clearInterval(ref.current)
    ref.current=null
  }
  let timeString=TimeString(count)
  return {timeString,count,handleStart,handleStop}
}
export default useCounter