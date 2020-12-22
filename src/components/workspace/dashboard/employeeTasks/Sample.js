import React from 'react';
import unclebay from '../../../pages/pages-images/ayodele_samuel_adebayo.jpg';
import attachment from '../../../pages/pages-images/v.jpg';

export default function Sample() {
  
  return (
    <>
      <div className="col task-util">
        <section className="card">
          <header className="card-header wht-bg">
            <h4 className="d-flex justify-content-between task-page-lead">
              View Task
              <form action="#" className="float-right mail-src-position">
                <div className="input-append">
                  <input type="text" className="form-control search-box" placeholder="Search Mail" />
                </div>
              </form>
            </h4>
          </header>
          <div className="card-body">
            <div className="mail-header row">
              <div className="col-md-8">
                <h4 className="float-left task-title">Build a new landing page</h4>
              </div>
              <div className="col-md-4">
                <div className="compose-btn float-right">
                  <a href="mail_compose.html" className="btn btn-sm btn-theme"><i className="fa fa-reply" /> Reply</a>
                  <button className="btn  btn-sm tooltips" data-original-title="Print" type="button" data-toggle="tooltip" data-placement="top" title><i className="fa fa-print" /> </button>
                  <button className="btn btn-sm tooltips" data-original-title="Trash" data-toggle="tooltip" data-placement="top" title><i className="fa fa-trash" /></button>
                </div>
              </div>
            </div>
            <hr />
            <div className="mail-sender">
              <div className="row">
                <div className="col-md-8">
                  <img src={unclebay} alt="sender" className="sender-image mr-2"/>
                  <strong>Zac Doe</strong>
                  <span>[zac@youremail.com]</span> to
                  <strong>me</strong>
                </div>
                <div className="col-md-4">
                  <p className="date float-right mr-2"> 10:15AM 02 FEB 2014</p>
                </div>
              </div>
            </div>
              <hr />
            <div className="view-mail">
              <p>As he bent his head in his most courtly manner, there was a secrecy in his smiling face, and he conveyed an air of mystery to those words, which struck the eyes and ears of his nephew forcibly. At the same time, the thin straight lines
                of the setting of the eyes, and the thin straight lips, and the markings in the nose, curved with a sarcasm that looked handsomely diabolic. </p>
              <p>"Yes," repeated the Marquis. "A Doctor with a daughter. Yes. So commences the new philosophy! You are fatigued. Good night!"</p>
              <p>It would have been of as much avail to interrogate any stone face outside the chateau as to interrogate that face of his. The nephew looked at him, in vain, in passing on to the door. </p>
              <p>"Good night!" said the uncle. "I look to the pleasure of seeing you again in the morning. Good repose! Light Monsieur my nephew to his chamber there!--And burn Monsieur my nephew in his bed, if you will," he added to himself, before
                he rang his little bell again, and summoned his valet to his own bedroom.</p>
            </div>
            <div className="attachment-mail ">
              <p>
                <span><i className="fa fa-paperclip" /> 2 attachments — </span>
                <a href="#">Download all attachments</a> |
                <a href="#">View all images</a>
              </p>
              <ul className="attachment-wrapper d-flex">
                <li>
                  <a className="attachment-thumb mr-3" href="#">
                    <img src={attachment} />
                  </a>
                  {/* <a className="name" href="#">
                    IMG_001.jpg
                    <span>20KB</span>
                  </a> */}
                  <div className="links">
                    <a href="#">View</a> -
                    <a href="#">Download</a>
                  </div>
                </li>
                <li>
                  <a className="attachment-thumb" href="#">
                    <img src={attachment} />
                  </a>
                  {/* <a className="name" href="#">
                    IMG_001.jpg
                    <span>20KB</span>
                  </a> */}
                  <div className="links">
                    <a href="#">View</a> -
                    <a href="#">Download</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="compose-btn float-left">
              <a href="mail_compose.html" className="btn btn-sm btn-theme"><i className="fa fa-reply"/> Reply</a>
              <button className="btn btn-sm "><i className="fa fa-arrow-right" /> Forward</button>
              <button className="btn  btn-sm tooltips" data-original-title="Print" type="button" data-toggle="tooltip" data-placement="top" title><i className="fa fa-print" /> </button>
              <button className="btn btn-sm tooltips" data-original-title="Trash" data-toggle="tooltip" data-placement="top" title><i className="fa fa-trash-o" /></button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
