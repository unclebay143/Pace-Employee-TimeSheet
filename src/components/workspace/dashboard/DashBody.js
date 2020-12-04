import Cards from './Cards';
import NotificationCards from './NotificationCards';
import Footer from '../layouts/Footer'
import MostActiveEmployee from './MostActiveEmployee';

const DashBody = () => {
    return(
        <>
             <div class="d-flex align-items-stretch">
                <div class="page-holder w-100 d-flex flex-wrap">
                    <div class="container-fluid px-xl-5">
                        <Cards />
                        <section>
                            <div class="row mb-4">
                                <MostActiveEmployee />
                                <div class="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
                                    <NotificationCards />
            
                                    <div class="card px-5 py-4">
                                        <h2 class="mb-0 d-flex align-items-center"><span>0 hours</span>
                                        <span class="dot pace-bg-accent d-inline-block ml-3 timer-blink"></span></h2><span class="text-muted">Worked Hours</span>
                                        <div class="chart-holder">
                                            <canvas id="lineChart3" style={{maxHeight: "7rem !important;"}} class="w-100">      </canvas>
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