import { Employee } from '../../types';
import { TableContainer } from './style';
import TableBodyRow from './TableBodyRow'
import { MdMoreVert } from 'react-icons/md'

interface EmployeeTableProps {
  employees: Employee[]
}

export default function EmployeeTable({ employees }: EmployeeTableProps) {

  return (
    <TableContainer cellSpacing={0}>
      <thead>
        <tr>
          <th>Nome completo</th>
          <th>Departamento</th>
          <th>Cargo</th>
          <th>Unidade</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <TableBodyRow key={employee.agent_id} isActive={employee.status}>
            <td>
              <img src={employee.image} alt={employee.name} />
              <span>{employee.name}</span>
            </td>
            <td>{employee.department}</td>
            <td>{employee.role}</td>
            <td>{employee.branch}</td>
            <td>
              <span>{employee.status}</span>
            </td>
            <td><MdMoreVert /></td>
          </TableBodyRow>
        ))}
      </tbody>
    </TableContainer>
  )
}