import React from 'react';
import { Column, useTable } from 'react-table';
import { Link } from 'react-router-dom';
import {BsFillFileTextFill } from 'react-icons/bs';
import {AiOutlineTrademarkCircle } from 'react-icons/ai';
import styled from 'styled-components';
interface DataObject {
  count: number
  expires_at: string
  key: string
  size: string
  subject: string
}

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledSubRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left:10px;
  
`
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
`;


export const CustomizedTable = ({ tableData} :{ tableData:DataObject[]}) => {
    const columns: Column[] = React.useMemo(
      () => [
        {
          Header: "Subject",
          accessor: "key", 
          Cell: ({ row }) => (
            <StyledRow>
            <BsFillFileTextFill/>
            <StyledSubRow>
            <div>{row.original?.subject}</div>
            <Link to={`/detail/${row.original?.key}`}>{row.original?.key}</Link>
            </StyledSubRow>
            </StyledRow>
          ),
        },
        {
          Header: "Number of Files",
          accessor: "count",
        },
        {
          Header: "Size",
          accessor: "size",
        },
        {
          Header: "Validity Period",
          accessor: "expires_at",
        },
        {
          Header: "Recipients",
          accessor: "recipients",
          Cell: ({ row }) =>
            row.original?.recipients.length === 0 ? null : (
              <AiOutlineTrademarkCircle />
            ),
        },
      ],
      []
    );

    const {
      getTableProps, //table props
      getTableBodyProps, //table body props
      headerGroups, //헤더들
      rows, //로우 데이터들
      prepareRow } =
    useTable({ columns, data : tableData })
  

    return (
      <StyledTable {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    )
  }