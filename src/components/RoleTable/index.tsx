import { v1 as uuidv1 } from 'uuid';
import { Role } from '../../types';
import { TableContainer } from './style';
import TableBodyRow from './TableBodyRow'

interface RoleTableProps {
  roles: Role[]
}

export default function RoleTable({ roles }: RoleTableProps) {

  return (
    <TableContainer cellSpacing={0}>
      <thead>
        <tr>
          <th>Cargo</th>
          <th>Departamento</th>
          <th>Colaboradores</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <TableBodyRow key={uuidv1()} role={role} />
        ))}
      </tbody>
    </TableContainer>
  )
}