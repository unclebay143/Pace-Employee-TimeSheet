import { React, Component } from 'react';
import { currentUserStaffID } from '../../../../services/auth-header';


class MostActiveEmployee extends Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <>
                {
                    currentUserStaffID === 5 ? (

                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <div className="card pace-roundy">
                                <div className="card-header">
                                    <h2 className="h6 mb-0 text-uppercase">Your Progress Graph</h2>
                                </div>
                                <div className="card-body">
                                    <p className="mb-5 text-gray">Your task progress is less than 10%</p>
                                    <div className="chart-holder mt-5 mb-5">
                                        <canvas id="barChartExample1"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (

                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <div className="card pace-roundy">
                                <div className="card-header">
                                    <h2 className="h6 mb-0 text-uppercase">Most Active Employee</h2>
                                </div>
                                <div className="card-body">
                                    <p className="mb-5 text-gray">Hover over the bar chart</p>
                                    <div className="chart-holder mt-5 mb-5">
                                        <canvas id="barChartExample1"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </>
        )
    }
}

export default MostActiveEmployee;