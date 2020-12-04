import { React, Component } from 'react';


class MostActiveEmployee extends Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <>

                <div class="col-lg-7 mb-4 mb-lg-0">
                    <div class="card pace-roundy">
                        <div class="card-header">
                            <h2 class="h6 mb-0 text-uppercase">Most Active Employee</h2>
                        </div>
                        <div class="card-body">
                            <p class="mb-5 text-gray">Hover over the bar chart</p>
                            <div class="chart-holder mt-5 mb-5">
                                <canvas id="barChartExample1"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default MostActiveEmployee;