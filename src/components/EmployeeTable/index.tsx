import { Employee } from '../../types';
import { TableContainer } from './style';
import TableBodyRow from './TableBodyRow'

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
          <TableBodyRow key={employee.agent_id} employee={employee} isActive={employee.status} />
        ))}
      </tbody>
    </TableContainer>
  )
}