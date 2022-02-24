import { PopoverContainer } from './style';
import { MdOutlineVisibility, MdClose } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';

interface EmployeePopoverProps {
  onRequestClose: Function
}

export default function EmployeePopover({ onRequestClose }: EmployeePopoverProps) {
  return (
    <PopoverContainer>
      <div onClick={() => onRequestClose()}><MdClose /></div>
      <button>
        <MdOutlineVisibility />
        <span>Ver colaborador</span>
      </button>
      <button>
        <FaRegTrashAlt />
        <span>Excluir</span>
      </button>
    </PopoverContainer>
  )
}