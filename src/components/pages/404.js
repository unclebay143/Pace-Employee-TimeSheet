import { useEffect } from "react";
import { Link }  from "react-router-dom";


// Images
import deadEnd from '../pages/pages-images/4oh4.png';

const PageNotFound = () => {
    
    useEffect(()=>{
        document.title = 'Page not found | 404'
    })


    return(
        <>
        <style>
            {
                `
                nav.navbar,
                footer{
                    display: none;
                }
                `
            }
        </style>
            <div className="pageNotFound-wrapper">
                <div className="errorWrapper">
                    <h4 className="error404">404
                    </h4> 
                    <img src={deadEnd} alt="lost within the app" className="img-fluid error-img" />
                </div>
                <div>
                    <p className="errorText">
                        You've clicked a broken link... let's get you back on track <Link to="/">Go Home</Link>
                    </p>
                </div>
            </div>

        </>
    )
}



export default PageNotFound;