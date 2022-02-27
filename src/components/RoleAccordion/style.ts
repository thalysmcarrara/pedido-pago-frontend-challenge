import styled from 'styled-components';
import { deviceWidth } from '../../styles/style';

export const AccordionContainer = styled.section`
  @media only screen and (max-width: ${deviceWidth.tablet.maxWidth}) {
    display: block;
  }

  width: 100%;
  display: none;

  details + details {
    margin-top: 8px;
  }

  details {
    &.details-parent {
      width: 100%;
      min-height: 65px;
      border: 2px solid var(--gray-100);
      border-radius: 0.5rem;
      padding: 1rem;
    }


    strong {
      font-weight: 600;
    }

    span {
      font-weight: 400;
    }

    strong, span {
      font-size: 12px;
      line-height: 16.8px;
      color: var(--black-100);
    }

    &[open] {
      border-color: var(--cyan-100);
    }

    &[open] summary {
      div {
        &.hidden {
          display: flex;
        }
      }

      svg {
        transform: rotate(180deg) scale(2);
      }
    }

    summary {
      &.summary-parent {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        grid-template-rows: 33px;
        position: relative;
      }

      div {
        &.item-container {
          display: flex;
          flex-direction: column;
        }

        &.hidden {
          display: none;
        }
      }

      svg {
        transition: all 0.3s;
        transform: scale(2);
        color: var(--black-100);
        position: absolute;
        right: 20px;
        bottom: 10px;
      }
    }

    div {
      &.alone-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 65px;
        margin-top: 8px;
      }
    }
  }
`

export const ShowMoreButtonContainer = styled.button`
  margin-top: 24px;
  width: 100%;
  height: 50px;
  border: 2px solid var(--cyan-100);
  border-radius: 8px;
  background: var(--white);

  div {
    svg {
      transform: scale(1.5);
      color: var(--cyan-100);
    }

    strong {
      margin-left: 8px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: var(--black-600);
    }
  }
`