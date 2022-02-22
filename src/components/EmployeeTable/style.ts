import styled from 'styled-components';

export const TableContainer = styled.table`
  text-align: left;

  th {
      border-top: 1px solid var(--gray-200);
      font-weight: 600;
      color: var(--black-100);
  }

  td{ 
    padding: 1rem;
    
  }

  th, td {
    padding: 1rem;
    border-bottom: 1px solid var(--gray-200);
    font-size: 0.75rem;
    line-height: 1.0625rem;
  }

  th:first-child {
    border-left: 1px solid var(--gray-200);  
    border-top-left-radius: 0.5rem;
  }

  th:last-child {
    border-right: 1px solid var(--gray-200);
    border-top-right-radius: 0.5rem;
  }
`

export const TableBodyRowActive = styled.tr`
  color: var(--black-100);

  td:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      height: 32px;
      border-radius: 50%;
    }

    span {
      max-width: 120px;
      font-weight: 600;
    }
  }
`

export const TableBodyRowInactive = styled(TableBodyRowActive)`
  color: var(--gray-400);
  filter: grayscale(1)
`