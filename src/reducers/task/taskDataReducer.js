// this is just a page to hold the dummy data...will get rid of it once we start fetching data from the API

import axios from "axios";

// http://fakerestapi.azurewebsites.net/api/v1/Activities

export const allTasks = [
  {
    id: '1',
    subject: 'testing1',
    dueDate: '14/06/21',
    file: 'attachment' // will change this to icon for attaaachment
  },
  {
    id: '2',
    subject: 'testing2',
    dueDate: '18/11/21',
    file: 'attachment'
  },
]
// [axios.get('http://fakerestapi.azurewebsites.net/api/v1/Activities')
// .then(res => res.data)]



export const acceptedTasks = [
    {
        id: '1',
        task: 'testing',
        dueDate: '12/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '2',
        task: 'testing2',
        dueDate: '14/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '3',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '4',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '5',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '6',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '7',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '8',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '9',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '10',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '11',
        task: 'testing111',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      }
]
