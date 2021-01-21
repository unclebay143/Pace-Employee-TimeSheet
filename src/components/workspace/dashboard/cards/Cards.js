import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTasks } from '../../../../actions/task/taskAction';
import { authHeader, currentUserCompanyID, currentUserRoleID, currentUserStaffID } from '../../../../services/auth-header';
import { FETCH_TASKS_BY_STATUS_API_URL } from '../../../../services/root-endpoints';
import Card from './Card';

const Cards = () =>{
    const { tasks } = useSelector(state => state.tasks)
    const [taskState, setTaskState] = useState([])
    const [pendingTasksCounter, setPendingTasksCounter] = useState("0");
    const [completedTasksCounter, setCompletedTasksCounter] = useState("0");
    const [overDureTasksCounter, setOverDueTasksCounter] = useState("0");
    const dispatch = useDispatch()


    useEffect(() => {
        // Get tasks
        dispatch(getTasks())

    }, [dispatch])


    useEffect(() => {

        if(currentUserRoleID === 5){ // If the user is an employee run this block

            setTaskState(tasks) // set the TaskState to tasks for the component to know about the update

            // get pending tasks from the tasks redux
            const getPendingTasks = taskState.filter((task)=> task.taskStatus === 1)
            setPendingTasksCounter(getPendingTasks.length)

            // get completed tasks from the tasks redux
            const getCompletedTasks = taskState.filter((task)=> task.taskStatus === 3)
            setCompletedTasksCounter(getCompletedTasks.length)

            // get overdue tasks from the tasks redux
            const getOverDueTasks = taskState.filter((task)=> task.taskStatus === 4)
            setOverDueTasksCounter(getOverDueTasks.length)

        }else{
            // Function that fetch the over pending tasks and set the length
            const fetchPendingTasks = async()=>{
                const response = await axios.get(FETCH_TASKS_BY_STATUS_API_URL + '1/' + currentUserCompanyID, { headers: authHeader }) 
                if(response){
                    setPendingTasksCounter(response.data.data.length)
                }
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

    }, [tasks, taskState])
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