import { Link }  from "react-router-dom";
import './pages-styles/404.css';
const PageNotFound = () => {
    return(
        <>

            <div className="pageNotFound-wrapper">
                <div className="errorWrapper">
                    <h4 className="error404">404</h4> 
                    <p className="errorText">
                        You've clicked a broken link....let's get you back on track <Link to="/">Go Home</Link>
                    </p>
                </div>
            </div>

        </>
    )
}



export default PageNotFound;