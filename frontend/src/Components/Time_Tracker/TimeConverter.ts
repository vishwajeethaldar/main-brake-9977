const formateZero = (time:number) => {
    return time < 10 ? `0` + time : time;
  };
export const TimeString = (time:number) => {
    // let mili = time % 1000;
    const seconds = time % 60;
    const minute = Math.floor(time / 60)  % 60;
    const hour=Math.floor(time/(60*60))%13
    return `${formateZero(hour)}:${formateZero(minute)}:${formateZero(seconds)}`;
  };