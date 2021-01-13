import React, { Component } from 'react';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import { TextInput } from '../../layouts/FormInput';
import { Form, Formik } from 'formik';
import Button from '../../layouts/Button';


export default class Table extends Component {

  render() {
    const { 
      keyField, data, columns, bordered, enableSearch, 
      selectRow, pagination, customInput, customInputName, 
      customInputPlaceHolder, customButtonType, customButtonLabel, 
      customButtonFunction, controlHeader, rowEvents, enableClearSearchButton,
      noDataIndication, filter, rowStyle }= this.props;
    const { SearchBar, ClearSearchButton } = Search;
    const {title} = this.props;
   
    return (
      <>
        <ToolkitProvider
          keyField={keyField}
          data={ data }
          columns={ columns }
          search
        >
          {
            props =>(
              <>
                 
              {/* i had to comment this out, so when you need to use the table pls add a section tag with the classname of py3 */}
                {/* <section className="py-5"> */}
                  <div className="row mb-4">
                    <div className="col-lg-12 mb-1">
                      <div className="card">
                        <div className="card-header">
                          <div className="row">
                            <div className="col-12 d-flex justify-content-between">
                              <h6 className="text-uppercase mb-0 pace-accent-color">{title}</h6>
                              <div className="d-flex align-items-center justify-content-center">
                                {
                                  enableSearch ?
                                   (
                                    <>
                                      <SearchBar { ...props.searchProps } className="search-box form-control mt-0"/>
                                     {
                                       enableClearSearchButton ? 
                                          <ClearSearchButton { ...props.searchProps } className="btn form-control pace-btn-accent my-0 ml-5"/>
                                        :
                                       null
                                      }
                                    </>
                                  )
                                  : ""
                                }

                                {

                                  customInput ? (
                                    <>
                                      <Formik initialValues={{}}>
                                        {(()=>(
                                          <Form className="d-flex">
                                            <TextInput id={customInputName} name={customInputName} placeholder = {customInputPlaceHolder} className="form-control text-sm custom-box" />
                                            <Button type={customButtonType} label={customButtonLabel} onClick={customButtonFunction} className="btn form-contro pace-btn-accent btn-sm" />

                                          </Form>))}
                                      </Formik></>) : ""
                                }
                              </div>
                              <style>
                                {
                                  `
                                    .search-box{
                                      font-size: 18px !important;
                                      width: 202px !important;
                                      height: 35px;
                                      margin-top: 8px;
                                      margin-right: 4px;
                                    }

                                    .custom-box{
                                      font-size: 18px !important;
                                      width: 202px !important;
                                      height: 35px;
                                      margin-right: 4px;
                                    }

                                    .btn{
                                      outline:none;
                                      border:none;
                                    }
                                    
                                    .page-item.active .page-link {
                                      border-radius: 2px;
                                      margin-right: auto;
                                    }

                                    .react-bootstrap-table-pagination-list{
                                      display: flex;
                                      justify-content: flex-end;
                                    }
                                    
                                    #pageDropDown{
                                      background: #335eea;
                                      border: none;
                                    }

                                    .fa-eye{
                                      color: #335eea !important;
                                      cursor: pointer;
                                    }

                                  `
                                }
                              </style>
                            </div>
                          </div>
                        </div>
                        <div className="card-body py-1">
                          <div>
                            <div className="col-12 d-flex">
                              {controlHeader}
                            </div>
                          </div>
                          {/* <hr /> */}
                          <BootstrapTable
                            { ...props.baseProps }
                            bordered={ bordered }
                            pagination={ pagination }
                            selectRow = { selectRow }
                            rowEvents={ rowEvents }
                            noDataIndication={  noDataIndication }
                            filter={ filter }
                            hover
                            rowStyle = { rowStyle }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                {/* </section> */}
              </>
            )
          }
        </ToolkitProvider>
      </>
    )
  }
}
