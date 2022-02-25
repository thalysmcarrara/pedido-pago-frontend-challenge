import styled from 'styled-components';


export const Card = styled.fieldset`
  border: 2px solid var(--gray-200);
  border-radius: 0.5rem;
  width: 100%;
  padding: 1rem 1.5rem 1rem 1.25rem;
  background: var(--gray-100);
  cursor: pointer;

  legend {
    color: var(--gray-200);
    padding: 0 0.25rem;
    font-weight: 500;
    font-size: 0.875;
    line-height: 1px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    span {
      font-weight: 500;
      color: var(--black-100);
      font-size: 1rem;
      line-height: 1.5rem;
    }

    svg {
      transform: scale(1.5);
    }
  }
`