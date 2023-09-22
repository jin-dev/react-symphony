import React from 'react';
import { Column, useTable } from 'react-table';
import { Link } from 'react-router-dom';

interface DataObject {
  count: number
  expires_at: string
  key: string
  size: string
  subject: string
}


export const CustomizedTable = ({ tableData} :{ tableData:DataObject[]}) => {
    const columns: Column[] = React.useMemo(
      () => [
        {
          Header: "Subject",
          accessor: "key", 
          Cell: ({ row }) => (
            <Link to={`/detail/${row.original?.key}`}>{row.original?.key}</Link>
          ),
        },
        {
          Header: "Subject",
          accessor: "subject",
        },
        {
          Header: "Count",
          accessor: "count",
        },
        {
          Header: "Size",
          accessor: "size",
        },
        {
          Header: "Expires At",
          accessor: "expires_at",
        },
      ],
      []
    )

    const {
      getTableProps, //table props
      getTableBodyProps, //table body props
      headerGroups, //헤더들
      rows, //로우 데이터들
      prepareRow } =
    useTable({ columns, data : tableData })
  

    return (
      <table {...getTableProps}>
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
      </table>
    )
  }