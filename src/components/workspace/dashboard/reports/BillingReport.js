import React from 'react';
import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useSelector } from 'react-redux';
import { TextInput } from '../../../layouts/FormInput';

const calc = 2;

const Header = [
  {
    dataField: 'id',
    text: 'S/N'
  },
  {
    dataField: 'firstname',
    text: 'Firstname',
  },
  {
    dataField: 'lastname',
    text: 'Lastname',
  },
  {
    dataField: 'department',
    text: 'Department',
  },
  {
    dataField: 'role',
    text: 'Role',
  },
  {
    dataField: 'workedHour',
    text: 'Worked Hour',
  },
  {
    dataField: 'workedHour',
    text: 'Receivable',
  },
    
  {
  
    formatter: (cellContent, row) => {
      return (
        <>
            <tr></tr>
        </>
      );
    },
  },

];


// function handleDelete(rowId){
//   console.log(rowId);
// };


const BillingReport = () => {
    const usersDetails = useSelector(state => state.timerReport)  
    // this.handleCalculate = this.handleCalculate.bind(this)
    const handleCalculate = () =>{
        return(
            console.log(usersDetails)
            // alert(usersDetails)
        )
    }

    return (
        <div className="container-fluid py-5">
          <Table
            keyField='id'
            title="Billing Report"
            data={usersDetails}
            columns={Header}
            bordered= { false }
            pagination = { paginationFactory() }
            customInput = { true }
            customInputName = "expectedWorkHour"
            customInputPlaceHolder = "Expected WorkHour"
            customButtonType="button"
            customButtonLabel="Calculate"
            customButtonFunction={handleCalculate()}
          />
        </div>
    )
}

export default BillingReport;