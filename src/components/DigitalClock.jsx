import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());
    const [isStandardTime, setStandardTime] = useState(true);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);


    function toStandardTime(){
        setStandardTime(true);
    }
    function toMilitaryTime(){
        setStandardTime(false);
    }

    function formatTime(){
        let hrs = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridiem = hrs >= 12 ? "PM" : "AM";
        hrs = isStandardTime ? (hrs % 12 || 12) : hrs;
        
        return `${padZero(hrs)}:${padZero(mins)}:${padZero(secs)} ${isStandardTime ? meridiem : ""}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    return(
        <>
            <div className = "clock-container">
                <div className = "clock">
                    <span>{formatTime()}</span>
                    <br/>
                    <button className = "clock-btn" onClick = {toStandardTime}>Standard Time</button>
                    <button className = "clock-btn" onClick = {toMilitaryTime}>Military Time</button>
                </div>
                
                
            </div>

        </>
    );
}

export default DigitalClock;