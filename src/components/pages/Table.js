import React, { Component } from 'react';
import ToolkitProvider, {search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';


class Table extends Component {
  render() {
    const { keyField, data, columns, bordered} = this.props;
    return (
      <div>
        <ToolkitProvider
          keyField={keyField}
          data={ data }
          columns={ columns }
          search
        >
          {
            props =>
              <BootstrapTable 
                { ...props.baseProps }
                bordered={ bordered }
                hover
              />
          }
        </ToolkitProvider>
      </div>
    )
  }
}


export default Table;


// props =>(
//   <div>
//     <h3>Search here </h3>
//     <SearchBar { ...props.searchProps } />
//     <hr />
//     <BootstrapTable
//       { ...props.baseProps }
//     />
//   </div>
// )