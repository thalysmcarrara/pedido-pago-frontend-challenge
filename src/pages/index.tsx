import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Container, Hero } from '../styles/style';
import { ActiveLink, SearchBar, EmployeeTable } from '../components';
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
          <nav>
            <ActiveLink name="Colaboradores" href='/' actualPath={asPath}/> 
            <ActiveLink name='Cargos' href='/cargos' actualPath={asPath}/>
          </nav>

          <SearchBar />

          <h2>Listagem de colaboradores</h2>
          
          <EmployeeTable employees={employees}/>
        
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
      props: {
        employees: []
      }
    }
  }
  

  
}

