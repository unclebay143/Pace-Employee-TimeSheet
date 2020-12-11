import { useEffect } from 'react';
import Cards from './cards/Cards';
import EmpCards from './cards/EmpCards';
import NotificationCards from './cards/NotificationCards';
import MostActiveEmployee from './cards/MostActiveEmployee';
import Footer from '../layouts/Footer';
import AssignedTasks from './employeeTasks/AssignedTasks';
import AcceptedTasks from './employeeTasks/AcceptedTasks';
import HourTimerScreen from './cards/HourTimerScreen';


const Index = () => {
    useEffect(()=>{
        document.title = 'Company name | dashboard'
    })

    return(
        <>
            <section>
            {/* >>>>>>>>>>>>>>> CARDS COMPONENT SECTION <<<<<<<<<<<<<< */}
                {/* <EmpCards /> */}
                <Cards />
                <div className="row mb-4">
                    {/* <<<<<<<<<<<<< MOST-ACTIVE COMPONENT SECTION >>>>>>>>>>> */}
                    <MostActiveEmployee />
                    <div className="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
                    {/* <<<<<<<<<<<<< NOTIFICATION COMPONENT SECTION >>>>>>>>>>> */}
                        <NotificationCards />
                        <div className="card px-5 py-4">
                            {/* HOUR-TIMER-SCREEN COMPONENT SECTION */}
                            <HourTimerScreen />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Index;