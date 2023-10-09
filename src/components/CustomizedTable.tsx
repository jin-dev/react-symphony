/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import styled from 'styled-components';
import { Column, useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { BsFillFileTextFill } from 'react-icons/bs';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { TableObject } from '@type/types';

// define props for the table component
interface CustomizedTableProps {
    tableData: TableObject[];
}

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledSubRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
`;
export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th,
    td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
`;

export const CustomHeader = styled.th`
    display: flex;
    justify-content: flex-start;
    border-bottom: none !important;
`;

export const CustomizedTable: React.FC<CustomizedTableProps> = ({ tableData }) => {
    const columns: Column<TableObject>[] = React.useMemo(
        () => [
            {
                Header: () => <CustomHeader>Subject</CustomHeader>,
                accessor: 'key',
                // define how data in the 'subject' column should be rendered
                // copy function :copy the key value when title of the item is clicked
                // navigate to detail page when URL is clicked
                Cell: ({ row }) => (
                    <StyledRow>
                        <BsFillFileTextFill />
                        <StyledSubRow>
                            <div
                                onClick={async () => {
                                    if (row.original?.key) {
                                        await navigator.clipboard.writeText(
                                            `localhost/${row.original.key}`
                                        );
                                        alert(`Copied the address of ${row?.original?.key}.`);
                                    }
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                {row.original?.subject}
                            </div>
                            {row.original?.key ? (
                                <Link to={`/detail/${row.original.key}`}>
                                    localhost/{row.original.key}
                                </Link>
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
                // render the 'recipients' column with icon
                Cell: ({ row }) =>
                    row.original?.recipients > 0 ? <AiOutlineTrademarkCircle /> : null,
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

    // draw table based on received data
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
