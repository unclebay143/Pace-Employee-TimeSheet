import { useEffect } from "react";
import { Link, Redirect }  from "react-router-dom";
import './pages-styles/404.css';
import { useSelector } from 'react-redux';
import { object } from "yup";


const PageNotFound = () => {
    
    useEffect(()=>{
        document.title = 'Page not found | 404'
    })

    const tasks = useSelector(state => state.task)

    console.log(tasks)
    return(
        <>
            <div className="pageNotFound-wrapper">
                <div className="errorWrapper">
                    <h4 className="error404">404</h4> 
                    <p className="errorText">
                        You've clicked a broken link....let's get you back on track <Link to="/">Go Home</Link>
                    </p>

                   <pre>
                        {
                        
                        
                        /* {
                            
                            tasks.map((task)=>{
                            return <pre>{task.taskName} {task.duedate}</pre>
                            })
                            


                        } */}
                    </pre> 
                </div>
            </div>

        </>
    )
}



export default PageNotFound;