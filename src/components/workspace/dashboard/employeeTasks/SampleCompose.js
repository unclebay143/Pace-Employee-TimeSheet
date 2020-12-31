import React from 'react'

export default function SampleCompose() {
    return (
        <div>
            <div className="">
                <div className="col task-util compose-task">
                    <section className="card">
                        <header className="card-header wht-bg">
                            <h4 className="gen-case">
                                Assign Task
                            </h4>
                        </header>
                        <div className="card-body">
                            <div className="compose-btn-wrapper">
                                <button className="btn btn-theme btn-sm"><i className="fa fa-check" /> Send</button>
                                <button className="btn btn-sm special ml-2 mr-2"><i className="fa fa-times" /> Discard</button>
                                <button className="btn btn-sm special">Draft</button>
                            </div>
                            <div >
                            <form role="form-horizontal" method="post">
                                <div className="form-group">
                                    <label htmlFor="to" className="">To:</label>
                                    <input type="text" id="to" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject:</label>
                                    <input type="text" id="subject" className="form-control" />
                                </div>
                                <div className="compose-btn">
                                    <label htmlFor="subject" className>Task description:</label>
                                    <textarea className="form-control" rows={4} defaultValue={""} />
                                    <div className="mt-3">
                                        <div>
                                            <p>Due Date</p>
                                            <input type="datetime-local" className="form-control"/>
                                        </div>
                                        <div className="mt-3">
                                            <p>Attachment</p>
                                            <input type="file" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compose-btn mt-4">
                                    <button className="btn btn-theme btn-sm"><i className="fa fa-check" /> Send</button>
                                    <button className="btn btn-sm special ml-2 mr-2"><i className="fa fa-times" /> Discard</button>
                                    <button className="btn btn-sm special">Draft</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
