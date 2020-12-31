import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';
import Button from '../../layouts/Button';

import unclebay from '../../pages/pages-images/ayodele_samuel_adebayo.jpg';
import attachment from '../../pages/pages-images/v.jpg';

export default class TaskDetails extends Component {
  render() {
    return (
      <>
        <section className="py-0">
          <div className="row mb-4">
            <div className="col-lg-12 mb-1">
                <div className="card">
                  <div className="card-header py-3">
                    <header className="">
                      <h4 className="d-flex justify-content-between pace-grey-color">
                        View Task
                          <div className="">
                            <input type="text" className="form-control search-box" placeholder="Search Task" />
                          </div>
                      </h4>
                    </header>
                  </div>
                  <div className="card-body py-1">
                    <div className= "pt-3">
                      <div className="row">
                        <div className="col-md-8">
                          <h4 className="pace-grey-color">Build a new landing page</h4>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group d-flex justify-content-end">
                            <div className="pr-1">
                              <Button 
                                type="submit"
                                label="Accept"
                                className="btn pace-btn-primary py-1 fa fa-check" 
                              />
                            </div>
                            <div className="pr-1">
                              <Button 
                                type="submit"
                                label="Decline"
                                className="btn pace-btn-grey py-1" 
                              />
                            </div>
                            <div className="pr-1">
                            <Button 
                                type="submit"
                                label="Request"
                                className="btn pace-btn-grey py-1 fa fa-times" 
                            />
                            </div>
                          </div>   
                        </div>
                      </div>
                      <hr />
                        <div className="">
                          <div className="row">
                            <div className="col-md-8">
                              <img src={unclebay} alt="sender" className="sender-image mr-2"/>
                              <strong>Zac Doe</strong>
                              <span className="pace-grey-color">[zac@youremail.com]</span> to
                              <strong> me</strong>
                            </div>
                            {/* due date */}
                            <div className="col-md-4">
                              <p className="mr-2"> 10:15AM 02 FEB 2014</p>
                            </div>
                          </div>
                        </div>
                      <hr />
                      {/* TASK DESCRIPTION */}
                      <div className="view-mail">
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quisquam sit debitis harum esse necessitatibus iusto obcaecati unde eligendi perspiciatis et nostrum maxime, earum fugit sequi inventore! Odit, cupiditate velit!
                       </p>
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quisquam sit debitis harum esse necessitatibus iusto obcaecati unde eligendi perspiciatis et nostrum maxime, earum fugit sequi inventore! Odit, cupiditate velit!
                       </p>
                      </div>
                      <div className="attachment-mail ">
                        <p>
                          <span><i className="fa fa-paperclip" /> 2 attachments — </span>
                          <NavLink exact to="/dashboard/task/">
                            Download all attachments
                          </NavLink> 
                          <span className="mx-1"> | </span> 
                          <NavLink exact to="/dashboard/task/">
                            View all images
                          </NavLink>
                          {/* <a href="#">Download all attachments</a> |
                          <a href="#">View all images</a> */}
                        </p>
                        <ul className="attachment-wrapper d-flex">
                          <li>
                            <NavLink exact to="/dashboard/task/" className="attachment-thumb mr-5">
                              <img src={attachment} />
                            </NavLink>
                            <div className="links">
                              <NavLink exact to="/dashboard/task/">
                                View
                              </NavLink>
                              <span> - </span> 
                              <NavLink exact to="/dashboard/task/">
                                Download
                              </NavLink>
                            </div>
                          </li>
                          <li>
                            <NavLink exact to="/dashboard/task/" className="attachment-thumb">
                              <img src={attachment} />
                            </NavLink>
                            <div className="links">
                              <NavLink exact to="/dashboard/task/">
                                View
                              </NavLink>
                              <span> - </span> 
                              <NavLink exact to="/dashboard/task/">
                                Download
                              </NavLink>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="form-group d-flex justify-content-start">
                        <div className="pr-1">
                          <Button 
                                type="submit"
                                label="Accept"
                                className="btn pace-btn-primary py-1 fa fa-check" 
                          />
                        </div>
                        <div className="pr-1">
                          <Button 
                                type="submit"
                                label="Decline"
                                className="btn pace-btn-grey py-1" 
                          />
                        </div>
                        <div className="pr-1">
                          <Button 
                                type="submit"
                                label="Request"
                                className="btn pace-btn-grey py-1 fa fa-times" 
                          />
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>           
      </>
    )
  }
}
