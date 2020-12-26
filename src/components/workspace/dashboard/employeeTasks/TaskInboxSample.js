import React from 'react'

export default function TaskInboxSample() {
    return (
        <>
            <div className="">
                <section className="card">
                    <header className="card-header wht-bg">
                        <h4 className="gen-case">
                            Inbox (3)
                            <form action="#" className="float-right mail-src-position">
                                <div className="input-append">
                                    <input type="text" className="form-control " placeholder="Search Mail" />
                                </div>
                                </form>
                            </h4>
                            </header>
                            <div className="card-body minimal">
                            <div className="mail-option">
                                <div className="chk-all">
                                <div className="float-left mail-checkbox">
                                    <input type="checkbox" className />
                                </div>
                                <div className="btn-group">
                                    <a data-toggle="dropdown" href="." className="btn mini all">
                                    All
                                    <i className="fa fa-angle-down " />
                                    </a>
                                    <ul className="dropdown-menu">
                                    <li><a href="."> None</a></li>
                                    <li><a href="."> Read</a></li>
                                    <li><a href="."> Unread</a></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="btn-group">
                                <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="." className="btn mini tooltips">
                                    <i className=" fa fa-refresh" />
                                </a>
                                </div>
                                <div className="btn-group hidden-phone">
                                <a data-toggle="dropdown" href="." className="btn mini blue">
                                    More
                                    <i className="fa fa-angle-down " />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="."><i className="fa fa-pencil" /> Mark as Read</a></li>
                                    <li><a href="."><i className="fa fa-ban" /> Spam</a></li>
                                    <li className="divider" />
                                    <li><a href="."><i className="fa fa-trash-o" /> Delete</a></li>
                                </ul>
                                </div>
                                <div className="btn-group">
                                <a data-toggle="dropdown" href="." className="btn mini blue">
                                    Move to
                                    <i className="fa fa-angle-down " />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="."><i className="fa fa-pencil" /> Mark as Read</a></li>
                                    <li><a href="."><i className="fa fa-ban" /> Spam</a></li>
                                    <li className="divider" />
                                    <li><a href="."><i className="fa fa-trash-o" /> Delete</a></li>
                                </ul>
                                </div>
                                <ul className="unstyled inbox-pagination">
                                <li><span>1-50 of 99</span></li>
                                <li>
                                    <a className="np-btn" href="."><i className="fa fa-angle-left  pagination-left" /></a>
                                </li>
                                <li>
                                    <a className="np-btn" href="."><i className="fa fa-angle-right pagination-right" /></a>
                                </li>
                                </ul>
                            </div>
                            <div className="table-inbox-wrap ">
                                <table className="table table-inbox table-hover">
                                <tbody>
                                    <tr className="unread">
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message  dont-show"><a href="mail_view.html">Google Inc.</a></td>
                                    <td className="view-message "><a href="mail_view.html">Your new account is ready.</a></td>
                                    <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip" /></td>
                                    <td className="view-message  text-right">08:10 AM</td>
                                    </tr>
                                    <tr className="unread">
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show"><a href="mail_view.html">Mark Thompson</a></td>
                                    <td className="view-message"><a href="mail_view.html">Last project updates</a></td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">March 15</td>
                                    </tr>
                                    <tr className="unread">
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show"><a href="mail_view.html">Wonder Corp.</a></td>
                                    <td className="view-message"><a href="mail_view.html">Thanks for your registration</a></td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">March 15</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show"><a href="mail_view.html">Facebook</a></td>
                                    <td className="view-message"><a href="mail_view.html">New Friendship Request</a></td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">March 13</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started" /></td>
                                    <td className="view-message dont-show"><a href="mail_view.html">Mark Webber <span className="label label-danger float-right">urgent</span></a></td>
                                    <td className="view-message"><a href="mail_view.html">The server is down</a></td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">March 09</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started" /></td>
                                    <td className="view-message dont-show"><a href="mail_view.html">Facebook</a></td>
                                    <td className="view-message"><a href="mail_view.html">New message from Patrick S.</a></td>
                                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip" /></td>
                                    <td className="view-message text-right">March 08</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started" /></td>
                                    <td className="view-message dont-show">Paypal inc.</td>
                                    <td className="view-message">New payment received</td>
                                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip" /></td>
                                    <td className="view-message text-right">March 04</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show">Andrea <span className="label label-success float-right">girlfriend</span></td>
                                    <td className="view-message view-message">Weekend plans</td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">March 04</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show">David Green</td>
                                    <td className="view-message view-message">Soccer tickets</td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">February 22</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show">Evelyn <span className="label label-info float-right">family</span></td>
                                    <td className="view-message view-message">Surprise party</td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">February 19</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started" /></td>
                                    <td className="view-message dont-show">Martin Moore</td>
                                    <td className="view-message">Hey mate!</td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">February 17</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started" /></td>
                                    <td className="dont-show">Facebook</td>
                                    <td className="view-message">Paul published on your wall</td>
                                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip" /></td>
                                    <td className="view-message text-right">February 14</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show">Steve Stoll</td>
                                    <td className="view-message">Update developed</td>
                                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip" /></td>
                                    <td className="view-message text-right">February 11</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="dont-show">Laura Anton</td>
                                    <td className="view-message view-message">New subscription</td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">January 14</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show">Ryanair</td>
                                    <td className="view-message">Your flight tickets</td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">January 07</td>
                                    </tr>
                                    <tr className>
                                    <td className="inbox-small-cells">
                                        <input type="checkbox" className="mail-checkbox" />
                                    </td>
                                    <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                                    <td className="view-message dont-show">Twitter</td>
                                    <td className="view-message">Password reset</td>
                                    <td className="view-message inbox-small-cells" />
                                    <td className="view-message text-right">January 04</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
