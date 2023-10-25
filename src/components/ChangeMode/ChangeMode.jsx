import { useEffect, useState } from "react";


const ChangeMode = () => {
    const [mode, setMode] = useState("light")

    const changeLightDarkMode = () =>{
        const html = document.documentElement;

        if(mode == "light"){
            html.classList.remove("light");
            html.classList.add("dark");
            setMode("dark");
            localStorage.setItem("mode", "dark")
        }
        else{
            html.classList.remove("dark");
            html.classList.add("light");
            setMode("light");
            localStorage.setItem("mode", "light")
        }

    }

    useEffect(() =>{
        const currentMode = localStorage.getItem("mode") || "light";
        setMode(currentMode);
        const html = document.documentElement;
        html.classList.add(currentMode);
    },[])

    return (
        <div className="w-1/5 mx-auto my-5" >
            <button className="btn btn-outline" onClick={changeLightDarkMode}>Change Mode</button>
            
        </div>
    );
};

export default ChangeMode;