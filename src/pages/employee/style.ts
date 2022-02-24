import styled from 'styled-components';
import { shade } from 'polished';
import { deviceWidth } from '../../styles/style';

const { desktop, mobile, tablet } = deviceWidth;

export const Container = styled.main`
  max-width: 956px;
  margin: 0 auto 3rem auto;

  @media only screen and (min-width: ${desktop.minWidth}) {
    padding: 0 1.5rem;
  }

  @media only screen and (min-width: ${tablet.minWidth}) and (max-width: ${tablet.maxWidth}) {
    padding: 0 1rem;
  }

  @media only screen and (min-width: ${mobile.minWidth}) and (max-width: ${mobile.maxWidth}) {
    padding: 0 0.5rem;

    div.title-container a {
      height: 1.8rem;
      width: 1.8rem;
    }
  }

  h1 {
    font-weight: 600;
    line-height: 2rem;
    font-size: 2rem;
    color: var(--black-600);
  }

  div {
    &.title-container {
      display: flex;
      align-items: center;
      margin: 2.5rem 0 0 0;
      
      a {
        height: 2.25rem;
        width: 2.25rem;
        border-radius: 50%;
        background: var(--gray-100);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1rem 0 0;

        svg {
          transform: scale(1.5);
          color: var(--black-600);
        }
      }
    }
  }
`

export const Hero = styled.section`
  margin: 1rem 0 0 0;
  width: 100%;
  padding: 2.5rem 1.6rem;
  background: var(--white);
  border-radius: 0.5rem;
  filter: drop-shadow(2px 2px 4px ${shade(0.16, '#A5ABB3')});
  display: flex;
  flex-direction: column;
  border-bottom: 2.5rem;

  nav {
    height: 2.5rem;
    border-bottom: 2px solid var(--gray-100);
    display: flex;
  }

  h2 {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.68rem;
    color: var(--black-600);
    margin: 2.5rem 0 0 0;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (min-width: 320px) and (max-width:414px) {
    
  }

  div {
    &.image-container {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      background: var(--gray-100);
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        transform: scale(2);
        color: var(--black-100);
      }
    }

    &.text-info-container {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      strong {
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.68rem;
        color: var(--black-100);
      }

      span {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.05rem;
      }
    }
  }
`

export const PersonalCardContainer = styled.div`
  margin-top: 1.5rem;
  height: 4.4rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  div {

    &.card-info {
      height: 100%;
      background-color: var(--gray-100);
      border: 2px solid var(--gray-200);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 0 1rem;
      gap: 0.5rem;
    }

    &.user-image {
      height: 2.375rem;
      width: 2.375rem;
      background: var(--gray-200);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        transform: scale(1.105);
      }
    }

    &.text-card-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;

      span {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0.9rem;
        color: var(--black-100);
      }

      strong {
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 0.875rem;
      }
    }
  }

  /* mobile */

  @media screen and (max-width: 670px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 1fr);
    height: fit-content;
    gap: 0.5rem;

    div {
      &.card-info {
        height: 4.4rem;
      }
    }
  }
`