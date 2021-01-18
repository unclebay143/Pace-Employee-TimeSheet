import { React } from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const { title, count, url, style, cardColor, icon } = props
    // const cardColor = ["pace-bg-accent", "bg-green", "bg-red", "bg-blue"]
    return(
        <>
            <div className={`col-xl-3 col-lg-6 mb-4 mb-xl-0 ${style}`}>
                <div className="bg-white shadow pace-roundy p-4 h-100 d-flex align-items-center justify-content-between">
                    <div className="flex-grow-1 d-flex align-items-center dashcard">
                        <div className={`dot mr-3 ${cardColor}`}></div>
                        <div className="text">
                            <h6 className="mb-0">{title}</h6><span className="text-gray">{count}</span>
                        </div>
                    </div>
                    <Link to={url}>
                        <div className={`icon text-white ${cardColor}`}><i className={`fas ${icon}`}></i></div>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Card;