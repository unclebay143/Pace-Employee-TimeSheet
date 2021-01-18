// React
import { React, useEffect } from "react";
import { useSelector } from "react-redux";
const CardTemplate = ({title, dueDate}) =>{

    return(
        <div className="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
            <div className="flex-grow-1 d-flex align-items-center">
                <div className="pace-bg-accent dot mr-3"></div>
                <div className="text">
                    <h6 className="mb-0">{ title }</h6><span className="text-gray">{ dueDate }</span>
                </div>
            </div>
        </div>
    )
}

const TodoCard = () =>{
  
    const { todos } = useSelector((state)=>state.todos);
    const { title, dueDate } = todos[0];
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // Convert the DueDate to Day, Month date, year format
    const formatedDueDate = new Date(dueDate).toLocaleDateString("en-US", options);
        
    return(
        <CardTemplate title={title} dueDate={formatedDueDate} />
    )
};


export default TodoCard;