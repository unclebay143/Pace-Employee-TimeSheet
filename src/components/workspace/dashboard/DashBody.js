import { useEffect } from 'react';
import Cards from './Cards';
import EmpCards from './EmpCards';
import NotificationCards from './NotificationCards';
import MostActiveEmployee from './MostActiveEmployee';
import Footer from '../layouts/Footer'

const DashBody = () => {
    useEffect(()=>{
        document.title = 'Company name | dashboard'
    })

    return(
        <>
            <div className="d-flex align-items-stretch">
                <div className="page-holder w-100 d-flex flex-wrap">
                    <div className="container-fluid px-xl-5">
                        {/* <Cards /> */}
                        <EmpCards />
                        <section>
                            <div className="row mb-4">
                                <MostActiveEmployee />
                                <div className="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
                                    <NotificationCards />
                                    <div className="card px-5 py-4">
                                        <h2 className="mb-0 d-flex align-items-center"><span>0 hours</span>
                                        <span className="dot pace-bg-accent d-inline-block ml-3 timer-blink"></span></h2><span className="text-muted">Worked Hours</span>
                                        <div className="chart-holder">
                                            <canvas id="lineChart3" style={{maxHeight: "7rem !important;"}} className="w-100"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                   <Footer />
                </div>
            </div>
        </>
    )
}


export default DashBody;