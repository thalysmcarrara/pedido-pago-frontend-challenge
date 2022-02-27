import { MdExpandMore } from 'react-icons/md';
import { FiRefreshCcw } from 'react-icons/fi';
import { AccordionContainer, ShowMoreButtonContainer } from './style';
import ActionAccordion from './ActionAccordion';
import { Employee } from '../../types';

interface EmployeeAccordionProps {
  employees: Employee[]
}

export default function EmployeeAccordion({ employees }: EmployeeAccordionProps) {
  return (
    <AccordionContainer>
      {
        employees.map((employee) => (
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
      <ShowMoreButtonContainer >
        <div className="button-content">
          <FiRefreshCcw />
          <strong>Carregar Mais</strong>
        </div>
      </ShowMoreButtonContainer>
    </AccordionContainer>
  )
}
