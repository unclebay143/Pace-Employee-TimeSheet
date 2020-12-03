import { React, Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            count: "",
            type: "",
            url: "",
        }
    }

    render(){
        const { title, count, type, url, style, cardColor, icon } = this.props
        // const cardColor = ["pace-bg-accent", "bg-green", "bg-red", "bg-blue"]
        return(
            <>

                <div className={`col-xl-3 col-lg-6 mb-4 mb-xl-0 ${style}`}>
                    <div className="bg-white shadow pace-roundy p-4 h-100 d-flex align-items-center justify-content-between">
                        <div className="flex-grow-1 d-flex align-items-center">
                            <div className={`dot mr-3 ${cardColor}`}></div>
                            <div className="text">
                                <h6 className="mb-0">{title}</h6><span className="text-gray">{count}</span>
                            </div>
                        </div>
                        <div className={`icon text-white ${cardColor}`}><i className={`fas ${icon}`}></i></div>
                    </div>
                </div>

            </>
        )
    }
}


export default Card;