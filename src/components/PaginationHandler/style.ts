import styled from 'styled-components';

export const PaginationHandlerContainer = styled.div`
  span {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--black-100);
    margin: 0 0.5rem;
  }
`
export const ArrowButtonLeft = styled.button`
    background: var(--white);
    padding: 0 0.7rem;
    border: 1px solid var(--gray-200);
    text-align: center;
    vertical-align: middle;
    
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    svg {
      transform: scale(1.5);
      fill: var(--black-100);
      display: block;
      margin: 0.4rem 0;
    }
`

export const ArrowButtonRight = styled(ArrowButtonLeft)`
  border-radius: 0 0.5rem 0.5rem 0;
  border: 1px solid var(--black-100);

  &:hover {
      background: var(--gray-100);
  }
`