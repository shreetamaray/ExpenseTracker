import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 70%;
  margin-bottom: 1.5em;
  @media screen and (max-width:800px) {
    width:90%;
    margin: 1em auto;
  }

  thead {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  thead th {
    background-color: #1d96b2;
    border: 1px solid #1d96b2;
    font-weight: normal;
    text-align: center;
    color: white;
    :first-of-type {
      text-align: left;
    }
  }

  tbody tr {
    margin-bottom: 1em;
    border: 2px solid #1d96b2;
    :last-of-type {
      margin-bottom: 0;
      text-align: right;
    }
  }

  tbody, tr, td, th {
    display: block;
    padding: 0;
    text-align: left;
    white-space: normal;
  }

  th, td {
    padding: .5em;
    vertical-align: middle;
  }

  tbody th[scope="row"] {
    background-color: #1d96b2;
    color: white;
  }

  tbody td[data-title=Edit] {
    cursor: pointer;
  }

  tbody td {
    text-align: right;
    border-bottom: 1px solid #1d96b2;
  }

  tbody td[data-title]:before {
    content: attr(data-title);
    float: left;
    font-size: .8em;
    color: rgba(94, 93, 82, 0.75);
  }

  @media (min-width: 52em) {
    
    font-size: .9em;
    margin: 0 auto;
    
    thead {
      position: relative;
      clip: auto;
      height: auto;
      width: auto;
      overflow: auto;
    }
    tr {
      display: table-row;
    }
    th, td {
      display: table-cell;
      padding: .5em;
    }

    tbody {
      display: table-row-group;
    }
    tbody tr {
      display: table-row;
      border-width: 1px;
    }
    tbody tr:nth-of-type(even) {
      background-color: rgba(94, 93, 82, 0.1);
    }
    tbody th[scope="row"] {
      background-color: transparent;
      color: #5e5d52;
      text-align: left;
    }
    tbody td {
      text-align: center;
    }

    tbody td[data-title]:before {
      content: none;
    }
  }
  @media (min-width: 62em) {
    
      font-size: 1em;
      margin: 0 auto;
    
    th, td {
      padding: .75em .5em;
    }
  }
  
  @media (min-width: 75em) {
    th, td {
      padding: .75em;
    }
  }

`;

const TableMarkup = ({ editSelectedExpense, data }) => (
  <StyledTable>
    <thead>
      <tr>
        <th> Expense Name </th>
        <th> Amount Spent </th>
        <th> Date </th>
        <th> Edit </th>
      </tr>
    </thead>
    <tbody>
      {data.map((expense) => (
        <tr key={expense.id}>
          <th scope="row">{expense.name}</th>
          <td data-title="Amount">{expense.amount}</td>
          <td data-title="Date">{expense.date}</td>
          <td data-title="Edit"><i className="fa fa-edit" onClick={() => editSelectedExpense(expense)}></i></td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default ({ data, editSelectedExpense }) => (
  <TableMarkup editSelectedExpense={editSelectedExpense} data={data} />
);
