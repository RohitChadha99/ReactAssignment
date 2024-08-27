import React, { useEffect, useState } from "react";

export const StopWatch = () => {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);
    var interval;

    useEffect(() => {
        if (running) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);

            return () => clearInterval(interval);

        } else {
            clearInterval(interval);
        }
    }, [running]);

    function handleStart(){
        setRunning(true);
    }

    function FormatTime(){
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function handleReset(){
        setRunning(false);
        setTime(0);
    }

    function handleStop(){
        setRunning(false);
    }

    const styles = {
        button: {padding: '10px 20px', fontSize: '16px', cursor: 'pointer', margin: '10px'}
    };

    return <>
        <h1>Stop Watch</h1>
        <button onClick={handleStart} style={styles.button}>Start</button>
        <button onClick={handleStop} style={styles.button}>Stop</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
        <h1>{FormatTime()}</h1>
    </>
}