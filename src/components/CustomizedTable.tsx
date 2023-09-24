import React from 'react';
import { Column, useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { BsFillFileTextFill } from 'react-icons/bs';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { TableObject } from '@type/types';
import { CustomHeader, StyledTable, StyledRow, StyledSubRow  } from '@components/styles/StyledComponents';

//define props for the table component
interface CustomizedTableProps {
  tableData: TableObject[];
}

export const CustomizedTable: React.FC<CustomizedTableProps> = ({ tableData }) => {
  const columns: Column<TableObject>[] = React.useMemo(
    () => [
      {
        Header: () => <CustomHeader>Subject</CustomHeader>,
        accessor: 'key',
        //define how data in the 'subject' column should be rendered
        Cell: ({ row }) => (
          <StyledRow>
            <BsFillFileTextFill />
            <StyledSubRow>
              <div>{row.original?.subject}</div>
              {row.original?.key ? (
                <Link to={`/detail/${row.original.key}`}>{row.original.key}</Link>
              ) : null}
            </StyledSubRow>
          </StyledRow>
        ),
      },
      {
        Header: 'Number of Files',
        accessor: 'count',
      },
      {
        Header: 'Size',
        accessor: 'size',
      },
      {
        Header: 'Validity Period',
        accessor: 'expires_at',
      },
      {
        Header: 'Recipients',
        accessor: 'recipients',
         //render the 'recipients' column with icon
        Cell: ({ row }) =>
          row.original?.recipients > 0 ? (
            <AiOutlineTrademarkCircle />
          ) : null,
      },
    ],
    []
  );

  const {
    getTableProps, // table props
    getTableBodyProps, // table body props
    headerGroups, // Headers
    rows, // Row data
    prepareRow,
  } = useTable({ columns, data: tableData });

  //draw table based on received data
  return (
    <StyledTable {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
