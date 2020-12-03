import { Component } from "react";

class TodoCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "your todo is currently empty",
            dueDate: Date.now()
        }
    }

    render(){
        const { title, dueDate, cardColor } = this.state;
        return(
            <>
                <div class="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                    <div class="flex-grow-1 d-flex align-items-center">
                        <div class="pace-bg-accent dot mr-3"></div>
                        <div class="text">
                            <h6 class="mb-0">{title}</h6><span class="text-gray">{dueDate}</span>
                        </div>
                    </div>
                </div>

            </>
        )
    };
};


export default TodoCard;