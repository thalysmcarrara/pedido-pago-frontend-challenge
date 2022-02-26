import styled from 'styled-components';
import { transparentize } from 'polished';
import { deviceWidth } from '../../styles/style';

export const SelectContainer = styled.details`
  @media only screen and (max-width: ${deviceWidth.mobile.maxWidth}) {
    display: flex;
  }

  display: none;
  width: 100%;
  min-height: 56px;
  border: 2px solid var(--gray-200);
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--black-100);
  
  summary {
    list-style: none;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.625rem 0 1rem;

    svg {
      transform: scale(2);
      color: var(--black-100);
      pointer-events: none;
    }
  }

  .control-close-icon {
    display: none;
  }

  &[open] .control-close-icon{
    display: block;
  }

  &[open] .control-expand-icon{
    display: none;
  }
`

export const DropdownContent = styled.div`
  a {
    display: block;
    height: 56px;
    width: 100%;
    padding: 0 1.625rem 0 1rem;
    background: ${transparentize(0.9,'#22E0A1')};
    
    span {
      line-height: 56px;
    }
  }
`