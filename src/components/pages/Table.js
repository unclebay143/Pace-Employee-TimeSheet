import React, { Component } from 'react';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
// import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';


class Table extends Component {
  render() {
    const { keyField, data, columns, bordered, searchName, pagination} = this.props;
    const { SearchBar, ClearSearchButton } = Search;
    return (
      <div>
        <ToolkitProvider
          keyField={keyField}
          data={ data }
          columns={ columns }
          search
        >
         
          {
            props =>(
              <div>
                <h3>Search {searchName} </h3>
                <SearchBar { ...props.searchProps } />
                <ClearSearchButton { ...props.searchProps } />
                <hr />
                <BootstrapTable
                  { ...props.baseProps }
                  bordered={ bordered }
                  pagination={ pagination }
                  hover
                />
              </div>
            )
          }
        </ToolkitProvider>
      </div>
    )
  }
}


export default Table;


