import styled from 'styled-components';
import { deviceWidth } from '../../styles/style';


interface LinkContainerProps {
  actualPath: string,
  componentPath: string
}

export const LinkContainer = styled.div<LinkContainerProps>`
  @media only screen and (max-width: ${deviceWidth.mobile.maxWidth}) {
      display: none;
  }
  height: 100%;
  width: 13rem;
  /* border-color: var(--cyan-300);
  border-width: 2px;
  border-bottom: ${(props) => props.actualPath === props.componentPath ? 'solid' : 'none' }; */

  a {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.actualPath === props.componentPath ? '#34423D' : '#A3B8B0'}
  }

  a::after {
    content: '';
    height: 2px;
    width: 13rem;
    position: absolute;
    bottom: -2px;
    left: 0;
    background: ${(props) => props.actualPath === props.componentPath ? '#22E0A1' : 'transparent' };
  }
`