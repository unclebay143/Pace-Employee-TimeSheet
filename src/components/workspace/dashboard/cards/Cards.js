import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authHeader, currentUserCompanyID, currentUserRoleID, currentUserStaffID } from '../../../../services/auth-header';
import { FETCH_TASKS_BY_STATUS_API_URL } from '../../../../services/root-endpoints';
import Card from './Card';

const Cards = () =>{
    const [pendingTasksCounter, setPendingTasksCounter] = useState("0");
    const [completedTasksCounter, setCompletedTasksCounter] = useState("0");
    const [overDureTasksCounter, setOverDueTasksCounter] = useState("0");
    const state = useSelector(state => state.pending)
    useEffect(() => {

        if(currentUserRoleID !== 5){
            // Function that fetch the over pending tasks and set the length
            const fetchPendingTasks = async()=>{
                const response = await axios.get(FETCH_TASKS_BY_STATUS_API_URL + '1/' + currentUserCompanyID, { headers: authHeader }) 
                setPendingTasksCounter(response.data.data.length)
            }
    
            // Function that fetch the over completed tasks and set the length
            const fetchCompletedTasks = async()=>{
                const response = await axios.get(FETCH_TASKS_BY_STATUS_API_URL + '3/' + currentUserCompanyID, { headers: authHeader }) 
                setCompletedTasksCounter(response.data.data.length)
            }
    
            // Function that fetch the over due tasks and set the length
            const fetchOverDueTasks = async()=>{
                const response = await axios.get(FETCH_TASKS_BY_STATUS_API_URL + '4/' + currentUserCompanyID, { headers: authHeader }) 
                setOverDueTasksCounter(response.data.data.length)
            }
            fetchPendingTasks()
            fetchCompletedTasks()
            fetchOverDueTasks()
        }

    }, [])
    return(
        <>
            <section className="py-5" h='2' data-tut='reactour__taskCards'>
                <div className="row">
                    
                    <Card
                        
                        title="Completed Tasks"
                        type=""
                        count={completedTasksCounter}
                        icon="fa-server"
                        cardColor="pace-bg-accent"
                        style= {{ }}
                        url="/dashboard/task/accepted-tasks"
                            
                    />
                    <Card
                        
                        title="Pending Tasks"
                        type=""
                        count={pendingTasksCounter}
                        icon="fa-server"
                        cardColor="bg-green"
                        style= {{ }}
                        url="/dashboard/task/pending-tasks"
                    
                    />
                    <Card
                        
                        title="Overdue Tasks"
                        type=""
                        count={overDureTasksCounter}
                        icon="fa-server"
                        cardColor="bg-red"
                        style= {{ }}
                        url="/dashboard/task-report"
                    
                    />
                    <Card
                        
                        title="Task Manager"
                        type=""
                        count="Click here"
                        icon="fa-server"
                        cardColor="pace-bg-primary"
                        style= {{ }}
                        url="/dashboard/task-report"
                            
                    />
                </div>
            </section>
        </>
    )
}

export default Cards;