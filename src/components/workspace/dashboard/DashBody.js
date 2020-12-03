import Cards from './Cards';
import TodoCard from './TodoCard'

const DashBody = () => {
    return(
        <>
             <div class="d-flex align-items-stretch">
                <div class="page-holder w-100 d-flex flex-wrap">
                    <div class="container-fluid px-xl-5">
                        <Cards />
                        <section>
                            <div class="row mb-4">
                                <div class="col-lg-7 mb-4 mb-lg-0">
                                    {/* <!-- <div class="col-lg-8"> --> */}
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
                                    {/* <!-- </div> --> */}
                                </div>
                                <div class="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
                                    {/* <!-- <div class="col-lg-4"> --> */}
                                    <TodoCard />
                                    <div class="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                                        <div class="flex-grow-1 d-flex align-items-center">
                                            <div class="dot mr-3 pace-bg-accent"></div>
                                            <div class="text">
                                                <h6 class="mb-0">Meeting with HR department</h6><span class="text-gray">1:23pm</span>
                                            </div>
                                        </div>
                                        <div class="icon pace-bg-accent text-white"><i class="fas fa-clipboard-check"></i></div>
                                    </div>
                                    <div class="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                                       
                                        <div class="icon bg-green text-white"><i class="fas fa-user-friends"></i></div>
                                    </div>
                                    <div class="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                                        <div class="flex-grow-1 d-flex align-items-center">
                                            <div class="dot mr-3 bg-blue"></div>
                                            <div class="text">
                                                <h6 class="mb-0">Build landing page</h6><span class="text-gray">Due date sept 2</span>
                                            </div>
                                        </div>
                                        <div class="icon bg-blue text-white"><i class="fas fa-dollar-sign"></i></div>
                                    </div>
                                    <div class="card px-5 py-4">
                                        <h2 class="mb-0 d-flex align-items-center"><span>0 hours</span>
                                        {/* <!-- <div><i class="fa fa-circle text-danger timer-blink"></i>&nbsp;</div> --> */}
                                        <span class="dot pace-bg-accent d-inline-block ml-3 timer-blink"></span></h2><span class="text-muted">Worked Hours</span>
                                        <div class="chart-holder">
                                            <canvas id="lineChart3" style={{maxHeight: "7rem !important;"}} class="w-100">      </canvas>
                                        </div>
                                    </div>
                                    {/* <!-- </div> --> */}
                                </div>
                            </div>
                            </section>
                    </div>
                    <footer class="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 text-center text-md-left text-primary">
                                    <p class="mb-2 mb-md-0 pace-accent-color">Pace Timesheet &copy; 2018-2020</p>
                                </div>
                                <div class="col-md-6 text-center text-md-right text-gray-400">
                                    {/* <!-- <p class="mb-0">Design by <a href="https://bootstrapious.com/admin-templates" class="external text-gray-400">Bootstrapious</a></p> --> */}
                                    {/* <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)--> */}
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}


export default DashBody;