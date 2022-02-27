import React, { ReactElement } from 'react';
import { TableRow } from './style';

interface TableBodyRowProps {
  children: ReactElement[]
}

export default function TableBodyRow({children}: TableBodyRowProps) {
  return (
    <>
      <TableRow>
        {children}
      </TableRow>
    </>
  )
}