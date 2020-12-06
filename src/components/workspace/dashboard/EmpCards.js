import { React, Component } from 'react';
import Card from './Card';

class EmpCards extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      count: "11",
      url: "",
    }
}
componentDidMount() {
  this.setState  ({
    count: "22"
 })
}
 



  render() {
    const {count, url} = this.state;
    return (
      <section className="py-5">
        <div className="row">
          <Card 
            title="Resume Task"
            type=""
            icon="fa-server"
            cardColor="pace-bg-accent"
            style= {{ }}
          />
          <Card 
            title="View Document"
            type=""
            icon="fa-clipboard"
            cardColor="bg-green"
            style= {{ }}
          />
          <Card 
            title="Upload Document"
            type=""
            icon="fa-dolly-flatbed"
            cardColor="bg-red"
            style= {{ }}
          />
          <Card 
            title="View Tasks"
            type=""
            count={count}
            icon="fa-server"
            cardColor="pace-bg-primary"
            style= {{ }}
          />
        </div>
        
      </section>
    )
  }
}

export default EmpCards;