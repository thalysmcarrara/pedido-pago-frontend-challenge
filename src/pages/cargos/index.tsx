import { GetServerSideProps} from 'next';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { role } from '../../types'
import { ActiveLink, SearchBar, RoleTable, PaginationHandler } from '../../components';
import { Container, Hero, PaginationContainer } from '../../styles/style';

interface RolesProps {
  roles: role[]
}

export default function Roles({ roles }: RolesProps) {
  const { asPath } = useRouter();
  console.log(roles)
  return (
    <Container>
      <h1>Cargos</h1>
      <Hero>
        <nav>
          <ActiveLink name="Colaboradores" href='/' actualPath={asPath}/> 
          <ActiveLink name='Cargos' href='/cargos' actualPath={asPath}/>
        </nav>

        <SearchBar placeholderTextSearch='cargos'/>

        <h2>Listagem de cargos</h2>

        <RoleTable roles={roles}/>

        <PaginationContainer justifyContent='end'>
          <PaginationHandler />
        </PaginationContainer>

      </Hero>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  try {
    const result = await api.get('/roles').then((response) => response.data)

    return {
      props: {
        roles: result.roles
      }
    }
  } catch {
    return {
      props: {
        roles: []
      }
    }
  }
}

