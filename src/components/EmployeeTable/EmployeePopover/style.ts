import styled from 'styled-components';

export const PopoverContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--gray-400);
  width: 340px;
  height: 132px;
  border-radius: 0.5rem;
  background-color: var(--white);
  z-index: 2;
  top: -100px;
  left: -150px;

  @media screen and (max-width: 1200px) {
    left: -300px;
  }

  div {
    svg {
      margin: 0.5rem 1rem 0 0;
      cursor: pointer;
    }
  }

  button:hover, a:hover {
    background: var(--gray-100);
  }

  button, a {
    width: 100%;
    height: 50%;
    border: none;
    color: var(--black-100);
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 3;
    background: var(--white);

    svg {
      margin: 0 0 0 2.5rem;
    }

    span {
      margin: 0 0 0 2.5rem;
    }
  }

  button:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    color: var(--gray-200);

    svg {
      transform: scale(1.5);
      color: var(--gray-200);
    }
  }
`