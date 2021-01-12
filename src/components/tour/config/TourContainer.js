// React
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Tour
import tourConfig from '../../tour/config/tourConfig';
import Tour from "reactour";


export default function TourContainer() {

    // Tour bg color
    const accentColor = "#5cb7b7";

    // Get the first timer status handler
    const { isFirstTimer } = useSelector(state => state.authenticationState)

    // state for Tour lunch, with initialstate of isFirstTimer value, false by default
    const [isTourOpen, setIsTourOpen] = useState(isFirstTimer)

    useEffect(() => {

        // if the status from the first timer is true change the body class(affecting the whole app if add directly)
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
