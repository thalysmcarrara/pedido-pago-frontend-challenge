import { PopoverContainer } from './style';
import { MdOutlineVisibility, MdClose } from 'react-icons/md';
import { FiRepeat } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { BsLayers } from 'react-icons/bs';
import Link from 'next/link';

interface EmployeePopoverProps {
  onRequestClose: Function
  roleId: number 
}

export default function RolePopover({ onRequestClose, roleId }: EmployeePopoverProps) {
  return (
    <PopoverContainer>
      <div onClick={() => onRequestClose()}><MdClose /></div>
      <Link href={`/cargos/${roleId}`}>
        <a>
          <MdOutlineVisibility />
          <span>Ver cargo</span>
        </a>
      </Link>
      <button className="disabled">
        <BiEdit />
        <span>Editar</span>
      </button>
      <button className="disabled">
        <BsLayers />
        <span>Duplicar</span>
      </button>
      <button>
        <FiRepeat />
        <span>Excluir</span>
      </button>
    </PopoverContainer>
  )
}