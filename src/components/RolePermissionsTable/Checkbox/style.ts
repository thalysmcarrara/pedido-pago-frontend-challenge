import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    svg {
      &.checked {
        display: none;
        color: #1DD195;
      }
      &.unchecked {
        display: block;
        color: var(--gray-200);
      }
    }
  }

  input[type="checkbox"]:checked + label {
    svg {
      &.checked {
        display: block;
      }
      &.unchecked {
        display: none;
      }
    }
  }
  
`