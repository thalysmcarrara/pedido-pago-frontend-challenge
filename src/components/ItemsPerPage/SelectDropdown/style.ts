import styled from 'styled-components';

interface DropdownProps {
  isOpen: boolean
  itemsCount: number
}

export const SelectContainer = styled.div`
  width: 78px;
  height: 36px;
  position: relative;

  button {
    width: 100%;
    height: 100%;
    border: 1px solid var(--gray-200);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--white);

    span {
      color: var(--black-100);
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    div {
      height: 100%;
      display: flex;
      align-items: center;
      svg {
        transform: rotate(-90deg) scale(1.5);
        color: var(--black-100);
      }
    }
  }
`

export const Dropdown = styled.div<DropdownProps>`
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
  width: 100%;
  height: ${({isOpen, itemsCount}) => isOpen ? `${(itemsCount * 25) + (itemsCount -1)}px`: '0'};
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  background: var(--white);
  position: absolute;
  top: 0;
  left: 79px;
  transition: height 1s;

  div {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--gray-200);

    label {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  div:first-child {
      border-radius: 0.5rem 0.5rem 0 0;
    }

  div:last-child {
    border-bottom: none;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  div:hover {
    background: var(--gray-100);
  }

  input[type="radio"] {
    display: none;
  }
`