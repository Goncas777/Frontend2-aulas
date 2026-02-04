import {useState, useEffect} from 'react';

function Hour() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());

    useEffect (() => {
        const interval = setInterval(() => {
            setHour(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <p>Hora atual:{hour}</p>
}

export default Hour;