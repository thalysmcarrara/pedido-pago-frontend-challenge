import styled from 'styled-components';

export const ItemsPerPageContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  height: 100%;
  align-items: center;

  span {
    font-weight: 400;
    color: var(--black-100);
  }

  select {
    font-weight: 500;
    width: 78px;
  }
`