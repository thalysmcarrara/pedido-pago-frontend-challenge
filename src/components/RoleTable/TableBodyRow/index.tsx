import { useState } from 'react';
import { TableRow } from './style';
import RolePopover from '../RolePopover';
import { MdMoreVert } from 'react-icons/md';
import { Role } from '../../../types';

interface TableBodyRowProps {
  role: Role
}

export default function TableBodyRow({role}: TableBodyRowProps) {
  const [isOpenPopOver, setIsOpenPopover] = useState(false);

  const onRequestClose = () => {
    setIsOpenPopover(!isOpenPopOver)
  }
  return (
    <TableRow>
      <td>
        <span>{role.name}</span>
      </td>
      <td>{role.departament}</td>
      <td>{role.agents_quantity}</td>
      <td>
        <MdMoreVert onClick={() => setIsOpenPopover(!isOpenPopOver)}/>
        {isOpenPopOver ? <RolePopover  roleId={1} onRequestClose={onRequestClose} /> : ''}
      </td>
    </TableRow>
  )
}