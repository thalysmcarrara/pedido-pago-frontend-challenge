import styled from 'styled-components';
import { deviceWidth} from '../../styles/style';

const { mobile } = deviceWidth

export const TableContainer = styled.table`
  @media only screen and (max-width: ${mobile.maxWidth}) {
    td + td {
    text-align: center;
  }
  }
  text-align: left;

  th {
      border-top: 1px solid var(--gray-200);
      font-weight: 600;
      color: var(--black-100);
  }

  td{ 
    padding: 1rem;
    
  }

  th, td {
    padding: 1rem;
    border-bottom: 1px solid var(--gray-200);
    font-size: 0.75rem;
    line-height: 1.0625rem;
  }

  th:first-child {
    border-left: 1px solid var(--gray-200);  
    border-top-left-radius: 0.5rem;
  }

  th:last-child {
    border-right: 1px solid var(--gray-200);
    border-top-right-radius: 0.5rem;
  }
`