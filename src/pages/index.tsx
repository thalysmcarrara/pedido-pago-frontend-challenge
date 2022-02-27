import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Container, Hero, PaginationContainer } from '../styles/style';
import {
  ActiveLink,
  SearchBar,
  EmployeeTable,
  PaginationHandler,
  ItemsPerPage,
  ActiveLinkMobile,
  EmployeeAccordion,
} from '../components';
import { api } from '../services/api';
import { Employee } from '../types';

interface HomeProps {
  employees: Employee[]
}

export default function Home({ employees }: HomeProps) {
  const { asPath } = useRouter();

  return (
      <Container>
        <h1>Organização</h1>
        <Hero>
          {/* nav mobile */}
            <ActiveLinkMobile currentPageName='Colaboradores' nextPageName='Cargos' nextPageLink='/cargos'/>

          {/* nav desktop */}
          <nav>
            <ActiveLink name="Colaboradores" href='/' actualPath={asPath}/> 
            <ActiveLink name='Cargos' href='/cargos' actualPath={asPath}/>
          </nav>

          <SearchBar placeholderTextSearch='nome ou cpf'/>

          <h2>Listagem de colaboradores</h2>

          {/* mobile / tablet */}
          <EmployeeAccordion employees={employees}/>

          {/* desktop */}
          <EmployeeTable employees={employees}/>

          <PaginationContainer justifyContent='space-between'>
            <ItemsPerPage />
            <PaginationHandler />
          </PaginationContainer>
        </Hero>
      </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  try {
    const result = await api.get('/agents').then((response) => response.data)

    return {
      props: {
        employees: result.items
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}