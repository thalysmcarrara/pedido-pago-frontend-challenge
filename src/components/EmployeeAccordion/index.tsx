import { MdExpandMore } from 'react-icons/md';
import { FiRefreshCcw } from 'react-icons/fi';
import { AccordionContainer, ShowMoreButtonContainer } from './style';
import ActionAccordion from './ActionAccordion';
import { Employee } from '../../types';
import { useState } from 'react';

interface EmployeeAccordionProps {
  employees: Employee[]
}

export default function EmployeeAccordion({ employees }: EmployeeAccordionProps) {
  const [quantityToShow, setQuantityToShow] = useState(5)

  const itemsPerPage = 5

  const handleEmployeeToShow = () => {
    setQuantityToShow((prevQuantity) => {
      const diference = employees.length - prevQuantity
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
        employees.slice(0, quantityToShow).map((employee) => (
          <details key={employee.agent_id}>
            <summary>
              <div className="summary-content-container">
                <strong>Nome completo</strong>
                <div className="summary-data-container control-grayscale">
                  <div className={`img-container ${employee.status === 'active' ? '' : 'control-border-image-color'}`}>
                    <img src={employee.image} alt="profile image" />
                  </div>
                  <span>{employee.name}</span>
                </div>
              </div>
              <MdExpandMore />
            </summary>
            <div className="dropdown">
              <div className="grid-info">
                <div className="grid-item">
                  <strong>Departamento</strong>
                  <span>{employee.department}</span>
                </div>
                <div className="grid-item">
                  <strong>Cargo</strong>
                  <span>{employee.role}</span>
                </div>
                <div className="grid-item">
                  <strong>Unidade</strong>
                  <span>{employee.branch}</span>
                </div>
                <div className="grid-item">
                  <strong>Unidade</strong>
                  <span>{employee.branch}</span>
                </div>
              </div>
              <div className="status-row">
                <strong>Status</strong>
                <div className={`badge ${employee.status === 'active' ? '' : 'control-background-badge'}`}>
                  <strong>{employee.status}</strong>
                </div>
              </div>
              <ActionAccordion employeeId={employee.agent_id} />
            </div>
          </details>
        ))
      }
      <ShowMoreButtonContainer onClick={handleEmployeeToShow}>
        <div className="button-content">
          <FiRefreshCcw />
          <strong>Carregar {employees.length === quantityToShow ? 'Menos' : 'Mais'}</strong>
        </div>
      </ShowMoreButtonContainer>
    </AccordionContainer>
  )
}
