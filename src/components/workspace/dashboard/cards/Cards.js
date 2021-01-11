import { React, Component } from 'react';
import Card from './Card';

class Cards extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <section className="py-5" h='2' data-tut='reactour__taskCards'>
                    <div className="row">
                        
                        <Card
                            
                                title="Complete Task"
                                type=""
                                count="123"
                                icon="fa-server"
                                cardColor="pace-bg-accent"
                                style= {{ }}
                                
                        />
                        <Card
                            
                                title="Pending Task"
                                type=""
                                count="123"
                                icon="fa-server"
                                cardColor="bg-green"
                                style= {{ }}
                        
                        />
                        <Card
                            
                                title="Drafted Task"
                                type=""
                                count="123"
                                icon="fa-server"
                                cardColor="bg-red"
                                style= {{ }}
                        
                        />
                        <Card
                            
                                title="Task Manager"
                                type=""
                                count="Click here"
                                icon="fa-server"
                                cardColor="pace-bg-primary"
                                style= {{ }}
                        
                        />
                    </div>
                </section>
            </>
        )
    }
}


export default Cards;