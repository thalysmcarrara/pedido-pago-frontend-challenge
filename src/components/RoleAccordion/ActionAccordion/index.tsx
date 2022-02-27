import { ActionAccordionContainer } from './style';
import { FiFilePlus, FiRepeat } from 'react-icons/fi';
import { MdOutlineVisibility, MdClose } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { BsLayers } from 'react-icons/bs';
import Link from 'next/link';

interface ActionAccordionProps {
  roleId: number
}

export default function ActionAccordion({ roleId }: ActionAccordionProps) {
  return (
    <ActionAccordionContainer className='details-button'>
      <details>
        <summary>
          <div className="summary-items-container">
            <FiFilePlus className='control-file-icon'/>
            <strong>Ações</strong>
          </div>
          <MdClose className='control-expand-icon'/>
        </summary>
        <div className='dropdown'>
          <Link href={`/cargos/${roleId}`}>
            <a className="enabled">
              <MdOutlineVisibility />
              <span>Ver cargo</span>
            </a>
          </Link>
          <Link href="/">
            <a style={{pointerEvents: 'none'}} className="disabled">
              <BiEdit />
              <span>Editar</span>
            </a>
          </Link>
          <Link href="/">
            <a style={{pointerEvents: 'none'}} className="disabled">
              <BsLayers />
              <span>Duplicar</span>
            </a>
          </Link>
          <Link href="/">
            <a style={{pointerEvents: 'none'}} className="disabled">
              <FiRepeat />
              <span>Excluir</span>
            </a>
          </Link>
        </div>
      </details>
    </ActionAccordionContainer>
  )
}