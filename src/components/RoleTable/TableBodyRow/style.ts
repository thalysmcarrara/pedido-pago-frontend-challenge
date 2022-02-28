import styled from 'styled-components';

export const TableRow = styled.tr`
  color: var(--black-100);

  td:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      max-width: 120px;
      font-weight: 600;
    }
  }

  td:nth-last-child(2) {
    span {
      background: var(--cyan-100);
      display: inline-block;
      width: 4.5rem;
      height: 1.5rem;
      text-align: center;
      line-height: 1.5rem;
      border-radius: 5rem;
      font-weight: 500;
      color: var(--black-600)
    }
  }

  td:last-child {
    text-align: end;
    position: relative;
    
    svg {
      transform: scale(2);
      color: var(--black-100);
    }
  }
`