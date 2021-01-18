const Eshedule = () => {
    return(
        <>

        <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
            <style>
                {
                    `
                        
                    `
                }
            </style>
            {/* Create eschedule section */}
            <div className="row m-1 p-3">
                <div className="col col-11 mx-auto">
                <div className="row bg-white rounded shadow-sm p-2 add-eschedule-wrapper align-items-center justify-content-center">
                    <div className="col">
                    <input className="form-control form-control-lg border-0 add-eschedule-input bg-transparent rounded" type="text" placeholder="Add new .." />
                    </div>
                    <div className="col-auto m-0 px-2 d-flex align-items-center">
                    <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                    <i className="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom" title="Set a Due date" />
                    <i className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none" data-toggle="tooltip" data-placement="bottom" title="Clear Due date" />
                    </div>
                    <div className="col-auto px-0 mx-0 mr-2">
                    <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-2 mx-4 border-black-25 border-bottom" />
            {/* eschedule list section */}
            <div className="row mx-1 px-5 pb-3 w-80">
                <div className="col mx-auto">
                {/* eschedule Item 1 */}
                <div className="row px-3 align-items-center eschedule-item rounded">
                    <div className="col-auto m-1 p-0 d-flex align-items-center">
                    <h2 className="m-0 p-0">
                        <i className="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete" />
                        <i className="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as eschedule" />
                    </h2>
                    </div>
                    <div className="col px-1 m-1 d-flex align-items-center">
                    <input type="text" className="form-control form-control-lg border-0 edit-eschedule-input bg-transparent rounded px-3" readOnly defaultValue="Buy groceries for next week" title="Buy groceries for next week" />
                    <input type="text" className="form-control form-control-lg border-0 edit-eschedule-input rounded px-3 d-none" defaultValue="Buy groceries for next week" />
                    </div>
                    <div className="col-auto m-1 p-0 px-3 d-none">
                    </div>
                    <div className="col-auto m-1 p-0 eschedule-actions">
                    <div className="row d-flex align-items-center justify-content-end">
                        <h5 className="m-0 p-0 px-2">
                        <i className="fa fa-pencil text-dark btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit eschedule"></i>
                        </h5>
                        <h5 className="m-0 p-0 px-2">
                        <i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete eschedule"></i>
                        </h5>
                    </div>
                    <div className="row eschedule-created-info">
                        <div className="col-auto d-flex align-items-center pr-2">
                        <i className="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title data-original-title="Created date" />
                        <label className="date-label my-2 text-black-50">28th Jun 2020</label>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>


        </>
    )
}


export default Eshedule;