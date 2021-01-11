import React, { useEffect, useState } from 'react';

// Tour
import tourConfig from '../../tour/config/tourConfig';
import Tour from "reactour";


export default function TourContainer() {

    const accentColor = "#5cb7b7";
    const [isTourOpen, setIsTourOpen] = useState(true)
    // Don't forget to add the isfirsttimer to the redux and use it to render accordingly
    // const [isFirstTimer, setIsFirstTimer] = useState(true)
    // const isFirstTimer = true;
    useEffect(() => {
        if(isTourOpen){
            document.body.classList.add("tour-container");
        }else{
            document.body.classList.remove("tour-container");
        }
    },[isTourOpen])

    return (
        <>
            <div className="tour-container">
                <Tour
                    onRequestClose={(()=>setIsTourOpen(false))}
                    steps={tourConfig}
                    isOpen={isTourOpen}
                    maskClassName="mask"
                    className="helper"
                    rounded={5}
                    accentColor={accentColor}
                />
            </div>
        </>
    )
}
