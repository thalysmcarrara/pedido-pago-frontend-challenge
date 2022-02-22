import React, { ReactElement } from 'react';
import { TableBodyRowActive, TableBodyRowInactive } from './style';

interface TableBodyRowProps {
  isActive: string
  children: ReactElement[]
}

export default function TableBodyRow({ children, isActive }: TableBodyRowProps) {
  return (
    <>
      {isActive === 'active' ?
        <TableBodyRowActive>
          {children}
        </TableBodyRowActive> :
        <TableBodyRowInactive>
          {children}
        </TableBodyRowInactive>
        }
    </>
  )
}