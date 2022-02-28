import { PopoverContainer } from './style';
import { MdOutlineVisibility, MdClose } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
// import { useRouter } from 'next/router';

interface EmployeePopoverProps {
  onRequestClose: Function
  employeeId: number 
}

export default function EmployeePopover({ onRequestClose, employeeId }: EmployeePopoverProps) {

  // const onNavigate = () => {
  //   const router = useRouter()

  //   router.push(`/employee/${employeeId}`)
  // }
  return (
    <PopoverContainer>
      <div data-testid="close-popup-button" onClick={() => onRequestClose()}><MdClose /></div>
      <Link href={`/employee/${employeeId}`}>
        <a>
          <MdOutlineVisibility />
          <span>Ver colaborador</span>
        </a>
      </Link>
      <button>
        <FaRegTrashAlt />
        <span>Excluir</span>
      </button>
    </PopoverContainer>
  )
}