import styled from 'styled-components';

export const SearchBarContainer = styled.fieldset`
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 0.2rem 20px 0.7rem;

  legend {
    font-weight: 500;
    color: var(--gray-400)
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      height: 24px;
      width: 24px;
    }
    input {
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #587169;
    }

    input::placeholder {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #587169;
    }
  }  
`