import styled from 'styled-components';

export const ActionAccordionContainer = styled.div`
  width: 100%;

  details {
    width: 100%;
    min-height: 60px;
    border: 2px solid var(--cyan-100);
    border-radius: 0.5rem;
    padding: 0;

    &[open] summary {
      svg {
        &.control-file-icon {
          color: var(--gray-400);
        }
        &.control-expand-icon {
          display: initial;
        }
      }
    }
    
    summary {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      position: relative;

      svg {
        &.control-expand-icon {
          display: none;
          position: absolute;
          right: 20px;
        }
      }

      div {
        &.summary-items-container {
          height: 60px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            color: var(--cyan-300);
            transition: none;
          }

          strong {
            margin-left: 11px;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }

    div {
      &.dropdown {
        width: 100%;

        a {
          display: block;
          padding: 8px 24px;
          border-top: 1px solid var(--gray-100);

          &.disabled {
            span {
              color: var(--gray-200);
            }
          }

          &.enabled {
            svg {
              color: var(--black-100);
            }

            span {
              color: var(--black-100);
            }
          }

          svg {
            transform: scale(1.5);
            color: var(--gray-200);
          }

          span {
            margin-left: 20px;
          }
        }
      }
    }
  }
`