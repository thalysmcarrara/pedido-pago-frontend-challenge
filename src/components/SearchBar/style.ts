import styled from 'styled-components';

export const SearchBarContainer = styled.fieldset`

  @media only screen and (max-width: 460px) {
      padding: 0.2rem 0 0.7rem 0.5rem;
    }

  border: 2px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 0.2rem 20px 0.7rem;
  width: 100%;

  legend {
    font-weight: 500;
    color: var(--gray-400);
    padding: 0 6px;
  }

  div {
    @media only screen and (max-width: 460px) {
      gap: 0.5rem;
      
      input {
        max-width: 190px;
      }
    }

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