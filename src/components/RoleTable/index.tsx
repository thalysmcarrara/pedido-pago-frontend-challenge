import { v1 as uuidv1 } from 'uuid';
import { role } from '../../types';
import { TableContainer } from './style';
import TableBodyRow from './TableBodyRow'
import { MdMoreVert } from 'react-icons/md'

interface RoleTableProps {
  roles: role[]
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
          <TableBodyRow key={uuidv1()}>
            <td>
              <span>{role.name}</span>
            </td>
            <td>{role.departament}</td>
            <td>{role.agents_quantity}</td>
            <td><MdMoreVert /></td>
          </TableBodyRow>
        ))}
      </tbody>
    </TableContainer>
  )
}