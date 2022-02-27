import { v1 as uuidv1 } from 'uuid';
import { GroupRule } from '../../types';
import { TableContainer } from './style';
import TableBodyRow from './TableBodyRow';
import Checkbox from './Checkbox';

interface RolePermissionsTableProps {
  roles: GroupRule[]
}

export default function RolePermissionsTable({ roles }: RolePermissionsTableProps) {
  return (
    <TableContainer cellSpacing={0}>
      <thead>
        <tr>
          <th>Cargo</th>
          <th>Ler</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {roles.map(({ role, permissions }) => (
          <TableBodyRow key={uuidv1()}>
            <td>
              <span>{role}</span>
            </td>
            <td><Checkbox permissionType="read" permissions={permissions} id={`${role}-read`}/></td>
            <td><Checkbox permissionType="write" permissions={permissions} id={`${role}-write`}/></td>
            <td><Checkbox permissionType="delete" permissions={permissions} id={`${role}-delete`}/></td>
          </TableBodyRow>
        ))}
      </tbody>
    </TableContainer>
  )
}