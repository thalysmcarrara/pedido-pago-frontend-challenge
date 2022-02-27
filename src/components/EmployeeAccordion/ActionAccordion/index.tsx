import { ActionAccordionContainer } from './style';
import { FiFilePlus } from 'react-icons/fi';
import { MdOutlineVisibility, MdClose } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import Link from 'next/link';

interface ActionAccordionProps {
  employeeId: number
}

export default function ActionAccordion({ employeeId }: ActionAccordionProps) {
  return (
    <ActionAccordionContainer className="details-button">
      <details>
        <summary>
          <div className="summary-items-container">
            <FiFilePlus className='control-file-icon'/>
            <strong>Ações</strong>
          </div>
          <MdClose className="control-expand-icon"/>
        </summary>
        <div className="dropdown">
          <Link href={`/employee/${employeeId}`}>
            <a className="enabled">
              <MdOutlineVisibility />
              <span>Ver colaborador</span>
            </a>
          </Link>
          <Link href="/">
            <a style={{pointerEvents: 'none'}} className="disabled">
              <FaRegTrashAlt />
              <span>Excluir</span>
            </a>
          </Link>
        </div>
      </details>
    </ActionAccordionContainer>
  )
}