import { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { MdExpandMore } from 'react-icons/md';
import { FiRefreshCcw} from 'react-icons/fi';
import ActionAccordion from './ActionAccordion';
import { AccordionContainer, ShowMoreButtonContainer } from './style';
import { Role } from '../../types';

interface RoleAccordionProps {
  roles: Role[]
}

export default function RoleAccordion({ roles }: RoleAccordionProps) {
  const [quantityToShow, setQuantityToShow] = useState(5)

  const itemsPerPage = 5

  const handleEmployeeToShow = () => {
    setQuantityToShow((prevQuantity) => {
      const diference = roles.length - prevQuantity
      if(diference === 0) {
        return 5
      }

      if(diference < 5) {
        return prevQuantity + diference
      } else {
        return prevQuantity + itemsPerPage
      }
    })
  }
  return (
    <AccordionContainer>
      {
        roles.slice(0, quantityToShow).map((role) => (
          <details key={uuidv1()} className="details-parent">
            <summary className='summary-parent'>
              <div className="item-container">
                <strong>Cargo</strong>
                <span>{role.name}</span>
              </div>
              <div className="item-container hidden">
                <strong>Departamento</strong>
                <span>{role.departament}</span>
              </div>
              <MdExpandMore />
            </summary>
            <div className="alone-row">
              <strong>Colaboradores</strong>
              <span>{role.agents_quantity}</span>
            </div>
            <ActionAccordion roleId={1}/>
          </details>
        ))
      }
      <ShowMoreButtonContainer onClick={handleEmployeeToShow}>
        <div className="button-content">
          <FiRefreshCcw />
          <strong>Carregar {roles.length === quantityToShow ? 'Menos' : 'Mais'}</strong>
        </div>
      </ShowMoreButtonContainer>
    </AccordionContainer>
  )
}
