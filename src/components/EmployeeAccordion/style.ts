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
    width: 100%;
    min-height: 89px;
    border: 2px solid var(--gray-100);
    border-radius: 0.5rem;
    padding: 1rem;

    strong, span {
      font-weight: 600;
      font-size: 12px;
      line-height: 16.8px;
      color: var(--black-100);
    }

    &[open] summary {
      /* div {
        &.control-grayscale {
          filter: grayscale(1);
        }
      } */
      /* &.border-color-control {
        border: 2px solid var(--gray-200);
      } */
    }

    &[open] {
      border-color: var(--cyan-100);
    }

    &[open] div {
      &.img-container {
        border: 2px solid #1DD195;
      }
    }

    &[open] summary {
      svg {
        transform: rotate(180deg) scale(2);
      }
    }

    summary {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      svg {
        transition: all 0.3s;
        transform: scale(2);
        color: var(--black-100);
      }

      div {
        &.summary-content-container {
          height: 100%;
        }

        &.summary-data-container {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-top: 2px;
          filter: grayscale(1);
        }

        &.control-border-image-color {
          filter: grayscale(1);
        }

        &.control-grayscale {
          filter: grayscale(0);
        }

        &.img-container {
          height: 32px;
          width: 32px;
          border-radius: 50%;
          /* border: 3px solid #1DD195; */
          display: flex;
          overflow: hidden;

          img {
            max-width: 100%;
            height: auto;
          }
        }
      }
    }

    div {
      &.dropdown {
        width: 100%;

        div {
          &.grid-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 65px 65px;

            div {
              &.grid-item {
                display: flex;
                flex-direction: column;
                justify-content: center;

                span {
                  font-weight: 400;
                }
              }
            }
          }

          &.status-row {
            width: 100%;
            height: 75px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            div {
              &.badge {
                background: var(--cyan-100);
                width: fit-content;
                padding: 4px 18px;
                border-radius: 80px;
              }

              &.control-background-badge {
                filter: grayscale(1);
              }

              strong {
                font-weight: 500;
                font-size: 14px;
                line-height: 16.24px;
              }
            }
          }
        }
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
      /* width: 24px;
      height: 20px; */
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