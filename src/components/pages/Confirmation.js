import { React, useEffect } from 'react';
import sendImage from '../../components/pages/pages-images/mailsent.svg';
import mailAnimation from '../../components/pages/pages-images/mailAnimation.gif';
import { Link } from 'react-router-dom';



export default function Confirmation() {
    useEffect(() => {
        
        return () => {
            document.title = "Mail confirmation"
        }
    }, [])
    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <div className="row confirmation-wrapper">
                    <div className="col-12 text-center">
                        {/* <img src={sendImage} alt="message sent successfully" /> */}
                        <img src={mailAnimation} alt="message sent successfully" />
                    </div>
                    <div className="col-12 text-center">
                        <h2 className="mt-3 text-center">Message Sent</h2>
                        <p>A mail containing a link to reset your password has been sent to your registered email</p>
                        <p>Return <Link to="/">Home</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
