import React from 'react';
import oneStep from '../../components/pages/pages-images/oneStep.svg';

export default function NewStaffPassword() {
    return (
        <>
            <div>
                <style>
                    {
                        `
                            body{
                                // background-color:#5286F3;
                                font-size:14px;
                                color:#fff;
                            }
                            .simple-login-container{
                                width:400px;
                                max-width:100%;
                                margin:100px auto;
                            }
                            .simple-login-container h2{
                                text-align:center;
                                font-size:20px;
                            }
                            
                            .simple-login-container .btn-login{
                                // background-color:#FF5964;
                                color:#fff;
                            }
                            a{
                                color:#fff;
                            }
                            .one-step{
                                width: 200px;
                                padding: 10px;
                                max-width: 100%;
                                margin-left: 100px;
                                // height: auto;
                            }
                        `
                    }
                </style>
                <div className="simple-login-container">
                    {/* <img src={oneStep} alt="one step closer" className="img-fluid one-step"></img> */}
                    <h2 className="mb-5 text-dark">You're one step closer to getting on board</h2>
                    <div className="row">
                    <div className="col-md-12 form-group">
                        <input type="password" className="form-control" placeholder="Create Password" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 form-group">
                        <input type="password" placeholder="Confirm Password" className="form-control" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 form-group">
                        <input type="submit" className="btn btn-block btn-login pace-btn-primary" placeholder="  " />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        {/* <a href="https://1.envato.market/ydVvD">Download Best Theme</a> */}
                    </div>
                    </div>
                </div>
            </div>


        </>
    )
}
