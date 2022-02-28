import React, { useState } from 'react';
import { MdMoreVert } from 'react-icons/md'
import { TableBodyRowActive, TableBodyRowInactive } from './style';
import EmployeePopover from '../EmployeePopover';
import { Employee } from '../../../types';

interface TableBodyRowProps {
  isActive: string
  employee: Employee
}

export default function TableBodyRow({ employee, isActive }: TableBodyRowProps) {
  const [isOpenPopOver, setIsOpenPopover] = useState(false);

  const onRequestClose = () => {
    setIsOpenPopover(!isOpenPopOver)
  }

  return (
    <>
      {isActive === 'active' ?
        <TableBodyRowActive>
          <td>
            <img src={employee.image} alt={employee.name} />
            <span data-testid="employee-name">{employee.name}</span>
          </td>
          <td>{employee.department}</td>
          <td>{employee.role}</td>
          <td>{employee.branch}</td>
          <td>
            <span>{employee.status}</span>
          </td>
          <td>
            <MdMoreVert data-testid="popover-button" onClick={() => setIsOpenPopover(!isOpenPopOver)}/>
            {isOpenPopOver ? <EmployeePopover  employeeId={employee.agent_id} onRequestClose={onRequestClose} /> : ''}
          </td>
        </TableBodyRowActive> :
        <TableBodyRowInactive>
          <td>
            <img src={employee.image} alt={employee.name} />
            <span data-testid="employee-name">{employee.name}</span>
          </td>
          <td>{employee.department}</td>
          <td>{employee.role}</td>
          <td>{employee.branch}</td>
          <td>
            <span>{employee.status}</span>
          </td>
          <td>
            <MdMoreVert data-testid="popover-button" onClick={() => setIsOpenPopover(!isOpenPopOver)}/>
            {isOpenPopOver ? <EmployeePopover  employeeId={employee.agent_id} onRequestClose={onRequestClose} /> : ''}
          </td>
        </TableBodyRowInactive>
        }
    </>
  )
}