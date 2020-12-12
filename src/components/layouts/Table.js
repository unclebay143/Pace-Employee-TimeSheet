import React, { Component } from 'react'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';


export default class Tablee extends Component {

  render() {
    const { keyField, data, columns, bordered, searchName, pagination} = this.props;
    const { SearchBar, ClearSearchButton } = Search;
    const {title, body} = this.props
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
                <section className="py-5">
                  <div className="row mb-4">
                    <div className="col-lg-12 mb-1">
                      <div className="card">
                        <div className="card-header">
                          <div className="row">
                            <div className="col-12 d-flex justify-content-between">
                              <h6 className="text-uppercase mb-0 pace-accent-color">{title}</h6>
                              {/* search name is removed */}
                              {/* <h3>Search {searchName} </h3> */}
                              <div className="d-flex align-items-center justify-content-center">
                                <SearchBar { ...props.searchProps } />  
                                <ClearSearchButton { ...props.searchProps } className="btn pace-btn-accent ml-2"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          {body}
                          <hr />
                          <BootstrapTable
                            { ...props.baseProps }
                            bordered={ bordered }
                            pagination={ pagination }
                            hover
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )
          }
        </ToolkitProvider>
      </>
    )
  }
}
