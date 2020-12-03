import { React, Component } from 'react';
import Card from './Card';

class Cards extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <section class="py-5">
                    <div class="row">
                        <Card
                            
                                title="Complete Task"
                                type=""
                                count="123"
                                icon="fa-server"
                                cardColor="pace-bg-accent"
                                style=""
                        
                        />
                        <Card
                            
                                title="Pending Task"
                                type=""
                                count="123"
                                icon="fa-server"
                                cardColor="bg-green"
                                style=""
                        
                        />
                        <Card
                            
                                title="Draft Task"
                                type=""
                                count="123"
                                icon="fa-server"
                                cardColor="bg-red"
                                style=""
                        
                        />
                        <Card
                            
                                title="Task Manager"
                                type=""
                                count="Click here"
                                icon="fa-server"
                                cardColor="pace-bg-primary"
                                style=""
                        
                        />
                    </div>
                </section>
            </>
        )
    }
}


export default Cards;