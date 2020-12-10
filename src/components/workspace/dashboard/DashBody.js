import { useEffect } from 'react';
import Cards from './Cards';
import EmpCards from './EmpCards';
import NotificationCards from './NotificationCards';
import MostActiveEmployee from './MostActiveEmployee';
import Footer from '../layouts/Footer';
import AssignedTasks from './employeeTasks/AssignedTasks';
import AcceptedTasks from './employeeTasks/AcceptedTasks';

const DashBody = () => {
    useEffect(()=>{
        document.title = 'Company name | dashboard'
    })

    return(
        <>
            <div className="d-flex align-items-stretch">
                <div className="page-holder w-100 d-flex flex-wrap">
                    <div className="container-fluid px-xl-5">
                        {/* employee card component */}
                        {/* <EmpCards /> */}
                        <section>
                            <div className="row mb-4">
                                <Cards />
                                
                                <MostActiveEmployee />
                                <div className="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
                                    <NotificationCards />
                                    <div className="card px-5 py-4">
                                        <h2 className="mb-0 d-flex align-items-center"><span>0 hours</span>
                                        <span className="dot pace-bg-accent d-inline-block ml-3 timer-blink"></span></h2><span className="text-muted">Worked Hours</span>
                                        <div className="chart-holder">
                                            <canvas id="lineChart3" style={{maxHeight: "7rem !important"}} className="w-100"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        {/* tasks component */}
                        {/* <AssignedTasks /> */}
                        {/* <AcceptedTasks /> */}
                        <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left text-primary">
                            <p className="mb-2 mb-md-0 pace-accent-color">Pace Timesheet &copy; 2018-2020</p>
                        </div>
                        <div className="col-md-6 text-center text-md-right text-gray-400">
                        </div>
                    </div>
                </div>
            </footer>
                   {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default DashBody;