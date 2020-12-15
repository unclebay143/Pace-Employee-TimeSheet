import { Link } from 'react-router-dom'


export function HomeButton({className, props}) {
  return (
    <>
        <Link to="/" className="home-icon">
            <i className={`fas fa-home ${className}`}></i>
        </Link> 
    </>
  )
}
