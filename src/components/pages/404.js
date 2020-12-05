import { Component, useEffect } from "react";
import { Link }  from "react-router-dom";
import './pages-styles/404.css';

class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {
            surname: "",
            test: "samuel is coming home"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    
    
    handleChange(e){
        this.setState({
                    surname: e.target.value
            })
            if(this.state.surname === this.state.test){
                console.log("nice")
            }
            if(this.state.surname !== this.state.test){
                console.log("error")
            }

            }
    
    
    handleSubmit(e){
        e.preventDefault();
        console.log("something is ", this.state.surname)

        this.setState({
            surname: ""
        })
    }
        render(){

            const { handleSubmit, handleChange} = this
            const { surname } = this.state
            return(
                <>
                    <form onSubmit={handleSubmit}>
            <h4>{surname}</h4>
                        <input onChange={handleChange} name="surname" value={this.state.surname} placeholder="enter surname"/>
                        <button>Submit</button>
                    </form>
                </>
            )
        }
}

const PageNotFound = () => {

    useEffect(()=>{
        document.title = 'Page not found | 404'
      })
      
    return(
        <>
            <div className="pageNotFound-wrapper">
                <div className="errorWrapper">
                    <h4 className="error404">404</h4> 
                    <p className="errorText">
                        You've clicked a broken link....let's get you back on track <Link to="/">Go Home</Link>
                    </p>
                    <Forms />
                </div>
            </div>

        </>
    )
}



export default PageNotFound;