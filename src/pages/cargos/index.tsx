import { GetServerSideProps} from 'next';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { Role } from '../../types';
import { ActiveLink,
  ActiveLinkMobile,
  SearchBar,
  RoleTable,
  PaginationHandler,
  RoleAccordion
} from '../../components';
import { Container, Hero, PaginationContainer } from '../../styles/style';

interface RolesProps {
  roles: Role[]
}

export default function Roles({ roles }: RolesProps) {
  const { asPath } = useRouter();

  return (
    <Container>
      <h1 data-testid="role-title">Cargos</h1>
      <Hero>
        {/* mobile nav */}
        <ActiveLinkMobile currentPageName='Cargos' nextPageName='Colaboradores' nextPageLink='/'/>

        {/* desktop nav */}
        <nav>
          <ActiveLink name="Colaboradores" href='/' actualPath={asPath}/> 
          <ActiveLink name='Cargos' href='/cargos' actualPath={asPath}/>
        </nav>

        <SearchBar placeholderTextSearch='cargos'/>

        <h2>Listagem de cargos</h2>

        {/* mobile */}
        <RoleAccordion roles={roles}/>

        {/* desktop */}
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

