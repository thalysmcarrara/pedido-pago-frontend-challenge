import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.main`
  height: calc(100vh - 61px);
  max-width: 956px;
  margin: 0 auto;

  h1 {
    font-weight: 600;
    line-height: 2rem;
    font-size: 2rem;
    color: var(--black-600);
    padding: 2rem 0 1rem;
  }
`

export const Hero = styled.section`
  width: 100%;
  padding: 2.5rem 1.6rem;
  background: var(--white);
  border-radius: 0.5rem;
  filter: drop-shadow(2px 2px 4px ${shade(0.16, '#A5ABB3')});
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  nav {
    height: 2.5rem;
    border-bottom: 2px solid var(--gray-100);
    display: flex;
  }

  h2 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    color: var(--black-600);
  }
`